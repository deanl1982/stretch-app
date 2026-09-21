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
 * 2. **Reps are counted, not run against one clock.** Ten good mornings is not a
 *    forty-second block you sit through; it is ten separate efforts. A rep phase
 *    therefore carries the rep count and the seconds one rep should take, and the
 *    player counts reps down one at a time rather than running a single timer the
 *    user cannot keep pace with.
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

type Side = 'first' | 'second' | null;

interface PhaseBase {
  /** Working seconds the phase is budgeted at. For reps, reps x secondsPerRep. */
  seconds: number;
  /** e.g. "Set 1 of 2 · First side". Empty when there is nothing worth saying. */
  label: string;
  side: Side;
}

export interface HoldPhase extends PhaseBase {
  kind: 'hold';
}

export interface RepPhase extends PhaseBase {
  kind: 'reps';
  reps: number;
  /** How long one rep should take. The player's per-rep countdown. */
  secondsPerRep: number;
}

export type Phase = HoldPhase | RepPhase;

/**
 * Fallback pace for a rep dose that never declared one.
 *
 * Every exercise in the library does declare one - there is a test for it - so
 * this exists only so the type system is not the sole thing standing between a
 * new exercise and a divide-by-nothing in the player.
 */
export const SECONDS_PER_REP = 4;

/**
 * How rep work is driven in the player.
 *
 * `paced` counts each rep down against its own tempo and advances on its own -
 * a metronome you follow. `manual` shows the same counter but waits for a tap,
 * for anyone whose pace is their own business. Either way the count is visible,
 * because "10 reps, 2 sets" on a screen with a single clock told you nothing
 * about which rep you were on.
 */
export type RepPacing = 'paced' | 'manual';

export const REP_PACINGS: RepPacing[] = ['paced', 'manual'];

export const REP_PACING_LABELS: Record<RepPacing, string> = {
  paced: 'Pace them for me',
  manual: 'I will tap each rep',
};

export const REP_PACING_HINTS: Record<RepPacing, string> = {
  paced: 'Each rep gets its own countdown and moves on by itself.',
  manual: 'The counter waits for you. Nothing advances until you say so.',
};

/** Nobody can follow a pacer faster than this, and none of the doses need to. */
export const MIN_SECONDS_PER_REP = 2;

/** How long one rep of this exercise should take, clamped to something followable. */
export function secondsPerRepFor(exercise: Exercise): number {
  if (exercise.dose.kind !== 'reps') return 0;
  return Math.max(MIN_SECONDS_PER_REP, exercise.dose.secondsPerRep || SECONDS_PER_REP);
}

function label(setIndex: number, sets: number, side: Side): string {
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
  const sides: Side[] = dose.perSide ? ['first', 'second'] : [null];

  const phases: Phase[] = [];
  for (let set = 0; set < dose.sets; set += 1) {
    for (const side of sides) {
      const common = { label: label(set, dose.sets, side), side };
      if (dose.kind === 'hold') {
        phases.push({ kind: 'hold', seconds: holdSecondsFor(exercise, level), ...common });
      } else {
        const secondsPerRep = secondsPerRepFor(exercise);
        phases.push({
          kind: 'reps',
          reps: dose.reps,
          secondsPerRep,
          seconds: dose.reps * secondsPerRep,
          ...common,
        });
      }
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

/**
 * "45s each side, twice" — the dose as it will actually be performed.
 *
 * `pace` appends the per-rep tempo, which is worth showing in a list: it is why
 * four reps of a chair hover cost a minute and twelve sciatic sliders cost half
 * that. The player passes `false`, because its rep counter says so already.
 */
export function describeDose(
  exercise: Exercise,
  level: HoldLevel = 'standard',
  { pace = true }: { pace?: boolean } = {},
): string {
  const { dose } = exercise;
  const side = dose.perSide ? ' each side' : '';
  const sets = dose.sets > 1 ? `, ${dose.sets} sets` : '';

  if (dose.kind === 'hold') return `${holdSecondsFor(exercise, level)}s${side}${sets}`;
  const tempo = pace ? ` · ${secondsPerRepFor(exercise)}s a rep` : '';
  return `${dose.reps} reps${side}${sets}${tempo}`;
}
