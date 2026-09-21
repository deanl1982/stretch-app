import { describe, expect, it } from 'vitest';
import { EXERCISES, getExercise } from '../content/exercises.ts';
import type { Exercise } from '../content/types.ts';
import {
  buildPhases,
  describeDose,
  estimateSeconds,
  holdSecondsFor,
  HOLD_LEVELS,
  MAX_HOLD_SECONDS,
  MIN_HOLD_SECONDS,
  MIN_SECONDS_PER_REP,
  secondsPerRepFor,
} from './phases.ts';
import { generateSession } from './generator.ts';

describe('adjustable hold length', () => {
  it('shortens and lengthens relative to the written dose', () => {
    const lean = getExercise('ninety-ninety-lean'); // 60s each side
    expect(lean).toBeDefined();
    if (lean === undefined) return;

    expect(holdSecondsFor(lean, 'standard')).toBe(60);
    expect(holdSecondsFor(lean, 'shorter')).toBeLessThan(60);
    expect(holdSecondsFor(lean, 'longer')).toBeGreaterThan(60);
  });

  it('never breaches an exercise’s safety ceiling, even on "longer"', () => {
    for (const exercise of EXERCISES) {
      if (exercise.maxHoldSeconds === undefined) continue;
      for (const level of HOLD_LEVELS) {
        expect(
          holdSecondsFor(exercise, level),
          `${exercise.id} @ ${level} exceeded its cap`,
        ).toBeLessThanOrEqual(exercise.maxHoldSeconds);
      }
    }
  });

  it('never drops below a length that is still a hold', () => {
    for (const exercise of EXERCISES) {
      if (exercise.dose.kind !== 'hold') continue;
      expect(holdSecondsFor(exercise, 'shorter'), exercise.id).toBeGreaterThanOrEqual(
        MIN_HOLD_SECONDS,
      );
    }
  });

  it('keeps every hold inside the global bounds at every level', () => {
    for (const exercise of EXERCISES) {
      if (exercise.dose.kind !== 'hold') continue;
      for (const level of HOLD_LEVELS) {
        const s = holdSecondsFor(exercise, level);
        expect(s, `${exercise.id} @ ${level}`).toBeGreaterThanOrEqual(MIN_HOLD_SECONDS);
        expect(s, `${exercise.id} @ ${level}`).toBeLessThanOrEqual(MAX_HOLD_SECONDS);
      }
    }
  });

  it('reports the dose the user will actually perform', () => {
    const lean = getExercise('ninety-ninety-lean');
    if (lean === undefined) return;
    expect(describeDose(lean, 'standard')).toContain('60s');
    expect(describeDose(lean, 'shorter')).not.toContain('60s');
  });

  it('leaves rep-based work untouched', () => {
    const catCow = getExercise('cat-cow'); // 8 reps
    expect(catCow).toBeDefined();
    if (catCow === undefined) return;
    for (const level of HOLD_LEVELS) {
      expect(describeDose(catCow, level)).toBe('8 reps · 8s a rep');
      expect(buildPhases(catCow, level)[0]?.seconds).toBe(buildPhases(catCow, 'standard')[0]?.seconds);
    }
  });

  it('keeps the session budget honest at every level', () => {
    for (const level of HOLD_LEVELS) {
      for (const seed of ['alpha', 'bravo', 'charlie', 'delta']) {
        const session = generateSession({ seed, budgetSeconds: 20 * 60, holdLevel: level });
        expect(session.totalSeconds, `${seed} @ ${level}`).toBeLessThanOrEqual(20 * 60);
        expect(session.items.length, `${seed} @ ${level}`).toBeGreaterThan(0);
      }
    }
  });

  it('fits fewer positions into the same time when holds are longer', () => {
    const shorter = generateSession({ seed: 'x', budgetSeconds: 20 * 60, holdLevel: 'shorter' });
    const longer = generateSession({ seed: 'x', budgetSeconds: 20 * 60, holdLevel: 'longer' });
    // Same seed, same pool — the only difference is how long each hold runs.
    expect(estimateSeconds(shorter.items[0]!.exercise, 'longer')).toBeGreaterThanOrEqual(
      estimateSeconds(shorter.items[0]!.exercise, 'shorter'),
    );
    expect(longer.totalSeconds).toBeLessThanOrEqual(20 * 60);
  });
});

