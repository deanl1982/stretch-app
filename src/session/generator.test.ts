import { describe, expect, it } from 'vitest';
import { EXERCISES } from '../content/exercises.ts';
import { parseRegions, type Exercise, type Flag, type Region } from '../content/types.ts';
import {
  buildPhases,
  estimateSeconds,
  REST_BETWEEN_PHASES,
  TRANSITION_SECONDS,
} from './phases.ts';
import { eligiblePool, generateSession, WEEKLY_LOAD_LIMIT } from './generator.ts';
import { createRng, shuffle } from './rng.ts';

const BUDGETS = [5, 10, 15, 20].map((minutes) => minutes * 60);
const SEEDS = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', '12345', 'zz'];

/** A synthetic exercise, so timing rules are tested on purpose rather than by accident. */
function fixture(overrides: Partial<Exercise>): Exercise {
  return {
    id: 'fixture', name: 'Fixture', regions: ['hips'], role: 'main', intensity: 1,
    summary: 's', why: 'w', targets: [],
    dose: { kind: 'hold', seconds: 30, sets: 1, perSide: false },
    cues: ['a', 'b'], shouldFeel: 'f', shouldNotFeel: 'n',
    regressions: [{ label: 'r', detail: 'd', props: ['none'] }], progressions: [],
    props: ['none'], officeFriendly: true, barefootOnly: false,
    contraindications: [], dailySafe: true, source: [],
    ...overrides,
  };
}

describe('estimateSeconds', () => {
  it('counts a plain hold plus its transition', () => {
    const e = fixture({ dose: { kind: 'hold', seconds: 30, sets: 1, perSide: false } });
    expect(estimateSeconds(e)).toBe(30 + TRANSITION_SECONDS);
  });

  it('counts both sides, with a rest between them', () => {
    const e = fixture({ dose: { kind: 'hold', seconds: 30, sets: 1, perSide: true } });
    expect(estimateSeconds(e)).toBe(30 * 2 + REST_BETWEEN_PHASES + TRANSITION_SECONDS);
  });

  it('counts every set and side', () => {
    const e = fixture({ dose: { kind: 'hold', seconds: 20, sets: 2, perSide: true } });
    // 4 phases of 20s, 3 rests between them, 1 transition.
    expect(estimateSeconds(e)).toBe(20 * 4 + REST_BETWEEN_PHASES * 3 + TRANSITION_SECONDS);
  });

  it('honours maxHoldSeconds when the dose would exceed it', () => {
    const e = fixture({
      dose: { kind: 'hold', seconds: 90, sets: 2, perSide: false },
      maxHoldSeconds: 20,
    });
    expect(buildPhases(e).every((p) => p.seconds === 20)).toBe(true);
    expect(estimateSeconds(e)).toBe(20 * 2 + REST_BETWEEN_PHASES + TRANSITION_SECONDS);
  });

  it("budgets rep work from the exercise's own tempo, not a flat rate", () => {
    const quick = fixture({
      dose: { kind: 'reps', reps: 10, sets: 1, perSide: false, secondsPerRep: 3 },
    });
    expect(estimateSeconds(quick)).toBe(10 * 3 + TRANSITION_SECONDS);

    // Same rep count, ten-second holds: over three times the block.
    const slow = fixture({
      dose: { kind: 'reps', reps: 10, sets: 1, perSide: false, secondsPerRep: 10 },
    });
    expect(estimateSeconds(slow)).toBe(10 * 10 + TRANSITION_SECONDS);
  });
});

