import { SCHEMA_VERSION, type Routine } from './types.ts';

/** Saved, user-assembled workouts. */

const KEY = `groundwork.v${SCHEMA_VERSION}.routines`;

function readRaw(): Routine[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === null) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (r): r is Routine =>
        typeof r === 'object' &&
        r !== null &&
        typeof (r as Routine).id === 'string' &&
        Array.isArray((r as Routine).exerciseIds),
    );
  } catch {
    return [];
  }
}

function writeRaw(routines: Routine[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(routines));
  } catch {
    // Blocked or full.
  }
}

/**
 * Most recently used first, then most recently created.
 *
 * Timestamps collide when two workouts are created in the same millisecond, so
 * insertion order breaks the tie — otherwise the list reshuffles unpredictably.
 */
export function loadRoutines(): Routine[] {
  return readRaw()
    .map((routine, index) => ({ routine, index }))
    .sort((a, b) => {
      const byTime = (b.routine.lastUsedAt ?? b.routine.createdAt).localeCompare(
        a.routine.lastUsedAt ?? a.routine.createdAt,
      );
      return byTime !== 0 ? byTime : b.index - a.index;
    })
    .map(({ routine }) => routine);
}

export function getRoutine(id: string): Routine | undefined {
  return readRaw().find((routine) => routine.id === id);
}

function newId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `r-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
  }
}

export function createRoutine(name: string, exerciseIds: string[]): Routine {
  const routine: Routine = {
    id: newId(),
    name: name.trim() === '' ? 'Untitled workout' : name.trim(),
    exerciseIds,
    createdAt: new Date().toISOString(),
  };
  writeRaw([...readRaw(), routine]);
  return routine;
}

/** Upsert by id. Used when editing an existing routine. */
export function saveRoutine(routine: Routine): void {
  const all = readRaw();
  const index = all.findIndex((r) => r.id === routine.id);
  if (index === -1) all.push(routine);
  else all[index] = routine;
  writeRaw(all);
}

export function renameRoutine(id: string, name: string): void {
  const routine = getRoutine(id);
  if (routine === undefined) return;
  saveRoutine({ ...routine, name: name.trim() === '' ? routine.name : name.trim() });
}

export function deleteRoutine(id: string): void {
  writeRaw(readRaw().filter((routine) => routine.id !== id));
}

/** Record that a routine was just run, so the list stays ordered by what you use. */
export function touchRoutine(id: string): void {
  const routine = getRoutine(id);
  if (routine === undefined) return;
  saveRoutine({ ...routine, lastUsedAt: new Date().toISOString() });
}

/** Merge routines from a backup, skipping ids that already exist. */
export function mergeRoutines(incoming: readonly Routine[]): number {
  const all = readRaw();
  const seen = new Set(all.map((routine) => routine.id));
  let added = 0;
  for (const routine of incoming) {
    if (typeof routine?.id === 'string' && !seen.has(routine.id)) {
      all.push(routine);
      seen.add(routine.id);
      added += 1;
    }
  }
  writeRaw(all);
  return added;
}
