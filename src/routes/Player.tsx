import { useCallback, useEffect, useMemo, useState, type JSX } from 'react';
import { useNavigate } from 'react-router';
import { getExercise } from '../content/exercises.ts';
import { describeDose } from '../content/types.ts';
import { buildPhases, estimateSeconds } from '../session/phases.ts';
import { clearActive, loadActive, saveActive, type ActiveSession } from '../session/active.ts';
import { appendSession } from '../storage/store.ts';
import { loadProfile } from '../storage/store.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import {
  advanceChime,
  countdownTick,
  finishChime,
  speak,
  switchSidesChime,
} from '../hooks/audio.ts';
import { useWakeLock } from '../hooks/useWakeLock.ts';
import { Button } from '../ui.tsx';

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
        stroke="var(--color-amber)"
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

  const exercise = useMemo(() => {
    if (session === null) return undefined;
    const id = session.plannedIds[session.index];
    return id === undefined ? undefined : getExercise(id);
  }, [session]);

  const phases = useMemo(() => (exercise === undefined ? [] : buildPhases(exercise)), [exercise]);
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

  // New phase: reset the clock.
  useEffect(() => {
    if (phase === undefined) return;
    setRemaining(phase.seconds);
  }, [phase]);

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

  // The clock.
  useEffect(() => {
    if (paused || exercise === undefined) return;

    const tick = window.setInterval(() => {
      setRemaining((value) => {
        const next = value - 1;

        if (next <= 0) {
          window.clearInterval(tick);
          const isLastPhase = phaseIndex >= phases.length - 1;
          if (isLastPhase) {
            advance('done');
          } else {
            const upcoming = phases[phaseIndex + 1];
            if (profile.sound) {
              if (upcoming?.side === 'second') switchSidesChime();
              else advanceChime();
            }
            if (profile.voice && upcoming?.side === 'second') speak('Switch sides');
            setPhaseIndex((current) => current + 1);
          }
          return 0;
        }

        if (next <= 3 && profile.sound) countdownTick();
        return next;
      });
    }, 1000);

    return () => window.clearInterval(tick);
  }, [paused, exercise, phaseIndex, phases, advance, profile.sound, profile.voice]);

  const quit = (): void => {
    if (session !== null) finish(session);
  };

  if (session === null || exercise === undefined) return <div />;

  const pose = getPose(exercise.id);
  const progress = total === 0 ? 0 : 1 - remaining / total;
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return (
    <div className="flex min-h-dvh flex-col px-4 pb-6">
      {/* Progress through the session as a row of ticks. */}
      <div className="flex gap-1 pt-4" aria-label={`Position ${session.index + 1} of ${session.plannedIds.length}`}>
        {session.plannedIds.map((id, index) => (
          <span
            key={`${id}-${index}`}
            className={`h-1 flex-1 rounded-full ${
              index < session.index ? 'bg-amber' : index === session.index ? 'bg-bone' : 'bg-edge'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between py-3 text-sm text-bone-dim">
        <span>
          {session.index + 1} of {session.plannedIds.length}
        </span>
        <button type="button" onClick={quit} className="hover:text-bone">
          End session
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">{exercise.name}</h1>
        <p className="text-bone-dim">{describeDose(exercise)}</p>

        {pose !== undefined && (
          <Figure
            pose={pose}
            label={`${exercise.name}: ${exercise.summary}`}
            className="h-44 w-full max-w-sm text-bone"
          />
        )}

        <div className="relative h-32 w-32">
          <Ring progress={progress} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-semibold tabular-nums">
              {minutes > 0 ? `${minutes}:${String(seconds).padStart(2, '0')}` : seconds}
            </span>
          </div>
        </div>

        {phase !== undefined && phase.label !== '' && (
          <p className="text-sm font-medium text-amber">{phase.label}</p>
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
          variant="primary"
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
    </div>
  );
}