describe('content integrity', () => {
  it('has unique ids', () => {
    const ids = EXERCISES.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has at least one opener and one rest position', () => {
    expect(EXERCISES.some((e) => e.role === 'opener')).toBe(true);
    expect(EXERCISES.some((e) => e.role === 'rest')).toBe(true);
  });

  it('gives every exercise cues, a feel, and a not-feel', () => {
    for (const exercise of EXERCISES) {
      expect(exercise.cues.length, `${exercise.id} cues`).toBeGreaterThanOrEqual(2);
      expect(exercise.cues.length, `${exercise.id} cues`).toBeLessThanOrEqual(4);
      expect(exercise.shouldFeel, `${exercise.id} shouldFeel`).toBeTruthy();
      expect(exercise.shouldNotFeel, `${exercise.id} shouldNotFeel`).toBeTruthy();
      expect(exercise.regressions.length, `${exercise.id} regressions`).toBeGreaterThan(0);
    }
  });

  it('keeps every single exercise inside the 20-minute cap on its own', () => {
    for (const exercise of EXERCISES) {
      expect(estimateSeconds(exercise), `${exercise.id} is too long to ever be drawn`).toBeLessThanOrEqual(
        20 * 60,
      );
    }
  });
});

describe('generateSession', () => {
  it('never exceeds the budget', () => {
    for (const seed of SEEDS) {
      for (const budgetSeconds of BUDGETS) {
        const session = generateSession({ seed, budgetSeconds });
        expect(session.totalSeconds, `seed ${seed} @ ${budgetSeconds}s`).toBeLessThanOrEqual(
          budgetSeconds,
        );
      }
    }
  });

  it('never repeats an exercise within a session', () => {
    for (const seed of SEEDS) {
      const session = generateSession({ seed, budgetSeconds: 20 * 60 });
      const ids = session.items.map((item) => item.exercise.id);
      expect(new Set(ids).size, `seed ${seed}`).toBe(ids.length);
    }
  });

  it('is reproducible from its seed', () => {
    for (const seed of SEEDS) {
      const a = generateSession({ seed, budgetSeconds: 20 * 60 });
      const b = generateSession({ seed, budgetSeconds: 20 * 60 });
      expect(a.items.map((i) => i.exercise.id)).toEqual(b.items.map((i) => i.exercise.id));
    }
  });

  it('produces different sessions for different seeds', () => {
    const shapes = SEEDS.map((seed) =>
      generateSession({ seed, budgetSeconds: 20 * 60 })
        .items.map((i) => i.exercise.id)
        .join(','),
    );
    expect(new Set(shapes).size).toBeGreaterThan(1);
  });

  it('keeps its opener and closing rest even in the shortest session', () => {
    // At five minutes the randomly chosen opener used to be dropped whenever it was a long one, so the
    // session started cold. Many seeds, because the failure depended on which opener came up first.
    for (let i = 0; i < 300; i += 1) {
      const session = generateSession({ seed: `short-${i}`, budgetSeconds: 5 * 60 });
      expect(session.items[0]?.exercise.role, `short-${i} opener`).toBe('opener');
      expect(session.items.at(-1)?.exercise.role, `short-${i} rest`).toBe('rest');
      expect(session.totalSeconds, `short-${i}`).toBeLessThanOrEqual(5 * 60);
    }
  });

  it('opens with an opener and closes with a rest position by default', () => {
    for (const seed of SEEDS) {
      const session = generateSession({ seed, budgetSeconds: 20 * 60 });
      expect(session.items.length, `seed ${seed}`).toBeGreaterThan(2);
      expect(session.items[0]?.exercise.role, `seed ${seed} opener`).toBe('opener');
      expect(session.items.at(-1)?.exercise.role, `seed ${seed} closer`).toBe('rest');
    }
  });

  it('drops the opener/closer structure under pure chaos', () => {
    // Across many seeds, unconstrained draws should not always land on an opener first.
    const openers = SEEDS.map(
      (seed) =>
        generateSession({ seed, budgetSeconds: 20 * 60, pureChaos: true }).items[0]?.exercise
          .role === 'opener',
    );
    expect(openers.every(Boolean)).toBe(false);
  });

  it('respects every exclusion flag', () => {
    const flags: Flag[] = [
      'knee',
      'hipReplacement',
      'backPain',
      'sciatica',
      'balance',
      'groin',
      'bloodPressure',
      'shoulder',
      'osteoporosis',
      'achilles',
      'plantarFascia',
      'bigToe',
      'wrist',
    ];

    for (const flag of flags) {
      for (const seed of SEEDS) {
        const session = generateSession({ seed, budgetSeconds: 20 * 60, exclusions: [flag] });
        for (const item of session.items) {
          expect(
            item.exercise.contraindications,
            `${item.exercise.id} should not appear when "${flag}" is excluded`,
          ).not.toContain(flag);
        }
      }
    }
  });

  it('removes every flexion/adduction/rotation item after a hip replacement', () => {
    const session = generateSession({
      seed: 'hip-replacement',
      budgetSeconds: 20 * 60,
      exclusions: ['hipReplacement'],
    });
    for (const item of session.items) {
      expect(item.exercise.contraindications).not.toContain('hipReplacement');
    }
    // The pool should genuinely shrink — otherwise the flag is doing nothing.
    expect(eligiblePool({ seed: 'x', budgetSeconds: 0, exclusions: ['hipReplacement'] }).length)
      .toBeLessThan(EXERCISES.length);
  });

  it('only offers office-friendly work in office mode', () => {
    for (const seed of SEEDS) {
      const session = generateSession({ seed, budgetSeconds: 20 * 60, officeOnly: true });
      for (const item of session.items) {
        expect(item.exercise.officeFriendly, `${item.exercise.id}`).toBe(true);
      }
    }
  });

  it('caps non-daily load work at twice a rolling week', () => {
    const loadItems = EXERCISES.filter((e) => !e.dailySafe);
    const recentCounts = new Map(loadItems.map((e) => [e.id, WEEKLY_LOAD_LIMIT]));

    for (const seed of SEEDS) {
      const session = generateSession({ seed, budgetSeconds: 20 * 60, recentCounts });
      for (const item of session.items) {
        if (!item.exercise.dailySafe) {
          expect.unreachable(`${item.exercise.id} was drawn despite hitting its weekly limit`);
        }
      }
    }
  });

  it('withholds conditional items until the user declares the matching flag', () => {
    const conditional = EXERCISES.filter((e) => e.requiresFlag !== undefined);
    expect(conditional.length, 'expected at least one conditional item').toBeGreaterThan(0);

    const defaultPool = eligiblePool({ seed: 'x', budgetSeconds: 0 });
    for (const exercise of conditional) {
      expect(
        defaultPool,
        `${exercise.id} should not be offered by default`,
      ).not.toContain(exercise);
    }

    // The sciatic slider is the whole point of the mechanism: it appears only for
    // someone who told us they have nerve symptoms.
    const sciaticPool = eligiblePool({ seed: 'x', budgetSeconds: 0, exclusions: ['sciatica'] });
    expect(sciaticPool.map((e) => e.id)).toContain('sciatic-slider');
  });

  it('draws only from the chosen body areas', () => {
    const cases: Region[][] = [['hips'], ['hamstrings'], ['ankles'], ['back'], ['hips', 'ankles']];

    for (const regions of cases) {
      for (const seed of SEEDS) {
        const session = generateSession({ seed, budgetSeconds: 20 * 60, regions });
        expect(session.items.length, `${regions.join('+')} @ ${seed}`).toBeGreaterThan(0);
        for (const item of session.items) {
          expect(
            item.exercise.regions.some((region) => regions.includes(region)),
            `${item.exercise.id} is not in ${regions.join('+')}`,
          ).toBe(true);
        }
      }
    }
  });

  it('treats an empty focus as the whole library', () => {
    const focused = generateSession({ seed: 'alpha', budgetSeconds: 20 * 60, regions: [] });
    const unfocused = generateSession({ seed: 'alpha', budgetSeconds: 20 * 60 });
    expect(focused.items.map((i) => i.exercise.id)).toEqual(
      unfocused.items.map((i) => i.exercise.id),
    );
  });

  it('still opens and closes properly when focused on one area', () => {
    for (const region of ['hips', 'hamstrings', 'ankles', 'back'] as Region[]) {
      const session = generateSession({ seed: 'focus', budgetSeconds: 20 * 60, regions: [region] });
      expect(session.items[0]?.exercise.role, region).toBe('opener');
      expect(session.items.at(-1)?.exercise.role, region).toBe('rest');
    }
  });

  it('honours exclusions and focus together', () => {
    const session = generateSession({
      seed: 'both',
      budgetSeconds: 20 * 60,
      regions: ['hips'],
      exclusions: ['knee'],
    });
    for (const item of session.items) {
      expect(item.exercise.regions).toContain('hips');
      expect(item.exercise.contraindications).not.toContain('knee');
    }
  });

  it('never prescribes a hold longer than its cap', () => {
    for (const seed of SEEDS) {
      const session = generateSession({ seed, budgetSeconds: 20 * 60 });
      for (const { exercise, holdSeconds } of session.items) {
        if (exercise.maxHoldSeconds !== undefined && holdSeconds !== undefined) {
          expect(holdSeconds, `${exercise.id}`).toBeLessThanOrEqual(exercise.maxHoldSeconds);
        }
      }
    }
  });

  it('only offers work the user has props for', () => {
    const session = generateSession({
      seed: 'bare-floor',
      budgetSeconds: 20 * 60,
      availableProps: ['none'],
    });
    for (const { exercise } of session.items) {
      const prescribedIsFree = exercise.props.every((p) => p === 'none');
      const hasFreeRegression = exercise.regressions.some((r) =>
        r.props.every((p) => p === 'none'),
      );
      expect(
        prescribedIsFree || hasFreeRegression,
        `${exercise.id} needs props the user does not have`,
      ).toBe(true);
    }
  });

  it('degrades gracefully when exclusions shrink the pool to nothing', () => {
    const session = generateSession({
      seed: 'everything-hurts',
      budgetSeconds: 20 * 60,
      library: [],
    });
    expect(session.items).toEqual([]);
    expect(session.totalSeconds).toBe(0);
  });

  it('returns something usable even at the smallest budget', () => {
    for (const seed of SEEDS) {
      const session = generateSession({ seed, budgetSeconds: 5 * 60 });
      expect(session.items.length, `seed ${seed}`).toBeGreaterThan(0);
      expect(session.totalSeconds).toBeLessThanOrEqual(5 * 60);
    }
  });

  it('fills a reasonable share of the time it is given', () => {
    for (const seed of SEEDS) {
      const budgetSeconds = 20 * 60;
      const session = generateSession({ seed, budgetSeconds });
      // Packing is greedy, so it will not be perfect — but leaving a third of the
      // session empty would mean the user is short-changed.
      expect(session.totalSeconds, `seed ${seed}`).toBeGreaterThan(budgetSeconds * 0.7);
    }
  });
});

