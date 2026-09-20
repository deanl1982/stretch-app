import { useMemo, useState, type JSX } from 'react';
import { Link } from 'react-router';
import { EXERCISES } from '../content/exercises.ts';
import { REGION_LABELS, describeDose, type Region } from '../content/types.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { Card, PageTitle, Pill, Screen } from '../ui.tsx';

type Filter = Region | 'all' | 'office';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'hips', label: REGION_LABELS.hips },
  { key: 'hamstrings', label: REGION_LABELS.hamstrings },
  { key: 'ankles', label: REGION_LABELS.ankles },
  { key: 'back', label: REGION_LABELS.back },
  { key: 'office', label: 'At a desk' },
];

export function Library(): JSX.Element {
  const [filter, setFilter] = useState<Filter>('all');

  const shown = useMemo(() => {
    if (filter === 'all') return EXERCISES;
    if (filter === 'office') return EXERCISES.filter((e) => e.officeFriendly);
    return EXERCISES.filter((e) => e.regions.includes(filter));
  }, [filter]);

  return (
    <Screen>
      <PageTitle sub={`${EXERCISES.length} positions, with the easier versions of each.`}>
        Library
      </PageTitle>

      <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            aria-pressed={filter === key}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === key
                ? 'border-amber bg-amber text-ink'
                : 'border-edge bg-surface-2 text-bone-dim hover:text-bone'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {shown.map((exercise) => {
          const pose = getPose(exercise.id);
          return (
            <li key={exercise.id}>
              <Link to={`/library/${exercise.id}`} className="block">
                <Card className="flex items-center gap-4 py-3 transition-colors hover:border-bone-dim">
                  {pose !== undefined && (
                    <Figure pose={pose} label="" className="h-14 w-20 shrink-0 text-bone-dim" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{exercise.name}</p>
                    <p className="truncate text-sm text-bone-dim">{exercise.summary}</p>
                    <p className="mt-1 text-xs text-bone-dim">{describeDose(exercise)}</p>
                  </div>
                  {exercise.officeFriendly && <Pill>desk</Pill>}
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </Screen>
  );
}
