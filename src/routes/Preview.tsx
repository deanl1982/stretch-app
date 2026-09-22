import { useEffect, useMemo, useState, type JSX } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import {
  alternativesFor,
  generateSession,
  toSessionItem,
  type GenerateOptions,
  type SessionItem,
} from '../session/generator.ts';
import { createRng, randomSeed, shuffle } from '../session/rng.ts';
import { describeDose } from '../session/phases.ts';
import { saveActive } from '../session/active.ts';
import { loadHistory, loadProfile } from '../storage/store.ts';
import { dayKey } from '../storage/stats.ts';
import { describeRegions, parseRegions } from '../content/types.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { Button, Empty, PageTitle, Screen } from '../ui.tsx';

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

const ROLE_LABELS: Record<string, string> = {
  opener: 'opener',
  main: 'main',
  load: 'strength',
  rest: 'rest',
};

const ids = (items: readonly SessionItem[]): string[] => items.map((item) => item.exercise.id);
const totalSeconds = (items: readonly SessionItem[]): number =>
  items.reduce((sum, item) => sum + item.estimatedSeconds, 0);

function Chevron({ up }: { up: boolean }): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <path
        d={up ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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

  // The settings the draw obeyed. A swap has to obey exactly the same ones, or editing a
  // session would quietly hand back something the user's exclusions had ruled out.
  const options = useMemo<GenerateOptions>(
    () => ({
      seed,
      budgetSeconds,
      exclusions: profile.exclusions,
      availableProps: profile.availableProps ?? undefined,
      officeOnly: profile.officeOnly,
      pureChaos: profile.pureChaos,
      regions: focus,
      holdLevel: profile.holdLevel,
      recentCounts: recentCounts(),
    }),
    [seed, budgetSeconds, profile, focus],
  );

  const session = useMemo(() => generateSession(options), [options]);

  /** The list as the user has edited it. Rerolling draws a new seed, which resets this. */
  const [items, setItems] = useState<SessionItem[]>(session.items);
  const [selected, setSelected] = useState<ReadonlySet<string>>(new Set());
  const [status, setStatus] = useState('');

  useEffect(() => {
    setItems(session.items);
    setSelected(new Set());
    setStatus('');
  }, [session]);

  const total = totalSeconds(items);
  const edited = ids(items).join() !== ids(session.items).join();

  const toggle = (id: string): void => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const move = (index: number, delta: number): void => {
    const target = index + delta;
    const moving = items[index];
    const displaced = items[target];
    if (moving === undefined || displaced === undefined) return;

    const next = items.slice();
    next[index] = displaced;
    next[target] = moving;
    setItems(next);
    setStatus(`${moving.exercise.name} moved to position ${target + 1} of ${items.length}.`);
  };

  const remove = (removing: ReadonlySet<string>): void => {
    const keep = items.filter((item) => !removing.has(item.exercise.id));
    if (keep.length === 0) {
      setStatus('That would empty the session. Keep at least one position.');
      return;
    }
    const gone = items.filter((item) => removing.has(item.exercise.id)).map((i) => i.exercise.name);
    setItems(keep);
    setSelected(new Set());
    setStatus(`Removed ${gone.join(', ')}. ${keep.length} positions left.`);
  };

  /**
   * Draw a fresh alternative for each chosen position, keeping it where it is.
   *
   * `taken` carries through the whole batch, so swapping three at once cannot hand back the
   * same exercise twice.
   */
  const swap = (swapping: ReadonlySet<string>): void => {
    const rng = createRng(randomSeed());
    const taken = new Set(ids(items));
    const changed: string[] = [];
    const stuck: string[] = [];

    const next = items.map((item) => {
      if (!swapping.has(item.exercise.id)) return item;

      const pick = shuffle(alternativesFor(item.exercise, options, [...taken]), rng)[0];
      if (pick === undefined) {
        stuck.push(item.exercise.name);
        return item;
      }
      taken.delete(item.exercise.id);
      taken.add(pick.id);
      changed.push(`${item.exercise.name} became ${pick.name}`);
      return toSessionItem(pick, profile.holdLevel);
    });

    setItems(next);
    setSelected(new Set());
    setStatus(
      [
        changed.join('. '),
        stuck.length > 0 ? `Nothing left to swap ${stuck.join(', ')} for.` : '',
      ]
        .filter((part) => part !== '')
        .join(' '),
    );
  };

  const restore = (): void => {
    setItems(session.items);
    setSelected(new Set());
    setStatus('Back to the session as it was drawn.');
  };

  const reroll = (): void => {
    navigate(`/session?seed=${randomSeed()}&minutes=${minutes}${focusQuery}`, { replace: true });
  };

  const begin = (): void => {
    saveActive({
      seed,
      budgetSeconds,
      plannedIds: ids(items),
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
    <Screen className={selected.size > 0 ? 'pb-56' : ''}>
      <PageTitle
        sub={`${items.length} position${items.length === 1 ? '' : 's'} · about ${Math.round(total / 60)} minutes`}
      >
        {focus.length > 0 ? `Random: ${describeRegions(focus)}` : 'Today’s draw'}
      </PageTitle>

      {focus.length > 0 && total < budgetSeconds * 0.7 && !edited && (
        <p className="mb-4 rounded-xl border border-edge bg-surface-2/60 px-4 py-3 text-sm text-bone-dim">
          That is everything available for {describeRegions(focus)} at this length. Add
          another area or shorten the session for a fuller draw.
        </p>
      )}

      <p className="mb-3 text-sm text-bone-dim">
        Tap a position to pick it, then swap it for another or take it out. The arrows change
        the order.
      </p>

      {/* Spoken feedback for edits, which are otherwise only visible as a list changing. */}
      <p role="status" aria-live="polite" className="sr-only">
        {status}
      </p>

      <ol className="space-y-2">
        {items.map((item, index) => {
          const pose = getPose(item.exercise.id);
          const on = selected.has(item.exercise.id);
          return (
            <li key={item.exercise.id}>
              {/* The row and its arrows are siblings: a button inside a button is invalid. */}
              <div
                className={`flex items-center gap-3 rounded-2xl border bg-surface py-2 pl-4 pr-1 transition-colors ${
                  on ? 'border-accent bg-accent/5' : 'border-edge'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.exercise.id)}
                  aria-pressed={on}
                  className="flex min-w-0 flex-1 items-center gap-3 rounded-xl py-2 text-left"
                >
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full border text-xs tabular-nums ${
                      on ? 'border-accent bg-accent text-ink' : 'border-edge text-bone-dim'
                    }`}
                  >
                    {index + 1}
                  </span>
                  {pose !== undefined && (
                    <Figure pose={pose} label="" className="h-12 w-16 shrink-0 text-label" />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium leading-tight">{item.exercise.name}</span>
                    <span className="block text-sm text-bone-dim">
                      {/* No per-rep pace here: this screen is the plan, and the pace is
                          coaching detail the player shows while you are doing it. */}
                      {describeDose(item.exercise, profile.holdLevel, { pace: false })} ·{' '}
                      {ROLE_LABELS[item.exercise.role] ?? item.exercise.role}
                    </span>
                  </span>
                </button>

                <span className="flex shrink-0 flex-col">
                  <button
                    type="button"
                    onClick={() => move(index, -1)}
                    disabled={index === 0}
                    aria-label={`Move ${item.exercise.name} up`}
                    className="flex size-11 items-center justify-center rounded-lg text-bone-dim transition-colors hover:text-bone disabled:pointer-events-none disabled:opacity-25"
                  >
                    <Chevron up />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(index, 1)}
                    disabled={index === items.length - 1}
                    aria-label={`Move ${item.exercise.name} down`}
                    className="flex size-11 items-center justify-center rounded-lg text-bone-dim transition-colors hover:text-bone disabled:pointer-events-none disabled:opacity-25"
                  >
                    <Chevron up={false} />
                  </button>
                </span>
              </div>
            </li>
          );
        })}
      </ol>

      {total > budgetSeconds && (
        <p className="mt-4 text-sm text-bone-dim">
          That is longer than the {minutes} minutes you asked for. Fine if you have the time.
        </p>
      )}

      <div className="mt-6 flex gap-3">
        <Button variant="primary" onClick={begin} className="flex-1 py-4 text-lg">
          Begin
        </Button>
        <Button onClick={reroll} ariaLabel="Draw a different session">
          Reroll
        </Button>
      </div>

      {edited && (
        <Button onClick={restore} variant="ghost" className="mt-2 w-full text-sm">
          Undo my changes
        </Button>
      )}

      <p className="mt-4 text-center text-xs text-bone-dim">
        Seed {seed} · {dayKey(new Date())}
      </p>

      {/* Actions for the chosen positions, above the tab bar. */}
      {selected.size > 0 && (
        <div className="fixed inset-x-0 bottom-14 z-10 border-t border-edge bg-ink/95 backdrop-blur">
          <div className="mx-auto max-w-2xl px-4 py-3">
            <div className="mb-2 text-sm">
              {selected.size} of {items.length} picked
            </div>
            <div className="flex gap-2">
              <Button variant="primary" onClick={() => swap(selected)} className="flex-1 py-3">
                Swap {selected.size === 1 ? 'it' : 'them'}
              </Button>
              <Button
                onClick={() => remove(selected)}
                variant="danger"
                disabled={selected.size >= items.length}
              >
                Remove
              </Button>
              <Button variant="ghost" onClick={() => setSelected(new Set())}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </Screen>
  );
}
