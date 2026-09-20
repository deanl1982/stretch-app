import { getExercise } from '../content/exercises.ts';
import type { Region } from '../content/types.ts';
import type { SessionRecord } from './types.ts';

/** Local calendar day, not UTC — a 23:30 session should count for that day. */
export function dayKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDays(key: string, delta: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const date = new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
  date.setDate(date.getDate() + delta);
  return dayKey(date);
}

export function activeDays(history: readonly SessionRecord[]): Set<string> {
  return new Set(history.map((session) => dayKey(new Date(session.dateISO))));
}

export interface Streaks {
  current: number;
  longest: number;
}

/**
 * Current streak counts back from today. Yesterday still counts as live, so someone
 * who has not trained yet today has not lost their streak before the day is out.
 */
export function streaks(history: readonly SessionRecord[], today = new Date()): Streaks {
  const days = activeDays(history);
  if (days.size === 0) return { current: 0, longest: 0 };

  const todayKey = dayKey(today);
  let cursor = days.has(todayKey) ? todayKey : addDays(todayKey, -1);
  let current = 0;
  while (days.has(cursor)) {
    current += 1;
    cursor = addDays(cursor, -1);
  }

  const sorted = [...days].sort();
  let longest = 0;
  let run = 0;
  let previous: string | null = null;
  for (const day of sorted) {
    run = previous !== null && addDays(previous, 1) === day ? run + 1 : 1;
    longest = Math.max(longest, run);
    previous = day;
  }

  return { current, longest };
}

export interface Totals {
  sessions: number;
  seconds: number;
  byRegion: Record<Region, number>;
}

/**
 * Time credited per region. An exercise tagged with several regions splits its time
 * between them, so the totals still add up to the time actually spent.
 */
export function totals(history: readonly SessionRecord[]): Totals {
  const byRegion: Record<Region, number> = {
    hips: 0,
    hamstrings: 0,
    ankles: 0,
    back: 0,
    fullBody: 0,
  };
  let seconds = 0;

  for (const session of history) {
    seconds += session.totalSeconds;
    for (const id of session.completedIds) {
      const exercise = getExercise(id);
      if (exercise === undefined || exercise.regions.length === 0) continue;
      const share = session.totalSeconds / Math.max(session.completedIds.length, 1);
      const perRegion = share / exercise.regions.length;
      for (const region of exercise.regions) byRegion[region] += perRegion;
    }
  }

  return { sessions: history.length, seconds, byRegion };
}

/** Day keys for the last `weeks` weeks, oldest first, for the calendar heatmap. */
export function heatmapDays(weeks: number, today = new Date()): string[] {
  const out: string[] = [];
  const total = weeks * 7;
  for (let i = total - 1; i >= 0; i -= 1) out.push(addDays(dayKey(today), -i));
  return out;
}

export function formatDuration(seconds: number): string {
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins} min`;
  const hours = Math.floor(mins / 60);
  return `${hours}h ${mins % 60}m`;
}
