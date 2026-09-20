import { describe, expect, it } from 'vitest';
import { dayKey, heatmapDays, streaks, totals } from './stats.ts';
import type { SessionRecord } from './types.ts';

function session(dateISO: string, completedIds: string[] = ['shin-box']): SessionRecord {
  return {
    id: dateISO,
    dateISO,
    seed: 's',
    budgetSeconds: 1200,
    plannedIds: completedIds,
    completedIds,
    skippedIds: [],
    totalSeconds: 600,
  };
}

/** Local-midday ISO strings, so the test is not sensitive to the runner's timezone. */
function at(daysAgo: number, today = new Date()): string {
  const d = new Date(today);
  d.setDate(d.getDate() - daysAgo);
  d.setHours(12, 0, 0, 0);
  return d.toISOString();
}

describe('streaks', () => {
  it('is zero with no history', () => {
    expect(streaks([])).toEqual({ current: 0, longest: 0 });
  });

  it('counts consecutive days ending today', () => {
    const history = [session(at(2)), session(at(1)), session(at(0))];
    expect(streaks(history).current).toBe(3);
  });

  it('keeps the streak alive if you trained yesterday but not yet today', () => {
    const history = [session(at(2)), session(at(1))];
    expect(streaks(history).current).toBe(2);
  });

  it('breaks the streak after a missed day', () => {
    const history = [session(at(5)), session(at(4)), session(at(3))];
    expect(streaks(history).current).toBe(0);
  });

  it('counts several sessions in one day as one day', () => {
    const history = [session(at(0)), session(at(0))];
    expect(streaks(history).current).toBe(1);
  });

  it('remembers the longest run even after it breaks', () => {
    const history = [
      session(at(10)), session(at(9)), session(at(8)), session(at(7)),
      session(at(1)), session(at(0)),
    ];
    const result = streaks(history);
    expect(result.longest).toBe(4);
    expect(result.current).toBe(2);
  });
});

describe('totals', () => {
  it('sums sessions and time', () => {
    const result = totals([session(at(1)), session(at(0))]);
    expect(result.sessions).toBe(2);
    expect(result.seconds).toBe(1200);
  });

  it('splits an exercise’s time across every region it is tagged with', () => {
    // deep-squat-hold is tagged ankles, hips, back and fullBody.
    const result = totals([session(at(0), ['deep-squat-hold'])]);
    const spread = Object.values(result.byRegion).reduce((a, b) => a + b, 0);
    expect(Math.round(spread)).toBe(600);
    expect(result.byRegion.hips).toBeGreaterThan(0);
    expect(result.byRegion.ankles).toBeGreaterThan(0);
  });

  it('ignores ids that are no longer in the library', () => {
    const result = totals([session(at(0), ['removed-exercise'])]);
    expect(Object.values(result.byRegion).every((v) => v === 0)).toBe(true);
    expect(result.seconds).toBe(600);
  });
});

describe('heatmapDays', () => {
  it('returns the right number of days, oldest first, ending today', () => {
    const days = heatmapDays(12);
    expect(days).toHaveLength(84);
    expect(days.at(-1)).toBe(dayKey(new Date()));
    expect([...days].sort()).toEqual(days);
  });
});