describe('rep work is counted, not run against one clock', () => {
  it('builds a rep phase for every rep dose and a hold phase for every hold', () => {
    for (const exercise of EXERCISES) {
      const expected = exercise.dose.kind;
      for (const phase of buildPhases(exercise)) {
        expect(phase.kind, `${exercise.id}`).toBe(expected);
      }
    }
  });

  it('carries the rep count and the per-rep pace onto the phase', () => {
    for (const exercise of EXERCISES) {
      if (exercise.dose.kind !== 'reps') continue;
      for (const phase of buildPhases(exercise)) {
        if (phase.kind !== 'reps') throw new Error('expected a rep phase');
        expect(phase.reps, exercise.id).toBe(exercise.dose.reps);
        expect(phase.secondsPerRep, exercise.id).toBe(secondsPerRepFor(exercise));
        // The budget is the reps, not an unrelated block length.
        expect(phase.seconds, exercise.id).toBe(phase.reps * phase.secondsPerRep);
      }
    }
  });

  it('gives every rep exercise a pace a human can actually follow', () => {
    for (const exercise of EXERCISES) {
      if (exercise.dose.kind !== 'reps') continue;
      // Declared, not silently defaulted - a new exercise must say its tempo.
      expect(exercise.dose.secondsPerRep, exercise.id).toBeGreaterThanOrEqual(
        MIN_SECONDS_PER_REP,
      );
      expect(exercise.dose.secondsPerRep, exercise.id).toBeLessThanOrEqual(20);
      expect(secondsPerRepFor(exercise), exercise.id).toBe(exercise.dose.secondsPerRep);
    }
  });

  it('keeps a rep block short enough to fit the shortest session', () => {
    for (const exercise of EXERCISES) {
      if (exercise.dose.kind !== 'reps') continue;
      expect(estimateSeconds(exercise), exercise.id).toBeGreaterThan(0);
      // 5 minutes is the smallest budget offered; nothing may be undrawable.
      expect(estimateSeconds(exercise), exercise.id).toBeLessThanOrEqual(5 * 60);
    }
  });

  it('gives one phase per set and side, each with its own rep count', () => {
    const hands = getExercise('hands-on-thighs-straighten'); // 5 reps each side, 2 sets
    expect(hands).toBeDefined();
    if (hands === undefined) return;
    const phases = buildPhases(hands);
    expect(phases).toHaveLength(4);
    expect(phases.every((p) => p.kind === 'reps')).toBe(true);
    expect(phases[0]?.label).toBe('Set 1 of 2 · First side');
  });

  it('does not let the hold level stretch rep work', () => {
    for (const exercise of EXERCISES) {
      if (exercise.dose.kind !== 'reps') continue;
      expect(estimateSeconds(exercise, 'longer'), exercise.id).toBe(
        estimateSeconds(exercise, 'shorter'),
      );
    }
  });
});

describe('a synthetic exercise, so the rules are tested on purpose', () => {
  const fixture = (overrides: Partial<Exercise>): Exercise => ({
    id: 'fixture', name: 'Fixture', regions: ['hips'], role: 'main', intensity: 1,
    summary: 's', why: 'w', targets: [],
    dose: { kind: 'hold', seconds: 40, sets: 1, perSide: false },
    cues: ['a', 'b'], shouldFeel: 'f', shouldNotFeel: 'n',
    regressions: [{ label: 'r', detail: 'd', props: ['none'] }], progressions: [],
    props: ['none'], officeFriendly: true, barefootOnly: false,
    contraindications: [], dailySafe: true, source: [],
    ...overrides,
  });

  it('scales a 40s hold in both directions', () => {
    const e = fixture({});
    expect(holdSecondsFor(e, 'shorter')).toBe(25);
    expect(holdSecondsFor(e, 'standard')).toBe(40);
    expect(holdSecondsFor(e, 'longer')).toBe(60);
  });

  it('clamps "longer" to a cap rather than exceeding it', () => {
    const e = fixture({ dose: { kind: 'hold', seconds: 15, sets: 1, perSide: false }, maxHoldSeconds: 20 });
    expect(holdSecondsFor(e, 'longer')).toBe(20);
  });

  it('clamps "shorter" at the floor rather than going under', () => {
    const e = fixture({ dose: { kind: 'hold', seconds: 12, sets: 1, perSide: false } });
    expect(holdSecondsFor(e, 'shorter')).toBe(MIN_HOLD_SECONDS);
  });

  it('applies the level to every set and side', () => {
    const e = fixture({ dose: { kind: 'hold', seconds: 40, sets: 2, perSide: true } });
    const phases = buildPhases(e, 'longer');
    expect(phases).toHaveLength(4);
    expect(phases.every((p) => p.seconds === 60)).toBe(true);
  });
});
