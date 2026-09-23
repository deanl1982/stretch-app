import { useCallback, useEffect, useMemo, useRef, useState, type JSX } from 'react';
import { useNavigate } from 'react-router';
import { getExercise } from '../content/exercises.ts';
import { buildPhases, describeDose, estimateSeconds } from '../session/phases.ts';
import { clearActive, loadActive, saveActive, type ActiveSession } from '../session/active.ts';
import { appendSession } from '../storage/store.ts';
import { loadProfile } from '../storage/store.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { AnimatedFigure } from '../figures/AnimatedFigure.tsx';
import { getMotion } from '../figures/motions/index.ts';
import {
  advanceChime,
  countdownTick,
  finishChime,
  speak,
  switchSidesChime,
} from '../hooks/audio.ts';
import { useWakeLock } from '../hooks/useWakeLock.ts';
import { Button } from '../ui.tsx';

/** Past this many reps the pips are noise; the ring and the count carry it. */
const MAX_PIPS = 24;

function Ring({ progress }: { progress: number }): JSX.Element {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
      <circle cx="60" cy="60" r={radius} fill="none" stroke="currentColor" strokeWidth="5" opacity="0.15" />
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - progress)}
        style={{ transition: 'stroke-dashoffset 0.9s linear' }}
      />
    </svg>
  );
}

