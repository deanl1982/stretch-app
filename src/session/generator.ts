import { EXERCISES } from '../content/exercises.ts';
import type { Exercise, Flag, Prop, Region } from '../content/types.ts';
import { buildPhases, estimateSeconds, type HoldLevel } from './phases.ts';
import { createRng, shuffle } from './rng.ts';

/**
 * Session generation.
 *
 * The brief was "totally random", and the middle of every session genuinely is: items
 * are drawn by shuffling the whole eligible pool and packing until the time budget is
 * spent. The one deviation is that by default we pin an `opener` first and a `rest`
 * last, because deep knee-flexion positions are where people hurt themselves when they
 * go into them cold. `pureChaos` removes even that.
 */

/** How many times a non-daily item (heavy eccentric work) may appear in a rolling week. */
export const WEEKLY_LOAD_LIMIT = 2;

export interface GenerateOptions {
  seed: string;
  budgetSeconds: number;
  /** Conditions the user told us to work around. Matching exercises are removed outright. */
  exclusions?: readonly Flag[];
  /** Props the user has to hand. `undefined` means assume everything is available. */
  availableProps?: readonly Prop[] | undefined;
  /** Only draw exercises that work at a desk. */
  officeOnly?: boolean;
  /**
   * Restrict the draw to these body areas. Empty or omitted means the whole library —
   * this is how "random, but hamstrings today" works.
   */
  regions?: readonly Region[];
  /** Drop the opener/rest structure and draw the whole session unconstrained. */
  pureChaos?: boolean;
  /** Scales every hold, so a 20-minute budget stays honest at any level. */
  holdLevel?: HoldLevel;
  /** How many times each exercise has been done in the last 7 days. */
  recentCounts?: ReadonlyMap<string, number>;
  /** Override the library, for tests. */
  library?: readonly Exercise[];
}

export interface SessionItem {
  exercise: Exercise;
  /** Prescribed hold length after any `maxHoldSeconds` cap. Undefined for rep work. */
  holdSeconds: number | undefined;
  /** Budgeted runtime including the transition allowance. */
  estimatedSeconds: number;
}

export interface Session {
  seed: string;
  budgetSeconds: number;
  items: SessionItem[];
  totalSeconds: number;
}

function toItem(exercise: Exercise, level: HoldLevel): SessionItem {
  // The first phase's length is the prescribed hold, already scaled and capped.
  const first = buildPhases(exercise, level)[0];
  return {
    exercise,
    holdSeconds: exercise.dose.kind === 'hold' ? first?.seconds : undefined,
    estimatedSeconds: estimateSeconds(exercise, level),
  };
}

/** Everything the user is eligible to be given today. */
export function eligiblePool(options: GenerateOptions): Exercise[] {
  const {
    exclusions = [],
    availableProps,
    officeOnly = false,
    regions,
    recentCounts,
    library = EXERCISES,
  } = options;

  const excluded = new Set<Flag>(exclusions);
  const focus = regions === undefined || regions.length === 0 ? null : new Set<Region>(regions);

  return library.filter((exercise) => {
    if (exercise.contraindications.some((flag) => excluded.has(flag))) return false;
    // Conditional items are the inverse: withheld unless the user declared the flag.
    if (exercise.requiresFlag !== undefined && !excluded.has(exercise.requiresFlag)) return false;
    if (officeOnly && !exercise.officeFriendly) return false;
    if (focus !== null && !exercise.regions.some((region) => focus.has(region))) return false;

    if (availableProps !== undefined) {
      const owned = new Set<Prop>(availableProps);
      owned.add('none');
      // An exercise is usable if you have its props, or if a regression exists that
      // only needs props you do have.
      const canDoAsPrescribed = exercise.props.every((prop) => owned.has(prop));
      const hasWorkableRegression = exercise.regressions.some((regression) =>
        regression.props.every((prop) => owned.has(prop)),
      );
      if (!canDoAsPrescribed && !hasWorkableRegression) return false;
    }

    if (!exercise.dailySafe && recentCounts !== undefined) {
      const done = recentCounts.get(exercise.id) ?? 0;
      if (done >= WEEKLY_LOAD_LIMIT) return false;
    }

    return true;
  });
}

