import type { Exercise } from '../content/types.ts';

/**
 * An exercise, broken into the blocks the player actually runs.
 *
 * Two things this model has to get right:
 *
 * 1. **Holds are adjustable.** A beginner wants 25 seconds where someone with
 *    years of practice wants 90. The prescription in the library is the standard
 *    dose; `HoldLevel` scales it, clamped so a safety ceiling is never exceeded.
 *
 * 2. **Reps are not timed.** You do not perform ten controlled good mornings
 *    against a clock — you do them at your own tempo and move on. Rep phases
 *    therefore carry `timed: false`, and the player waits for a tap rather than
 *    counting down and advancing on its own.
 */

export type HoldLevel = 'shorter' | 'standard' | 'longer';

export const HOLD_LEVELS: HoldLevel[] = ['shorter', 'standard', 'longer'];

export const HOLD_LEVEL_LABELS: Record<HoldLevel, string> = {
  shorter: 'Shorter',
  standard: 'Standard',
  longer: 'Longer',
};

export const HOLD_LEVEL_HINTS: Record<HoldLevel, string> = {
  shorter: 'Newer to this, or coming back from a layoff.',
  standard: 'The dose each position is written for.',
  longer: 'You already hold these comfortably.',
};

const MULTIPLIERS: Record<HoldLevel, number> = {
  shorter: 0.6,
  standard: 1,
  longer: 1.5,
};

/** Never prescribe a hold so short it is not a hold. */
export const MIN_HOLD_SECONDS = 10;
/** Nothing sensible needs longer than this in a single block. */
export const MAX_HOLD_SECONDS = 120;

export interface Phase {
  /** Countdown length for a timed phase; the expected duration for an untimed one. */
  seconds: number;
  /** e.g. "Set 1 of 2 · First side". Empty when there is nothing worth saying. */
  label: string;
  side: 'first' | 'second' | null;
  /**
   * False for rep work: the player shows the count and waits for the user to say
   * they are done, rather than running a clock they cannot keep pace with.
   */
  timed: boolean;
}

/** Nominal seconds per controlled rep. Used for budgeting only, never as a clock. */
export const SECONDS_PER_REP = 4;

function label(setIndex: number, sets: number, side: Phase['side']): string {
  const parts: string[] = [];
  if (sets > 1) parts.push(`Set ${setIndex + 1} of ${sets}`);
  if (side === 'first') parts.push('First side');
  if (side === 'second') parts.push('Second side');
  return parts.join(' · ');
}

/**
 * The hold length actually prescribed, after scaling and clamping.
 *
 * `maxHoldSeconds` is a safety ceiling — toes-tucked kneeling is capped because
 * the position is punishing, not because of the clock — so "longer" must never
 * push past it.
 */
export function holdSecondsFor(exercise: Exercise, level: HoldLevel = 'standard'): number {
  if (exercise.dose.kind !== 'hold') return 0;

  const ceiling = Math.min(exercise.maxHoldSeconds ?? MAX_HOLD_SECONDS, MAX_HOLD_SECONDS);
  const base = Math.min(exercise.dose.seconds, ceiling);
  const scaled = Math.round((base * MULTIPLIERS[level]) / 5) * 5;

  return Math.max(MIN_HOLD_SECONDS, Math.min(scaled, ceiling));
}

export function buildPhases(exercise: Exercise, level: HoldLevel = 'standard'): Phase[] {
  const { dose } = exercise;
  const timed = dose.kind === 'hold';
  const seconds = timed
    ? holdSecondsFor(exercise, level)
    : Math.max(dose.kind === 'reps' ? dose.reps * SECONDS_PER_REP : 0, MIN_HOLD_SECONDS);

  const sides: Phase['side'][] = dose.perSide ? ['first', 'second'] : [null];

  const phases: Phase[] = [];
  for (let set = 0; set < dose.sets; set += 1) {
    for (const side of sides) {
      phases.push({ seconds, label: label(set, dose.sets, side), side, timed });
    }
  }
  return phases;
}

export function totalPhaseSeconds(exercise: Exercise, level: HoldLevel = 'standard'): number {
  return buildPhases(exercise, level).reduce((sum, phase) => sum + phase.seconds, 0);
}

/** Seconds of settling and repositioning assumed between exercises. */
export const TRANSITION_SECONDS = 15;
/** Short breather between sets and between sides. */
export const REST_BETWEEN_PHASES = 10;

/**
 * Budgeted runtime of one exercise, including rests and the transition into it.
 *
 * For rep work this is an estimate rather than a promise — the user sets the pace.
 * The session packer uses it so a twenty-minute session is roughly twenty minutes.
 */
export function estimateSeconds(exercise: Exercise, level: HoldLevel = 'standard'): number {
  const phases = buildPhases(exercise, level);
  const working = phases.reduce((sum, phase) => sum + phase.seconds, 0);
  const rests = Math.max(phases.length - 1, 0) * REST_BETWEEN_PHASES;
  return working + rests + TRANSITION_SECONDS;
}

/** "45s each side, twice" — the dose as it will actually be performed. */
export function describeDose(exercise: Exercise, level: HoldLevel = 'standard'): string {
  const { dose } = exercise;
  const side = dose.perSide ? ' each side' : '';
  const sets = dose.sets > 1 ? `, ${dose.sets} sets` : '';

  if (dose.kind === 'hold') return `${holdSecondsFor(exercise, level)}s${side}${sets}`;
  return `${dose.reps} reps${side}${sets}`;
}
