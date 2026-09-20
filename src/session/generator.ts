import { EXERCISES } from '../content/exercises.ts';
import type { Exercise, Flag, Prop } from '../content/types.ts';
import { buildPhases, estimateSeconds } from './phases.ts';
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
  /** Drop the opener/rest structure and draw the whole session unconstrained. */
  pureChaos?: boolean;
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

function toItem(exercise: Exercise): SessionItem {
  // The first phase's length is the prescribed hold, already capped.
  const first = buildPhases(exercise)[0];
  return {
    exercise,
    holdSeconds: exercise.dose.kind === 'hold' ? first?.seconds : undefined,
    estimatedSeconds: estimateSeconds(exercise),
  };
}

/** Everything the user is eligible to be given today. */
export function eligiblePool(options: GenerateOptions): Exercise[] {
  const {
    exclusions = [],
    availableProps,
    officeOnly = false,
    recentCounts,
    library = EXERCISES,
  } = options;

  const excluded = new Set<Flag>(exclusions);

  return library.filter((exercise) => {
    if (exercise.contraindications.some((flag) => excluded.has(flag))) return false;
    // Conditional items are the inverse: withheld unless the user declared the flag.
    if (exercise.requiresFlag !== undefined && !excluded.has(exercise.requiresFlag)) return false;
    if (officeOnly && !exercise.officeFriendly) return false;

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
): SessionItem[] {
  const chosen: SessionItem[] = [];
  let left = remaining;

  for (const exercise of candidates) {
    if (used.has(exercise.id)) continue;
    const item = toItem(exercise);
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
  const { seed, budgetSeconds, pureChaos = false } = options;
  const rng = createRng(seed);
  const pool = shuffle(eligiblePool(options), rng);

  const used = new Set<string>();

  if (pureChaos) {
    const items = pack(pool, budgetSeconds, used);
    return { seed, budgetSeconds, items, totalSeconds: sumSeconds(items) };
  }

  const opener = pool.find((exercise) => exercise.role === 'opener');
  const rest = pool.find((exercise) => exercise.role === 'rest' && exercise.id !== opener?.id);

  const head: SessionItem[] = [];
  if (opener !== undefined) {
    const item = toItem(opener);
    if (item.estimatedSeconds <= budgetSeconds) {
      head.push(item);
      used.add(opener.id);
    }
  }

  // Reserve the closing rest position up front, so the session always ends somewhere
  // calm rather than on whatever happened to fit last.
  const restItem = rest === undefined ? undefined : toItem(rest);
  const budgetAfterHead = budgetSeconds - sumSeconds(head);
  const reserved =
    restItem !== undefined && restItem.estimatedSeconds <= budgetAfterHead
      ? restItem.estimatedSeconds
      : 0;

  const middlePool = pool.filter(
    (exercise) => exercise.role === 'main' || exercise.role === 'load',
  );
  const middle = pack(middlePool, budgetAfterHead - reserved, used);

  // Spend anything still left over on whatever else fits, before the closing item.
  // Rest positions are excluded so the session does not end up with two of them.
  const spare = budgetAfterHead - reserved - sumSeconds(middle);
  const fillerPool = pool.filter((exercise) => exercise.role !== 'rest');
  middle.push(...pack(fillerPool, spare, used));

  const tail: SessionItem[] = [];
  if (reserved > 0 && restItem !== undefined && rest !== undefined) {
    tail.push(restItem);
    used.add(rest.id);
  }

  const items = [...head, ...middle, ...tail];
  return { seed, budgetSeconds, items, totalSeconds: sumSeconds(items) };
}
