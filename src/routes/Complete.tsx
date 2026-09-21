import { useMemo, type JSX } from 'react';
import { useLocation } from 'react-router';
import { loadHistory } from '../storage/store.ts';
import { formatDuration, streaks, totals } from '../storage/stats.ts';
import { Button, Card, PageTitle, Screen } from '../ui.tsx';

interface DoneState {
  completed?: number;
  planned?: number;
}

export function Complete(): JSX.Element {
  const { state } = useLocation() as { state: DoneState | null };
  const history = useMemo(loadHistory, []);
  const { current } = useMemo(() => streaks(history), [history]);
  const summary = useMemo(() => totals(history), [history]);

  const completed = state?.completed ?? 0;
  const planned = state?.planned ?? 0;

  return (
    <Screen>
      <PageTitle sub={planned > 0 ? `${completed} of ${planned} positions done.` : undefined}>
        That’s it
      </PageTitle>

      <Card>
        <dl className="grid grid-cols-3 gap-4 text-center">
          <div>
            <dt className="text-xs uppercase tracking-wider text-bone-dim">Streak</dt>
            <dd className="mt-1 text-2xl font-semibold text-accent">{current}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-bone-dim">Sessions</dt>
            <dd className="mt-1 text-2xl font-semibold">{summary.sessions}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-bone-dim">Total</dt>
            <dd className="mt-1 text-2xl font-semibold">{formatDuration(summary.seconds)}</dd>
          </div>
        </dl>
      </Card>

      <p className="mt-6 text-bone-dim">
        The rest of it happens off the mat. Sit on the floor this evening instead of the
        sofa, and get up out of your chair every half hour.
      </p>

      <div className="mt-6 flex gap-3">
        <Button to="/" variant="primary" className="flex-1">
          Done
        </Button>
        <Button to="/progress">See progress</Button>
      </div>
    </Screen>
  );
}
