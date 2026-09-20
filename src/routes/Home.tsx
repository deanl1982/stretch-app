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
import { Button, Card, Screen } from '../ui.tsx';

const DURATIONS = [5, 10, 15, 20];

export function Home(): JSX.Element {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(loadProfile);
  const history = useMemo(loadHistory, []);
  const resumable = useMemo(loadActive, []);
  const routines = useMemo(loadRoutines, []);
  const favourites = useFavourites();

  const { current, longest } = useMemo(() => streaks(history), [history]);
  const summary = useMemo(() => totals(history), [history]);

  const setMinutes = (minutes: number): void => {
    const next = { ...profile, defaultMinutes: minutes };
    setProfile(next);
    saveProfile(next);
  };

  const start = (): void => {
    primeAudio();
    navigate(`/session?seed=${randomSeed()}&minutes=${profile.defaultMinutes}`);
  };

  return (
    <Screen>
      <header className="pt-10 pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-bone-dim">Groundwork</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {current > 0 ? (
            <>
              <span className="text-amber">{current}</span> day
              {current === 1 ? '' : 's'} on the ground
            </>
          ) : (
            'Get on the floor'
          )}
        </h1>
        <p className="mt-2 text-bone-dim">
          {current > 0
            ? `Longest run ${longest} days · ${formatDuration(summary.seconds)} total`
            : 'One session, drawn at random, twenty minutes or less.'}
        </p>
      </header>

      {resumable !== null && (
        <Card className="mb-6 border-amber/40">
          <p className="text-sm text-bone-dim">You left a session unfinished.</p>
          <div className="mt-3 flex gap-3">
            <Button to="/session/play" variant="primary">
              Resume
            </Button>
          </div>
        </Card>
      )}

      <Card>
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
                    ? 'border-amber bg-amber text-ink'
                    : 'border-edge bg-surface-2 text-bone-dim hover:text-bone'
                }`}
              >
                {minutes}
                <span className="ml-0.5 text-xs">min</span>
              </button>
            ))}
          </div>
        </fieldset>

        <Button variant="primary" onClick={start} className="mt-5 w-full py-4 text-lg">
          Start session
        </Button>
        <p className="mt-3 text-center text-xs text-bone-dim">
          {profile.pureChaos
            ? 'Pure chaos is on — no structure at all.'
            : 'Drawn at random from the library.'}
        </p>
      </Card>

      <section className="mt-8">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm uppercase tracking-wider text-bone-dim">Your workouts</h2>
          <Link to="/routines" className="text-sm text-bone-dim hover:text-bone">
            {routines.length > 0 ? 'See all' : ''}
          </Link>
        </div>

        {routines.length === 0 ? (
          <Card>
            <p className="text-bone-dim">
              Build one from the positions you actually use — pick the areas you want, then
              choose the exercises yourself.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button to="/build" variant="primary">
                Build a workout
              </Button>
              {favourites.length > 0 && (
                <Button to="/build?from=favourites">From my favourites</Button>
              )}
            </div>
          </Card>
        ) : (
          <>
            <ul className="space-y-2">
              {routines.slice(0, 3).map((routine) => (
                <li key={routine.id}>
                  <Card className="flex items-center gap-3 py-3">
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
                  </Card>
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
      </section>

      {summary.sessions > 0 && (
        <p className="mt-8 text-center text-sm text-bone-dim">
          {summary.sessions} session{summary.sessions === 1 ? '' : 's'} so far.
        </p>
      )}

      <p className="mt-6 text-center text-xs text-bone-dim">
        <Link to="/settings" className="underline underline-offset-4 hover:text-bone">
          Anything you need to work around?
        </Link>
      </p>
    </Screen>
  );
}
