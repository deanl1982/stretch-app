import type { Exercise } from '../content/types.ts';

/**
 * An exercise, broken into the blocks the timer actually counts.
 *
 * Without this the clock runs sets and sides together, so "60s each side" counts down
 * from 2:00 and the user is left wondering what the number means. Each side and each
 * set gets its own countdown and its own label.
 */
export interface Phase {
  seconds: number;
  /** e.g. "Set 1 of 2 · First side". Empty when there is nothing worth saying. */
  label: string;
  /** Which side this phase works, when the exercise is per-side. */
  side: 'first' | 'second' | null;
}

/** Nominal seconds per controlled rep, used to time rep-based work. */
export const SECONDS_PER_REP = 4;

function label(setIndex: number, sets: number, side: Phase['side']): string {
  const parts: string[] = [];
  if (sets > 1) parts.push(`Set ${setIndex + 1} of ${sets}`);
  if (side === 'first') parts.push('First side');
  if (side === 'second') parts.push('Second side');
  return parts.join(' · ');
}

export function buildPhases(exercise: Exercise): Phase[] {
  const { dose } = exercise;

  const seconds =
    dose.kind === 'hold'
      ? exercise.maxHoldSeconds === undefined
        ? dose.seconds
        : Math.min(dose.seconds, exercise.maxHoldSeconds)
      : Math.max(dose.reps * SECONDS_PER_REP, 15);

  const sides: Phase['side'][] = dose.perSide ? ['first', 'second'] : [null];

  const phases: Phase[] = [];
  for (let set = 0; set < dose.sets; set += 1) {
    for (const side of sides) {
      phases.push({ seconds, label: label(set, dose.sets, side), side });
    }
  }
  return phases;
}

export function totalPhaseSeconds(exercise: Exercise): number {
  return buildPhases(exercise).reduce((sum, phase) => sum + phase.seconds, 0);
}

/** Seconds of settling and repositioning assumed between exercises. */
export const TRANSITION_SECONDS = 15;
/** Short breather between sets and between sides. */
export const REST_BETWEEN_PHASES = 10;

/**
 * Budgeted runtime of one exercise, including its rests and the transition into it.
 *
 * The session packer and the player's clock both derive from this, so what the
 * preview promises is what the timer actually runs.
 */
export function estimateSeconds(exercise: Exercise): number {
  const phases = buildPhases(exercise);
  const working = phases.reduce((sum, phase) => sum + phase.seconds, 0);
  const rests = Math.max(phases.length - 1, 0) * REST_BETWEEN_PHASES;
  return working + rests + TRANSITION_SECONDS;
}