describe('rng', () => {
  it('is deterministic for a given seed', () => {
    const a = createRng('seed');
    const b = createRng('seed');
    expect([a.next(), a.next(), a.next()]).toEqual([b.next(), b.next(), b.next()]);
  });

  it('shuffles without losing or duplicating items', () => {
    const input = Array.from({ length: 50 }, (_, i) => i);
    const out = shuffle(input, createRng('shuffle'));
    expect(out).toHaveLength(input.length);
    expect(new Set(out)).toEqual(new Set(input));
    expect(input).toEqual(Array.from({ length: 50 }, (_, i) => i));
  });
});

describe('parseRegions', () => {
  it('reads a focus parameter', () => {
    expect(parseRegions('hips,back')).toEqual(['hips', 'back']);
  });

  it('is empty for nothing', () => {
    expect(parseRegions(null)).toEqual([]);
    expect(parseRegions('')).toEqual([]);
    expect(parseRegions('   ')).toEqual([]);
  });

  it('drops anything that is not a real region', () => {
    expect(parseRegions('hips,elbows,back')).toEqual(['hips', 'back']);
    expect(parseRegions('nonsense')).toEqual([]);
  });

  it('tolerates whitespace', () => {
    expect(parseRegions(' hips , back ')).toEqual(['hips', 'back']);
  });
});
