import { useMemo, useState, type JSX } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { REGION_LABELS, type Region } from '../content/types.ts';
import { eligiblePool } from '../session/generator.ts';
import { randomSeed } from '../session/rng.ts';
import { describeDose, estimateSeconds } from '../session/phases.ts';
import { saveActive } from '../session/active.ts';
import { loadProfile } from '../storage/store.ts';
import { loadFavourites, useFavourites } from '../storage/favourites.ts';
import { createRoutine, getRoutine, saveRoutine } from '../storage/routines.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { Button, Card, Empty, FavouriteButton, PageTitle, Screen } from '../ui.tsx';

const ORDER: Region[] = ['hips', 'hamstrings', 'ankles', 'back', 'fullBody'];

/** Sensible running order: warm up, then work, then something restful. */
const ROLE_RANK: Record<string, number> = { opener: 0, main: 1, load: 2, rest: 3 };

function minutes(seconds: number): string {
  return `${Math.max(1, Math.round(seconds / 60))} min`;
}

export function Build(): JSX.Element {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const profile = useMemo(loadProfile, []);
  const favourites = useFavourites();

  const editingId = params.get('routine');
  const editing = useMemo(
    () => (editingId === null ? undefined : getRoutine(editingId)),
    [editingId],
  );
  const startFromFavourites = params.get('from') === 'favourites';

  const [step, setStep] = useState<'focus' | 'pick'>(
    editing !== undefined || startFromFavourites ? 'pick' : 'focus',
  );
  // An empty set means no region filter at all, which is what we want when the user
  // arrived via favourites or is editing — and it keeps the chips honestly unselected.
  const [regions, setRegions] = useState<Set<Region>>(() => new Set<Region>());
  const [favouritesOnly, setFavouritesOnly] = useState(startFromFavourites);
  const [selected, setSelected] = useState<string[]>(
    () => editing?.exerciseIds ?? (startFromFavourites ? loadFavourites() : []),
  );
  const [naming, setNaming] = useState(false);
  const [name, setName] = useState(editing?.name ?? '');

  // Everything the user is allowed to be shown, before their own filtering.
  const pool = useMemo(
    () =>
      eligiblePool({
        seed: '',
        budgetSeconds: 0,
        exclusions: profile.exclusions,
        availableProps: profile.availableProps ?? undefined,
        officeOnly: profile.officeOnly,
      }),
    [profile],
  );

  const shown = useMemo(() => {
    const base = favouritesOnly ? pool.filter((e) => favourites.includes(e.id)) : pool;
    const byRegion =
      regions.size === 0 ? base : base.filter((e) => e.regions.some((r) => regions.has(r)));
    return [...byRegion].sort(
      (a, b) => (ROLE_RANK[a.role] ?? 9) - (ROLE_RANK[b.role] ?? 9) || a.name.localeCompare(b.name),
    );
  }, [pool, favourites, favouritesOnly, regions]);

  const chosen = useMemo(
    () => selected.flatMap((id) => pool.filter((e) => e.id === id)),
    [selected, pool],
  );
  const totalSeconds = chosen.reduce((sum, e) => sum + estimateSeconds(e), 0);

  const toggleRegion = (region: Region): void => {
    setRegions((current) => {
      const next = new Set(current);
      if (next.has(region)) next.delete(region);
      else next.add(region);
      return next;
    });
  };

  const toggleExercise = (id: string): void => {
    setSelected((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
  };

  const tidyOrder = (): void => {
    setSelected((current) => {
      const ranked = current
        .map((id) => pool.find((e) => e.id === id))
        .filter((e): e is NonNullable<typeof e> => e !== undefined);
      return [...ranked].sort((a, b) => (ROLE_RANK[a.role] ?? 9) - (ROLE_RANK[b.role] ?? 9)).map((e) => e.id);
    });
  };

  const start = (): void => {
    saveActive({
      seed: editing?.id ?? 'custom',
      budgetSeconds: totalSeconds,
      plannedIds: selected,
      index: 0,
      completedIds: [],
      skippedIds: [],
      startedAt: new Date().toISOString(),
    });
    navigate('/session/play');
  };

  const save = (): void => {
    if (editing !== undefined) {
      saveRoutine({ ...editing, name: name.trim() === '' ? editing.name : name.trim(), exerciseIds: selected });
    } else {
      createRoutine(name, selected);
    }
    navigate('/routines');
  };

  // ── Step one: what are we working on? ──────────────────────────────────

  if (step === 'focus') {
    return (
      <Screen>
        <PageTitle sub="Pick as many as you like. You choose the exercises next.">
          What are you working on?
        </PageTitle>

        <ul className="space-y-2">
          {ORDER.map((region) => {
            const count = pool.filter((e) => e.regions.includes(region)).length;
            const on = regions.has(region);
            return (
              <li key={region}>
                <button
                  type="button"
                  onClick={() => toggleRegion(region)}
                  aria-pressed={on}
                  className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors ${
                    on ? 'border-accent bg-accent/10' : 'border-edge bg-surface hover:border-bone-dim'
                  }`}
                >
                  <span className="text-lg font-medium">{REGION_LABELS[region]}</span>
                  <span className={`text-sm ${on ? 'text-accent' : 'text-bone-dim'}`}>
                    {on ? 'Selected' : `${count} positions`}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {favourites.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setFavouritesOnly(true);
              setRegions(new Set<Region>());
              setSelected(loadFavourites());
              setStep('pick');
            }}
            className="mt-4 flex w-full items-center justify-between rounded-2xl border border-edge bg-surface px-5 py-4 text-left transition-colors hover:border-bone-dim"
          >
            <span className="text-lg font-medium text-accent">Just my favourites</span>
            <span className="text-sm text-bone-dim">{favourites.length} saved</span>
          </button>
        )}

        <Button
          variant="primary"
          disabled={regions.size === 0}
          onClick={() => setStep('pick')}
          className="mt-6 w-full py-4 text-lg"
        >
          {regions.size === 0 ? 'Pick at least one' : 'Choose exercises myself'}
        </Button>

        <Button
          disabled={regions.size === 0}
          onClick={() =>
            navigate(
              `/session?seed=${randomSeed()}&minutes=${profile.defaultMinutes}&focus=${[...regions].join(',')}`,
            )
          }
          className="mt-3 w-full py-4 text-lg"
        >
          Draw one for me
        </Button>
        <p className="mt-3 text-center text-xs text-bone-dim">
          A random {profile.defaultMinutes}-minute session from just these areas.
        </p>
      </Screen>
    );
  }

  // ── Step two: build the workout ────────────────────────────────────────

  return (
    <Screen className="pb-56">
      <PageTitle sub="Tap to add. They run in the order you pick them.">
        {editing === undefined ? 'Build your workout' : `Editing ${editing.name}`}
      </PageTitle>

      <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <button
          type="button"
          onClick={() => setFavouritesOnly((v) => !v)}
          aria-pressed={favouritesOnly}
          className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 py-2 text-sm transition-colors ${
            favouritesOnly
              ? 'border-accent bg-accent text-ink'
              : 'border-control bg-surface-2 text-bone-dim hover:text-bone'
          }`}
        >
          Favourites
        </button>
        {ORDER.map((region) => (
          <button
            key={region}
            type="button"
            onClick={() => toggleRegion(region)}
            aria-pressed={regions.has(region)}
            className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 py-2 text-sm transition-colors ${
              regions.has(region)
                ? 'border-accent bg-accent text-ink'
                : 'border-control bg-surface-2 text-bone-dim hover:text-bone'
            }`}
          >
            {REGION_LABELS[region]}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <Empty>
          {favouritesOnly
            ? 'No favourites in these areas yet. Star a few in the library.'
            : 'Nothing matches. Try another area.'}
        </Empty>
      ) : (
        <ul className="space-y-2">
          {shown.map((exercise) => {
            const position = selected.indexOf(exercise.id);
            const on = position !== -1;
            const pose = getPose(exercise.id);
            return (
              <li key={exercise.id}>
                <button
                  type="button"
                  onClick={() => toggleExercise(exercise.id)}
                  aria-pressed={on}
                  className="w-full text-left"
                >
                  <Card
                    className={`flex items-center gap-3 py-3 transition-colors ${
                      on ? 'border-accent bg-accent/5' : 'hover:border-bone-dim'
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm tabular-nums ${
                        on ? 'border-accent bg-accent text-ink' : 'border-edge text-bone-dim'
                      }`}
                    >
                      {on ? position + 1 : ''}
                    </span>
                    {pose !== undefined && (
                      <Figure pose={pose} label="" className="h-12 w-16 shrink-0 text-bone-dim" />
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium leading-tight">{exercise.name}</span>
                      <span className="block text-sm text-bone-dim">
                        {describeDose(exercise, profile.holdLevel)} ·{" "}
                        {minutes(estimateSeconds(exercise, profile.holdLevel))}
                      </span>
                    </span>
                    <FavouriteButton id={exercise.id} />
                  </Card>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* Sticky summary, offset above the tab bar. */}
      <div className="fixed inset-x-0 bottom-14 z-10 border-t border-edge bg-ink/95 backdrop-blur">
        <div className="mx-auto max-w-2xl px-4 py-3">
          {naming ? (
            <div className="flex gap-2">
              <input
                autoFocus
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name this workout"
                className="min-w-0 flex-1 rounded-xl border border-control bg-surface px-4 py-3 text-bone focus:border-accent"
              />
              <Button variant="primary" onClick={save}>
                Save
              </Button>
              <Button variant="ghost" onClick={() => setNaming(false)}>
                Cancel
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className={selected.length === 0 ? 'text-bone-dim' : 'text-bone'}>
                  {selected.length} position{selected.length === 1 ? '' : 's'}
                  {selected.length > 0 && ` · about ${minutes(totalSeconds)}`}
                </span>
                {selected.length > 1 && (
                  <button
                    type="button"
                    onClick={tidyOrder}
                    className="-mr-2 min-h-11 rounded-lg px-2 text-bone-dim hover:text-bone"
                  >
                    Order it sensibly
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  disabled={selected.length === 0}
                  onClick={start}
                  className="flex-1 py-3"
                >
                  Start
                </Button>
                <Button disabled={selected.length === 0} onClick={() => setNaming(true)}>
                  {editing === undefined ? 'Save' : 'Update'}
                </Button>
              </div>
              {totalSeconds > 20 * 60 && (
                <p className="mt-2 text-xs text-bone-dim">
                  That is over twenty minutes. Fine if you have the time — just longer than
                  the daily habit this is built around.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </Screen>
  );
}
