import { useMemo, useState, type JSX } from 'react';
import { Link, useNavigate } from 'react-router';
import { randomSeed } from '../session/rng.ts';
import { loadActive } from '../session/active.ts';
import { loadRoutines } from '../storage/routines.ts';
import { useFavourites } from '../storage/favourites.ts';
import { routineSeconds, startRoutine } from './Routines.tsx';
import { loadHistory, loadProfile, saveProfile } from '../storage/store.ts';
import { formatDuration, streaks, totals } from '../storage/stats.ts';
import { primeAudio } from '../hooks/audio.ts';
import { EXERCISES } from '../content/exercises.ts';
import { REGION_LABELS, REGION_ORDER, type Region } from '../content/types.ts';
import { GroundworkMark } from '../brand/GroundworkMark.tsx';
import { Button, Card, Screen } from '../ui.tsx';

const DURATIONS = [5, 10, 15, 20];

export function Home(): JSX.Element {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(loadProfile);
  const history = useMemo(loadHistory, []);
  const resumable = useMemo(loadActive, []);
  const routines = useMemo(loadRoutines, []);
  const favourites = useFavourites();
  // Deliberately not persisted: a focused draw is a decision for today, so the
  // default every time you open the app stays "anywhere".
  const [focus, setFocus] = useState<Set<Region>>(() => new Set<Region>());
  // The full explanation is open on a first visit and closed once you have
  // sessions behind you - it stays one tap away rather than disappearing, but a
  // daily user should not have to scroll past the pitch to reach the button.
  const [introOpen, setIntroOpen] = useState(() => history.length === 0);

  const { current, longest } = useMemo(() => streaks(history), [history]);
  const summary = useMemo(() => totals(history), [history]);

  const setMinutes = (minutes: number): void => {
    const next = { ...profile, defaultMinutes: minutes };
    setProfile(next);
    saveProfile(next);
  };

  const toggleFocus = (region: Region): void => {
    setFocus((current) => {
      const next = new Set(current);
      if (next.has(region)) next.delete(region);
      else next.add(region);
      return next;
    });
  };

  const start = (): void => {
    primeAudio();
    const query = focus.size > 0 ? `&focus=${[...focus].join(',')}` : '';
    navigate(`/session?seed=${randomSeed()}&minutes=${profile.defaultMinutes}${query}`);
  };

  return (
    <Screen>
      <header className="pt-10 pb-6">
        <div className="flex items-center gap-3">
          <GroundworkMark size={36} decorative className="shrink-0 text-accent" />
          <span>
            <span className="block text-lg font-semibold leading-none tracking-tight">
              GROUNDWORK
            </span>
            <span className="label mt-1 block leading-none">Flexibility</span>
          </span>
        </div>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {current > 0 ? (
            <>
              <span className="text-accent">{current}</span> day
              {current === 1 ? '' : 's'} on the ground
            </>
          ) : (
            'Get back on the floor'
          )}
        </h1>
        <p className="mt-2 text-bone-dim">
          {current > 0
            ? `Longest run ${longest} days · ${formatDuration(summary.seconds)} total`
            : 'Ground-based mobility for people who train hard and never stretch.'}
        </p>
      </header>

      <details
        open={introOpen}
        onToggle={(event) => setIntroOpen(event.currentTarget.open)}
        className="group mb-8 rounded-2xl border border-edge bg-surface px-5"
      >
        {/* `display: flex` on a summary removes Chrome's default disclosure
            marker, so the chevron below is the only affordance - without it this
            reads as a heading rather than something you can open. */}
        <summary className="label flex min-h-11 cursor-pointer items-center justify-between gap-3 text-bone-dim hover:text-bone">
          What this is
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-4 shrink-0 transition-transform group-open:rotate-180"
          >
            <path
              d="M6 9l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </summary>
        <div className="space-y-3 pb-5 text-sm leading-relaxed text-bone-dim">
          <p>
            You train. You probably have not sat on the floor in years. Chairs, cars
            and desks let your hips, ankles and lower back settle into a narrow range,
            and lifting does not undo it — a squat rack never asks your ankle to bend
            past the point where your heel lifts. That range just stops being asked
            for.
          </p>
          <p>
            <span className="text-bone">Groundwork is the asking.</span> Every session
            is built from the positions people rested in before furniture — deep squat,
            seiza, shin box, long sit, 90/90 — held long enough to matter. Ten or
            twenty minutes on the floor, most days. Not stretching bolted onto your
            training: the positions your training does not cover.
          </p>
          <p>
            {EXERCISES.length} positions across hips, hamstrings, ankles and feet, and
            back and spine, each telling you what you should feel and what you should
            not. No account and no sign-up — your streak and your saved workouts live
            in this browser and nowhere else, so{' '}
            <Link
              to="/settings"
              className="underline underline-offset-4 hover:text-bone"
            >
              take a backup
            </Link>{' '}
            now and then.
          </p>
        </div>
      </details>

      {resumable !== null && (
        <Card className="mb-6 border-accent/40">
          <p className="text-sm text-bone-dim">You left a session unfinished.</p>
          <div className="mt-3 flex gap-3">
            <Button to="/session/play" variant="primary">
              Resume
            </Button>
          </div>
        </Card>
      )}

      <h2 className="label mb-3">Two ways to start</h2>

      <Card>
        <h3 className="text-xl font-semibold tracking-tight">Let it choose</h3>
        <p className="mt-1.5 mb-5 text-sm leading-relaxed text-bone-dim">
          Say roughly what you want to work on and how long you have. Groundwork draws
          the positions and times them for you.{' '}
          <span className="text-bone">A different set every day</span> — so you cover
          the things you would never pick yourself, which are usually the ones you need.
        </p>

        <fieldset className="mb-5">
          <legend className="text-sm text-bone-dim">Focus on</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFocus(new Set<Region>())}
              aria-pressed={focus.size === 0}
              className={`inline-flex min-h-11 items-center rounded-full border px-3.5 py-2 text-sm transition-colors ${
                focus.size === 0
                  ? 'border-accent bg-accent text-ink'
                  : 'border-control bg-surface-2 text-bone-dim hover:text-bone'
              }`}
            >
              Anywhere
            </button>
            {REGION_ORDER.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => toggleFocus(region)}
                aria-pressed={focus.has(region)}
                className={`inline-flex min-h-11 items-center rounded-full border px-3.5 py-2 text-sm transition-colors ${
                  focus.has(region)
                    ? 'border-accent bg-accent text-ink'
                    : 'border-control bg-surface-2 text-bone-dim hover:text-bone'
                }`}
              >
                {REGION_LABELS[region]}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm text-bone-dim">How long have you got?</legend>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {DURATIONS.map((minutes) => (
              <button
                key={minutes}
                type="button"
                onClick={() => setMinutes(minutes)}
                aria-pressed={profile.defaultMinutes === minutes}
                className={`rounded-xl border py-3 text-base font-medium transition-colors ${
                  profile.defaultMinutes === minutes
                    ? 'border-accent bg-accent text-ink'
                    : 'border-control bg-surface-2 text-bone-dim hover:text-bone'
                }`}
              >
                {minutes}
                <span className="ml-0.5 text-xs">min</span>
              </button>
            ))}
          </div>
        </fieldset>

        <Button variant="primary" onClick={start} className="mt-5 w-full py-4 text-lg">
          Draw me a session
        </Button>
        <p className="mt-3 text-center text-xs text-bone-dim">
          {focus.size > 0
            ? 'Drawn at random from those areas.'
            : profile.pureChaos
              ? 'Pure chaos is on — no structure at all.'
              : 'Drawn at random from the library.'}
        </p>
      </Card>

      <p className="my-4 text-center text-sm text-bone-dim" aria-hidden="true">
        or
      </p>

      <Card>
        <div className="mb-3 flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight">Choose it yourself</h3>
          {routines.length > 0 && (
            <Link
              to="/routines"
              className="-mr-2 inline-flex min-h-11 shrink-0 items-center rounded-lg px-2 text-sm text-bone-dim hover:text-bone"
            >
              See all
            </Link>
          )}
        </div>
        <p className="mb-5 text-sm leading-relaxed text-bone-dim">
          Pick the positions you actually want and save them as a workout.{' '}
          <span className="text-bone">The same set every time</span>, in the order you
          set — for the stiff hip you are already working on, or the three things you
          know you will do.
        </p>

        {routines.length === 0 ? (
          <div className="flex flex-wrap gap-3">
            <Button to="/build" variant="primary">
              Build a workout
            </Button>
            {favourites.length > 0 && (
              <Button to="/build?from=favourites">From my favourites</Button>
            )}
          </div>
        ) : (
          <>
            <ul className="space-y-2">
              {routines.slice(0, 3).map((routine) => (
                <li
                  key={routine.id}
                  className="flex items-center gap-3 rounded-xl border border-edge bg-surface-2 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{routine.name}</p>
                    <p className="text-sm text-bone-dim">
                      {routine.exerciseIds.length} positions ·{' '}
                      {Math.max(1, Math.round(routineSeconds(routine) / 60))} min
                    </p>
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => {
                      primeAudio();
                      startRoutine(routine);
                      navigate('/session/play');
                    }}
                  >
                    Start
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button to="/build">Build another</Button>
              {favourites.length > 0 && (
                <Button to="/favourites" variant="ghost">
                  {favourites.length} favourite{favourites.length === 1 ? '' : 's'}
                </Button>
              )}
            </div>
          </>
        )}
      </Card>

      <p className="mt-8 text-center text-sm text-bone-dim">
        Not sure what any of it is?{' '}
        <Link to="/library" className="underline underline-offset-4 hover:text-bone">
          Browse all {EXERCISES.length} positions
        </Link>
        .
      </p>

      {summary.sessions > 0 && (
        <p className="mt-3 text-center text-sm text-bone-dim">
          {summary.sessions} session{summary.sessions === 1 ? '' : 's'} so far.
        </p>
      )}

      <p className="mt-6 text-center text-xs text-bone-dim">
        <Link
          to="/settings"
          className="inline-flex min-h-11 items-center px-3 underline underline-offset-4 hover:text-bone"
        >
          Anything you need to work around?
        </Link>
      </p>
    </Screen>
  );
}