export function Player(): JSX.Element {
  const navigate = useNavigate();
  const profile = useMemo(loadProfile, []);
  const [session, setSession] = useState<ActiveSession | null>(loadActive);
  const [remaining, setRemaining] = useState(0);
  const [paused, setPaused] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  /** Reps finished in the current phase. Always 0 on a hold. */
  const [repsDone, setRepsDone] = useState(0);

  const exercise = useMemo(() => {
    if (session === null) return undefined;
    const id = session.plannedIds[session.index];
    return id === undefined ? undefined : getExercise(id);
  }, [session]);

  const phases = useMemo(
    () => (exercise === undefined ? [] : buildPhases(exercise, profile.holdLevel)),
    [exercise, profile.holdLevel],
  );
  const phase = phases[phaseIndex];
  const total = phase?.seconds ?? 0;

  useWakeLock(session !== null && !paused);

  // No session to run — send them home rather than showing an empty clock.
  useEffect(() => {
    if (session === null) navigate('/', { replace: true });
  }, [session, navigate]);

  // New exercise: back to its first phase.
  useEffect(() => {
    if (exercise === undefined) return;
    setPhaseIndex(0);
    if (profile.voice) speak(`${exercise.name}. ${exercise.cues[0] ?? ''}`);
  }, [exercise, profile.voice]);

  // New phase: reset the clock and the rep count. A paced rep phase starts on
  // one rep's worth of seconds, not the whole block; a self-paced one starts at
  // zero, because it is a stopwatch counting up rather than a deadline.
  useEffect(() => {
    if (phase === undefined) return;
    setRepsDone(0);
    if (phase.kind === 'hold') setRemaining(phase.seconds);
    else setRemaining(profile.repPacing === 'manual' ? 0 : phase.secondsPerRep);
  }, [phase, profile.repPacing]);

  const finish = useCallback(
    (final: ActiveSession) => {
      appendSession({
        id: `${final.startedAt}-${final.seed}`,
        dateISO: final.startedAt,
        seed: final.seed,
        budgetSeconds: final.budgetSeconds,
        plannedIds: final.plannedIds,
        completedIds: final.completedIds,
        skippedIds: final.skippedIds,
        totalSeconds: final.plannedIds
          .map(getExercise)
          .reduce((sum, item) => sum + (item === undefined ? 0 : estimateSeconds(item)), 0),
      });
      clearActive();
      if (profile.sound) finishChime();
      navigate('/session/done', {
        replace: true,
        state: { completed: final.completedIds.length, planned: final.plannedIds.length },
      });
    },
    [navigate, profile.sound],
  );

  const advance = useCallback(
    (outcome: 'done' | 'skipped') => {
      setSession((current) => {
        if (current === null) return current;
        const id = current.plannedIds[current.index];
        if (id === undefined) return current;

        const next: ActiveSession = {
          ...current,
          index: current.index + 1,
          completedIds:
            outcome === 'done' ? [...current.completedIds, id] : current.completedIds,
          skippedIds:
            outcome === 'skipped' ? [...current.skippedIds, id] : current.skippedIds,
        };

        if (next.index >= next.plannedIds.length) {
          finish(next);
          return null;
        }

        saveActive(next);
        if (profile.sound) advanceChime();
        return next;
      });
    },
    [finish, profile.sound],
  );

  const back = useCallback(() => {
    setSession((current) => {
      if (current === null || current.index === 0) return current;
      const previousId = current.plannedIds[current.index - 1];
      const next: ActiveSession = {
        ...current,
        index: current.index - 1,
        completedIds: current.completedIds.filter((id) => id !== previousId),
        skippedIds: current.skippedIds.filter((id) => id !== previousId),
      };
      saveActive(next);
      return next;
    });
  }, []);

  /** Finish the current phase: next phase, or on to the next exercise. */
  const completePhase = useCallback(() => {
    const isLast = phaseIndex >= phases.length - 1;
    if (isLast) {
      advance('done');
      return;
    }
    const upcoming = phases[phaseIndex + 1];
    if (profile.sound) {
      if (upcoming?.side === 'second') switchSidesChime();
      else advanceChime();
    }
    if (profile.voice && upcoming?.side === 'second') speak('Switch sides');
    setRepsDone(0);
    setPhaseIndex((current) => current + 1);
  }, [phaseIndex, phases, advance, profile.sound, profile.voice]);

  /**
   * Bank one rep. The last rep of the phase ends the phase instead.
   */
  const countRep = useCallback(() => {
    if (phase === undefined || phase.kind !== 'reps') return;
    const next = repsDone + 1;
    if (next >= phase.reps) {
      completePhase();
      return;
    }
    setRepsDone(next);
    // Paced: the next rep's countdown. Manual: a stopwatch restarting at zero.
    setRemaining(profile.repPacing === 'manual' ? 0 : phase.secondsPerRep);
    if (profile.sound) countdownTick();
  }, [phase, repsDone, completePhase, profile.repPacing, profile.sound]);

  // The interval below reads the clock a second after it is scheduled, by which
  // time `remaining` may have moved. A ref keeps it reading the current value
  // without making the effect restart on every tick.
  const remainingRef = useRef(remaining);
  useEffect(() => {
    remainingRef.current = remaining;
  }, [remaining]);

  /**
   * The clock.
   *
   * A hold counts its whole block down. A paced rep counts one rep down and
   * banks it. A manual rep counts *up*, as a stopwatch, and nothing advances
   * until the user taps.
   *
   * The expiry side effect deliberately sits outside the `setRemaining` updater:
   * React double-invokes updaters under StrictMode, so calling `completePhase`
   * from inside one skips a phase in development.
   */
  useEffect(() => {
    if (paused || phase === undefined) return;
    const selfPaced = phase.kind === 'reps' && profile.repPacing === 'manual';

    const tick = window.setInterval(() => {
      if (selfPaced) {
        setRemaining((value) => value + 1);
        return;
      }

      const next = remainingRef.current - 1;
      if (next <= 0) {
        window.clearInterval(tick);
        setRemaining(0);
        if (phase.kind === 'hold') completePhase();
        else countRep();
        return;
      }

      setRemaining(next);
      // Count a hold in at the end. Rep work gets its tick per rep instead,
      // which at three seconds a rep would otherwise be a constant beeping.
      if (phase.kind === 'hold' && next <= 3 && profile.sound) countdownTick();
    }, 1000);

    return () => window.clearInterval(tick);
  }, [paused, phase, profile.repPacing, profile.sound, completePhase, countRep]);

  const quit = (): void => {
    if (session !== null) finish(session);
  };

  if (session === null || exercise === undefined) return <div />;

  const pose = getPose(exercise.id);
  const motion = getMotion(exercise.id);
  const progress = total === 0 ? 0 : 1 - remaining / total;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return (
    <main className="flex min-h-dvh flex-col px-4 pb-6">
      {/* Progress through the session as a row of ticks. */}
      <div
        className="flex gap-1 pt-4"
        role="progressbar"
        aria-label="Session progress"
        aria-valuemin={1}
        aria-valuemax={session.plannedIds.length}
        aria-valuenow={session.index + 1}
        aria-valuetext={`Position ${session.index + 1} of ${session.plannedIds.length}`}
      >
        {session.plannedIds.map((id, index) => (
          <span
            key={`${id}-${index}`}
            className={`h-1 flex-1 rounded-full ${
              index < session.index ? 'bg-accent' : index === session.index ? 'bg-bone' : 'bg-edge'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between py-3 text-sm text-bone-dim">
        <span>
          {session.index + 1} of {session.plannedIds.length}
        </span>
        <button
          type="button"
          onClick={quit}
          className="-mr-2 min-h-11 rounded-lg px-2 hover:text-bone"
        >
          End session
        </button>
      </div>

      <div
        className="flex flex-1 flex-col items-center justify-center gap-5 text-center"
        aria-live="polite"
        aria-atomic="false"
      >
        <h1 className="text-3xl font-semibold tracking-tight">{exercise.name}</h1>
        <p className="text-bone-dim">
          {describeDose(exercise, profile.holdLevel, { pace: false })}
        </p>

        {pose !== undefined &&
          (motion === undefined || !profile.movingFigures ? (
            <Figure
              pose={pose}
              label={`${exercise.name}: ${exercise.summary}`}
              className="h-44 w-full max-w-sm text-label"
            />
          ) : (
            // Held still while the session is paused: a moving figure beside a stopped clock
            // reads as though the exercise is still running.
            <AnimatedFigure
              motion={motion}
              label={`${exercise.name}: ${exercise.summary}`}
              className="h-44 w-full max-w-sm text-label"
              paused={paused}
            />
          ))}

        {phase?.kind === 'reps' ? (
          <div className="flex w-full max-w-sm flex-col items-center gap-3">
            <div className="relative h-32 w-32">
              {/* Paced: the ring is this rep's countdown. Self-paced: it is
                  progress through the set, since there is no deadline to show. */}
              <Ring
                progress={
                  profile.repPacing === 'paced'
                    ? phase.secondsPerRep === 0
                      ? 0
                      : 1 - remaining / phase.secondsPerRep
                    : repsDone / phase.reps
                }
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-4xl font-semibold tabular-nums leading-none">
                  {repsDone + 1}
                  <span className="text-xl text-bone-dim">/{phase.reps}</span>
                </span>
                <span className="label mt-1.5">reps</span>
              </div>
            </div>

            {/* The count, spoken once per change rather than every tick. */}
            <p className="sr-only" aria-live="polite">
              Rep {repsDone + 1} of {phase.reps}
            </p>

            {/* One pip per rep, filled as they bank - the count at a glance from
                arm's length, which the number alone is not. */}
            {phase.reps <= MAX_PIPS && (
            <div className="flex flex-wrap justify-center gap-1.5" aria-hidden="true">
              {Array.from({ length: phase.reps }).map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-4 rounded-full ${
                    index < repsDone ? 'bg-accent' : index === repsDone ? 'bg-bone' : 'bg-edge'
                  }`}
                />
              ))}
            </div>
            )}

            {exercise.dose.kind === 'reps' && exercise.dose.tempoNote !== undefined && (
              <p className="text-sm text-bone-dim">{exercise.dose.tempoNote}</p>
            )}

            {profile.repPacing === 'manual' ? (
              <>
                <Button
                  variant="primary"
                  onClick={countRep}
                  className="w-full py-4 text-lg"
                >
                  {repsDone + 1 >= phase.reps ? 'Last rep done' : 'Rep done'}
                </Button>
                <span className="text-xs text-bone-dim tabular-nums">
                  {remaining}s on this rep
                </span>
              </>
            ) : (
              <>
                <span className="text-xs text-bone-dim">
                  Pacing at {phase.secondsPerRep}s a rep. Pause to take one slower.
                </span>
                <Button variant="ghost" onClick={countRep} className="text-sm">
                  Ahead of it? Count this rep
                </Button>
              </>
            )}
          </div>
        ) : (
          <div className="relative h-32 w-32">
            <Ring progress={progress} />
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="text-4xl font-semibold tabular-nums">
                {minutes > 0 ? `${minutes}:${String(seconds).padStart(2, '0')}` : seconds}
              </span>
            </div>
          </div>
        )}

        {phase !== undefined && phase.label !== '' && (
          <p className="text-sm font-medium text-accent">{phase.label}</p>
        )}

        <ul className="max-w-sm space-y-1.5 text-lg leading-snug text-bone-dim">
          {exercise.cues.map((cue) => (
            <li key={cue}>{cue}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-3 pt-4">
        <Button onClick={back} disabled={session.index === 0} ariaLabel="Previous position">
          Back
        </Button>
        <Button
          variant={phase?.kind === 'reps' ? 'secondary' : 'primary'}
          onClick={() => setPaused((value) => !value)}
          className="flex-1 py-4 text-lg"
        >
          {paused ? 'Resume' : 'Pause'}
        </Button>
        <Button onClick={() => advance('skipped')} ariaLabel="Skip this position">
          Skip
        </Button>
      </div>

      <Button
        to={`/library/${exercise.id}`}
        variant="ghost"
        className="mt-2 w-full text-sm"
      >
        Too hard? See the easier versions
      </Button>
    </main>
  );
}
