import { useEffect, useMemo, useState, type JSX } from 'react';
import { useNavigate } from 'react-router';
import { randomSeed } from '../session/rng.ts';
import { loadActive } from '../session/active.ts';
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

  const { current, longest } = useMemo(() => streaks(history), [history]);
  const summary = useMemo(() => totals(history), [history]);

  useEffect(() => {
    if (!profile.onboarded) navigate('/welcome', { replace: true });
  }, [profile.onboarded, navigate]);

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

      {summary.sessions > 0 && (
        <p className="mt-6 text-center text-sm text-bone-dim">
          {summary.sessions} session{summary.sessions === 1 ? '' : 's'} so far.
        </p>
      )}
    </Screen>
  );
}
