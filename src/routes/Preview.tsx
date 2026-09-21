import { useMemo, type JSX } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { generateSession } from '../session/generator.ts';
import { randomSeed } from '../session/rng.ts';
import { saveActive } from '../session/active.ts';
import { loadHistory, loadProfile } from '../storage/store.ts';
import { dayKey } from '../storage/stats.ts';
import { describeDose, describeRegions, parseRegions } from '../content/types.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { Button, Card, Empty, PageTitle, Pill, Screen } from '../ui.tsx';

/** How many times each exercise has been done in the last seven days. */
function recentCounts(): Map<string, number> {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 7);
  const counts = new Map<string, number>();

  for (const session of loadHistory()) {
    if (new Date(session.dateISO) < cutoff) continue;
    for (const id of session.completedIds) {
      counts.set(id, (counts.get(id) ?? 0) + 1);
    }
  }
  return counts;
}

export function Preview(): JSX.Element {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const profile = useMemo(loadProfile, []);

  const seed = params.get('seed') ?? randomSeed();
  const minutes = Number(params.get('minutes') ?? profile.defaultMinutes);
  const budgetSeconds = minutes * 60;
  const focus = useMemo(() => parseRegions(params.get('focus')), [params]);
  const focusQuery = focus.length > 0 ? `&focus=${focus.join(',')}` : '';

  const session = useMemo(
    () =>
      generateSession({
        seed,
        budgetSeconds,
        exclusions: profile.exclusions,
        availableProps: profile.availableProps ?? undefined,
        officeOnly: profile.officeOnly,
        pureChaos: profile.pureChaos,
        regions: focus,
        recentCounts: recentCounts(),
      }),
    [seed, budgetSeconds, profile, focus],
  );

  const reroll = (): void => {
    navigate(`/session?seed=${randomSeed()}&minutes=${minutes}${focusQuery}`, { replace: true });
  };

  const begin = (): void => {
    saveActive({
      seed,
      budgetSeconds,
      plannedIds: session.items.map((item) => item.exercise.id),
      index: 0,
      completedIds: [],
      skippedIds: [],
      startedAt: new Date().toISOString(),
    });
    navigate('/session/play');
  };

  if (session.items.length === 0) {
    return (
      <Screen>
        <PageTitle>Nothing to draw</PageTitle>
        <Empty>
          {focus.length > 0
            ? `Nothing available for ${describeRegions(focus)} at this length. Try a longer session or another area.`
            : 'Everything in the library is ruled out by your current settings. Loosen a restriction and try again.'}
        </Empty>
        <div className="mt-4 flex gap-3">
          {focus.length > 0 && (
            <Button to={`/session?seed=${seed}&minutes=${minutes}`} variant="primary">
              Draw from everything
            </Button>
          )}
          <Button to="/settings">Open settings</Button>
        </div>
      </Screen>
    );
  }

  return (
    <Screen>
      <PageTitle
        sub={`${session.items.length} positions · about ${Math.round(session.totalSeconds / 60)} minutes`}
      >
        {focus.length > 0 ? `Random: ${describeRegions(focus)}` : 'Today’s draw'}
      </PageTitle>

      {focus.length > 0 && session.totalSeconds < budgetSeconds * 0.7 && (
        <p className="mb-4 rounded-xl border border-edge bg-surface-2/60 px-4 py-3 text-sm text-bone-dim">
          That is everything available for {describeRegions(focus)} at this length. Add
          another area or shorten the session for a fuller draw.
        </p>
      )}

      <ol className="space-y-2">
        {session.items.map((item, index) => {
          const pose = getPose(item.exercise.id);
          return (
            <li key={item.exercise.id}>
              <Card className="flex items-center gap-4 py-3">
                <span className="w-5 shrink-0 text-sm tabular-nums text-bone-dim">
                  {index + 1}
                </span>
                {pose !== undefined && (
                  <Figure
                    pose={pose}
                    label=""
                    className="h-12 w-16 shrink-0 text-bone-dim"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-tight">{item.exercise.name}</p>
                  <p className="text-sm text-bone-dim">{describeDose(item.exercise)}</p>
                </div>
                <Pill>{item.exercise.role === 'load' ? 'strength' : item.exercise.role}</Pill>
              </Card>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex gap-3">
        <Button variant="primary" onClick={begin} className="flex-1 py-4 text-lg">
          Begin
        </Button>
        <Button onClick={reroll} ariaLabel="Draw a different session">
          Reroll
        </Button>
      </div>

      <p className="mt-4 text-center text-xs text-bone-dim">
        Seed {seed} · {dayKey(new Date())}
      </p>
    </Screen>
  );
}
