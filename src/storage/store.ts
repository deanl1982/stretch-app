import {
  DEFAULT_PROFILE,
  SCHEMA_VERSION,
  type Backup,
  type Profile,
  type SessionRecord,
} from './types.ts';
import { loadFavourites, mergeFavourites } from './favourites.ts';
import { loadRoutines, mergeRoutines } from './routines.ts';

/**
 * Device-local persistence.
 *
 * Everything lives in this browser and nowhere else — there is no account and no
 * server. That is a deliberate choice, and its cost is that clearing site data wipes
 * your history, and your phone and laptop keep separate streaks. Export/import is the
 * mitigation, and it is not optional.
 *
 * Keys are versioned so a future schema change can migrate rather than destroy.
 */

const PROFILE_KEY = `groundwork.v${SCHEMA_VERSION}.profile`;
const HISTORY_KEY = `groundwork.v${SCHEMA_VERSION}.history`;

/** localStorage throws in private mode and when site data is blocked. Never let that crash a session. */
function safeRead(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeWrite(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function parse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function loadProfile(): Profile {
  const stored = parse<Partial<Profile>>(safeRead(PROFILE_KEY), {});
  // Spread over the defaults so a profile written by an older build gains new fields
  // rather than arriving with undefined holes.
  return { ...DEFAULT_PROFILE, ...stored };
}

export function saveProfile(profile: Profile): void {
  safeWrite(PROFILE_KEY, JSON.stringify(profile));
}

export function loadHistory(): SessionRecord[] {
  const stored = parse<SessionRecord[]>(safeRead(HISTORY_KEY), []);
  return Array.isArray(stored) ? stored : [];
}

export function saveHistory(history: SessionRecord[]): void {
  safeWrite(HISTORY_KEY, JSON.stringify(history));
}

export function appendSession(record: SessionRecord): SessionRecord[] {
  const history = [...loadHistory(), record];
  saveHistory(history);
  return history;
}

// ── Backup ──────────────────────────────────────────────────────────────

export function buildBackup(): Backup {
  return {
    app: 'groundwork',
    version: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    profile: loadProfile(),
    history: loadHistory(),
    favourites: loadFavourites(),
    routines: loadRoutines(),
  };
}

export function downloadBackup(): void {
  const blob = new Blob([JSON.stringify(buildBackup(), null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `groundwork-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export interface RestoreResult {
  ok: boolean;
  message: string;
}

/** Merge a backup into local state. Sessions are de-duplicated by id. */
export function restoreBackup(raw: string): RestoreResult {
  let backup: Backup;
  try {
    backup = JSON.parse(raw) as Backup;
  } catch {
    return { ok: false, message: 'That file is not valid JSON.' };
  }

  if (backup.app !== 'groundwork' || !Array.isArray(backup.history)) {
    return { ok: false, message: 'That does not look like a Groundwork backup.' };
  }

  const existing = loadHistory();
  const seen = new Set(existing.map((session) => session.id));
  const merged = [...existing];
  for (const session of backup.history) {
    if (typeof session?.id === 'string' && !seen.has(session.id)) {
      merged.push(session);
      seen.add(session.id);
    }
  }
  merged.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  saveHistory(merged);

  if (backup.profile !== undefined) {
    saveProfile({ ...loadProfile(), ...backup.profile });
  }

  if (Array.isArray(backup.favourites)) mergeFavourites(backup.favourites);
  const routinesAdded = Array.isArray(backup.routines) ? mergeRoutines(backup.routines) : 0;

  const added = merged.length - existing.length;
  const parts = [`${added} session${added === 1 ? '' : 's'}`];
  if (routinesAdded > 0) parts.push(`${routinesAdded} workout${routinesAdded === 1 ? '' : 's'}`);
  return { ok: true, message: `Restored. ${parts.join(' and ')} added.` };
}
