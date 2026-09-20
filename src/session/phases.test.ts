import { describe, expect, it } from 'vitest';
import { EXERCISES, getExercise } from '../content/exercises.ts';
import { buildPhases, SECONDS_PER_REP, totalPhaseSeconds } from './phases.ts';

describe('buildPhases', () => {
  it('gives a per-side hold one countdown per side, not one long one', () => {
    const lean = getExercise('ninety-ninety-lean');
    expect(lean).toBeDefined();
    if (lean === undefined) return;

    const phases = buildPhases(lean);
    expect(phases).toHaveLength(2);
    expect(phases[0]?.seconds).toBe(60);
    expect(phases[0]?.label).toBe('First side');
    expect(phases[1]?.label).toBe('Second side');
  });

  it('splits sets and sides into separate phases', () => {
    const calf = getExercise('soleus-calf-stretch'); // 45s each side, 2 sets
    expect(calf).toBeDefined();
    if (calf === undefined) return;

    const phases = buildPhases(calf);
    expect(phases).toHaveLength(4);
    expect(phases.every((p) => p.seconds === 45)).toBe(true);
    expect(phases[0]?.label).toBe('Set 1 of 2 · First side');
    expect(phases[3]?.label).toBe('Set 2 of 2 · Second side');
  });

  it('says nothing when there is one set and no sides', () => {
    const childs = getExercise('childs-pose');
    expect(childs).toBeDefined();
    if (childs === undefined) return;

    const phases = buildPhases(childs);
    expect(phases).toHaveLength(1);
    expect(phases[0]?.label).toBe('');
    expect(phases[0]?.side).toBeNull();
  });

  it('respects the hold cap', () => {
    const tucked = getExercise('toes-tucked-kneeling');
    expect(tucked).toBeDefined();
    if (tucked === undefined) return;

    for (const phase of buildPhases(tucked)) {
      expect(phase.seconds).toBeLessThanOrEqual(tucked.maxHoldSeconds ?? Infinity);
    }
  });

  it('times rep work from a nominal tempo', () => {
    const catCow = getExercise('cat-cow'); // 8 reps, 1 set
    expect(catCow).toBeDefined();
    if (catCow === undefined) return;
    expect(buildPhases(catCow)[0]?.seconds).toBe(8 * SECONDS_PER_REP);
  });

  it('never produces a zero-length or absurd phase anywhere in the library', () => {
    for (const exercise of EXERCISES) {
      const phases = buildPhases(exercise);
      expect(phases.length, exercise.id).toBeGreaterThan(0);
      for (const phase of phases) {
        expect(phase.seconds, exercise.id).toBeGreaterThanOrEqual(10);
        expect(phase.seconds, exercise.id).toBeLessThanOrEqual(120);
      }
      expect(totalPhaseSeconds(exercise), exercise.id).toBeGreaterThan(0);
    }
  });
});