/** Greedily take items from `candidates` while they fit in `remaining`. */
function pack(
  candidates: readonly Exercise[],
  remaining: number,
  used: Set<string>,
  level: HoldLevel,
): SessionItem[] {
  const chosen: SessionItem[] = [];
  let left = remaining;

  for (const exercise of candidates) {
    if (used.has(exercise.id)) continue;
    const item = toItem(exercise, level);
    if (item.estimatedSeconds > left) continue;
    chosen.push(item);
    used.add(exercise.id);
    left -= item.estimatedSeconds;
  }

  return chosen;
}

const sumSeconds = (items: readonly SessionItem[]): number =>
  items.reduce((total, item) => total + item.estimatedSeconds, 0);

export function generateSession(options: GenerateOptions): Session {
  const { seed, budgetSeconds, pureChaos = false, holdLevel = 'standard' } = options;
  const rng = createRng(seed);
  const pool = shuffle(eligiblePool(options), rng);

  const used = new Set<string>();

  if (pureChaos) {
    const items = pack(pool, budgetSeconds, used, holdLevel);
    return { seed, budgetSeconds, items, totalSeconds: sumSeconds(items) };
  }

  // Take the first opener and rest that actually FIT. Picking one at random and giving up when it
  // does not fit lets a short session lose the gentle opener that exists so nobody starts cold in a
  // deep position - which a five-minute budget did whenever the pick happened to be a long one.
  // The pool is already in seeded random order, so "first that fits" is still a random choice.
  const cost = (exercise: Exercise): number => toItem(exercise, holdLevel).estimatedSeconds;
  const shortestRest = Math.min(
    ...pool.filter((exercise) => exercise.role === 'rest').map(cost),
    Number.POSITIVE_INFINITY,
  );
  const openerRoom = budgetSeconds - (Number.isFinite(shortestRest) ? shortestRest : 0);
  const opener = pool.find((exercise) => exercise.role === 'opener' && cost(exercise) <= openerRoom);
  const restRoom = budgetSeconds - (opener === undefined ? 0 : cost(opener));
  const rest = pool.find(
    (exercise) => exercise.role === 'rest' && exercise.id !== opener?.id && cost(exercise) <= restRoom,
  );

  const head: SessionItem[] = [];
  if (opener !== undefined) {
    head.push(toItem(opener, holdLevel));
    used.add(opener.id);
  }

  // Reserve the closing rest position up front, so the session always ends somewhere
  // calm rather than on whatever happened to fit last.
  const restItem = rest === undefined ? undefined : toItem(rest, holdLevel);
  const budgetAfterHead = budgetSeconds - sumSeconds(head);
  const reserved =
    restItem !== undefined && restItem.estimatedSeconds <= budgetAfterHead
      ? restItem.estimatedSeconds
      : 0;

  const middlePool = pool.filter(
    (exercise) => exercise.role === 'main' || exercise.role === 'load',
  );
  const middle = pack(middlePool, budgetAfterHead - reserved, used, holdLevel);

  // Spend anything still left over on whatever else fits, before the closing item.
  // Rest positions are excluded so the session does not end up with two of them.
  const spare = budgetAfterHead - reserved - sumSeconds(middle);
  const fillerPool = pool.filter((exercise) => exercise.role !== 'rest');
  middle.push(...pack(fillerPool, spare, used, holdLevel));

  const tail: SessionItem[] = [];
  if (reserved > 0 && restItem !== undefined && rest !== undefined) {
    tail.push(restItem);
    used.add(rest.id);
  }

  const items = [...head, ...middle, ...tail];
  return { seed, budgetSeconds, items, totalSeconds: sumSeconds(items) };
}
