import { useMemo, type JSX } from 'react';
import { loadHistory } from '../storage/store.ts';
import { activeDays, formatDuration, heatmapDays, streaks, totals } from '../storage/stats.ts';
import { REGION_LABELS, type Region } from '../content/types.ts';
import { Card, Empty, PageTitle, Screen } from '../ui.tsx';

const WEEKS = 12;

export function Progress(): JSX.Element {
  const history = useMemo(loadHistory, []);
  const { current, longest } = useMemo(() => streaks(history), [history]);
  const summary = useMemo(() => totals(history), [history]);
  const days = useMemo(() => heatmapDays(WEEKS), []);
  const active = useMemo(() => activeDays(history), [history]);

  if (history.length === 0) {
    return (
      <Screen>
        <PageTitle>Progress</PageTitle>
        <Empty>Nothing here yet. Finish a session and it will start filling up.</Empty>
      </Screen>
    );
  }

  const maxRegion = Math.max(...Object.values(summary.byRegion), 1);

  return (
    <Screen>
      <PageTitle>Progress</PageTitle>

      <Card>
        <dl className="grid grid-cols-3 gap-4 text-center">
          <div>
            <dt className="text-xs uppercase tracking-wider text-bone-dim">Streak</dt>
            <dd className="mt-1 text-2xl font-semibold text-accent">{current}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-bone-dim">Longest</dt>
            <dd className="mt-1 text-2xl font-semibold">{longest}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-bone-dim">On the floor</dt>
            <dd className="mt-1 text-2xl font-semibold">{formatDuration(summary.seconds)}</dd>
          </div>
        </dl>
      </Card>

      <section className="mt-6">
        <h2 className="mb-3 text-sm uppercase tracking-wider text-bone-dim">
          Last {WEEKS} weeks
        </h2>
        <Card>
          <p className="sr-only">
            You trained on {days.filter((day) => active.has(day)).length} of the last{' '}
            {days.length} days.
          </p>
          <div className="grid grid-flow-col grid-rows-7 gap-1" aria-hidden="true">
            {days.map((day) => (
              <span
                key={day}
                title={day}
                className={`aspect-square rounded-[3px] ${
                  active.has(day) ? 'bg-accent' : 'bg-surface-2'
                }`}
              />
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-6">
        <h2 className="mb-3 text-sm uppercase tracking-wider text-bone-dim">Where the time went</h2>
        <Card className="space-y-3">
          {(Object.keys(summary.byRegion) as Region[])
            .filter((region) => summary.byRegion[region] > 0)
            .sort((a, b) => summary.byRegion[b] - summary.byRegion[a])
            .map((region) => (
              <div key={region}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{REGION_LABELS[region]}</span>
                  <span className="text-bone-dim">
                    {formatDuration(summary.byRegion[region])}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${(summary.byRegion[region] / maxRegion) * 100}%` }}
                  />
                </div>
              </div>
            ))}
        </Card>
        <p className="mt-3 text-xs leading-relaxed text-bone-dim">
          Positions that work several areas at once split their time between them, so
          these add up to the time you actually spent.
        </p>
      </section>
    </Screen>
  );
}
