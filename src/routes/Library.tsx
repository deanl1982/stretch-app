import { useMemo, useState, type JSX } from 'react';
import { Link } from 'react-router';
import { EXERCISES } from '../content/exercises.ts';
import { REGION_LABELS, type Region } from '../content/types.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { useFavourites } from '../storage/favourites.ts';
import { Card, Empty, FavouriteButton, PageTitle, Pill, Screen } from '../ui.tsx';
import { describeDose } from '../session/phases.ts';
import { loadProfile } from '../storage/store.ts';

type Filter = Region | 'all' | 'office' | 'favourites';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'favourites', label: 'Favourites' },
  { key: 'hips', label: REGION_LABELS.hips },
  { key: 'hamstrings', label: REGION_LABELS.hamstrings },
  { key: 'ankles', label: REGION_LABELS.ankles },
  { key: 'back', label: REGION_LABELS.back },
  { key: 'office', label: 'At a desk' },
];

/** Everything worth matching a search against, lowercased once. */
const SEARCH_INDEX = new Map(
  EXERCISES.map((exercise) => [
    exercise.id,
    [exercise.name, ...(exercise.aka ?? []), exercise.summary, ...exercise.targets]
      .join(' ')
      .toLowerCase(),
  ]),
);

export function Library(): JSX.Element {
  const profile = useMemo(loadProfile, []);
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');
  const favourites = useFavourites();

  const shown = useMemo(() => {
    const byFilter =
      filter === 'all'
        ? EXERCISES
        : filter === 'office'
          ? EXERCISES.filter((e) => e.officeFriendly)
          : filter === 'favourites'
            ? EXERCISES.filter((e) => favourites.includes(e.id))
            : EXERCISES.filter((e) => e.regions.includes(filter));

    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (terms.length === 0) return byFilter;

    // Every word must match somewhere, so "seiza toes" narrows rather than widens.
    return byFilter.filter((exercise) => {
      const haystack = SEARCH_INDEX.get(exercise.id) ?? '';
      return terms.every((term) => haystack.includes(term));
    });
  }, [filter, favourites, query]);

  return (
    <Screen>
      <PageTitle sub={`${EXERCISES.length} positions, with the easier versions of each.`}>
        Library
      </PageTitle>

      <div className="relative mb-4">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search — try “seiza” or “first ray”"
          aria-label="Search positions"
          className="w-full rounded-xl border border-control bg-surface px-4 py-3 text-bone placeholder:text-bone-dim focus:border-accent"
        />
      </div>

      <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            aria-pressed={filter === key}
            className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === key
                ? 'border-accent bg-accent text-ink'
                : 'border-control bg-surface-2 text-bone-dim hover:text-bone'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {shown.length === 0 && (
        <Empty>
          Nothing matches “{query}”. Try a shorter word, or clear the filter.
        </Empty>
      )}

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
                    <p className="mt-1 text-xs text-bone-dim">{describeDose(exercise, profile.holdLevel)}</p>
                  </div>
                  {exercise.officeFriendly && <Pill>desk</Pill>}
                  <FavouriteButton id={exercise.id} />
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </Screen>
  );
}
