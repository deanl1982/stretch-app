import { SCHEMA_VERSION } from '../storage/types.ts';

/**
 * The in-progress session.
 *
 * Persisted so that reloading, or a phone locking and being reopened, does not lose
 * your place halfway through. Only the plan and the cursor are stored — everything
 * displayed is derived from the exercise library.
 */
export interface ActiveSession {
  seed: string;
  budgetSeconds: number;
  plannedIds: string[];
  /** Index into plannedIds. */
  index: number;
  completedIds: string[];
  skippedIds: string[];
  startedAt: string;
}

const KEY = `groundwork.v${SCHEMA_VERSION}.active`;

export function loadActive(): ActiveSession | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw) as ActiveSession;
    return Array.isArray(parsed.plannedIds) && parsed.plannedIds.length > 0 ? parsed : null;
  } catch {
    return null;
  }
}

export function saveActive(session: ActiveSession): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(session));
  } catch {
    // Out of quota or blocked. The session still runs, it just will not survive a reload.
  }
}

export function clearActive(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // Nothing to do.
  }
}
