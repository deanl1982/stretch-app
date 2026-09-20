import { beforeEach, describe, expect, it, vi } from 'vitest';

/** A minimal localStorage, since these tests run in node. */
function installStorage(): Map<string, string> {
  const map = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
    clear: () => map.clear(),
  });
  return map;
}

let store: typeof import('./store.ts');

beforeEach(async () => {
  installStorage();
  vi.resetModules();
  store = await import('./store.ts');
});

const session = (id: string, dateISO: string) => ({
  id,
  dateISO,
  seed: id,
  budgetSeconds: 1200,
  plannedIds: ['shin-box'],
  completedIds: ['shin-box'],
  skippedIds: [],
  totalSeconds: 600,
});

describe('profile', () => {
  it('returns defaults when nothing is stored', () => {
    expect(store.loadProfile().onboarded).toBe(false);
    expect(store.loadProfile().defaultMinutes).toBe(20);
  });

  it('gains new fields when an older profile is loaded', () => {
    localStorage.setItem('groundwork.v1.profile', JSON.stringify({ defaultMinutes: 5 }));
    const profile = store.loadProfile();
    expect(profile.defaultMinutes).toBe(5);
    // Fields absent from the stored blob still arrive with their defaults.
    expect(profile.exclusions).toEqual([]);
    expect(profile.sound).toBe(true);
  });

  it('survives corrupt JSON rather than throwing', () => {
    localStorage.setItem('groundwork.v1.profile', '{ not json');
    expect(() => store.loadProfile()).not.toThrow();
    expect(store.loadProfile().defaultMinutes).toBe(20);
  });
});

describe('backup and restore', () => {
  it('round-trips history and profile', () => {
    store.saveProfile({ ...store.loadProfile(), defaultMinutes: 10, onboarded: true });
    store.saveHistory([session('a', '2026-09-01T10:00:00.000Z')]);

    const exported = JSON.stringify(store.buildBackup());

    localStorage.clear();
    expect(store.loadHistory()).toEqual([]);

    const result = store.restoreBackup(exported);
    expect(result.ok).toBe(true);
    expect(store.loadHistory()).toHaveLength(1);
    expect(store.loadProfile().defaultMinutes).toBe(10);
    expect(store.loadProfile().onboarded).toBe(true);
  });

  it('merges without creating duplicates', () => {
    store.saveHistory([session('a', '2026-09-01T10:00:00.000Z')]);
    const exported = JSON.stringify(store.buildBackup());

    store.saveHistory([
      session('a', '2026-09-01T10:00:00.000Z'),
      session('b', '2026-09-02T10:00:00.000Z'),
    ]);

    const result = store.restoreBackup(exported);
    expect(result.ok).toBe(true);
    // 'a' was already present, so nothing is added.
    expect(store.loadHistory().map((s) => s.id)).toEqual(['a', 'b']);
    expect(result.message).toContain('0 sessions');
  });

  it('keeps history sorted by date after a merge', () => {
    store.saveHistory([session('late', '2026-09-10T10:00:00.000Z')]);
    const backup = JSON.stringify({
      app: 'groundwork',
      version: 1,
      exportedAt: new Date().toISOString(),
      profile: store.loadProfile(),
      history: [session('early', '2026-09-01T10:00:00.000Z')],
    });

    store.restoreBackup(backup);
    expect(store.loadHistory().map((s) => s.id)).toEqual(['early', 'late']);
  });

  it('rejects a file that is not a Groundwork backup', () => {
    store.saveHistory([session('a', '2026-09-01T10:00:00.000Z')]);
    const result = store.restoreBackup(JSON.stringify({ app: 'something-else' }));
    expect(result.ok).toBe(false);
    // And it must not have destroyed what was already there.
    expect(store.loadHistory()).toHaveLength(1);
  });

  it('rejects invalid JSON without throwing', () => {
    const result = store.restoreBackup('<html>nope</html>');
    expect(result.ok).toBe(false);
    expect(result.message).toContain('JSON');
  });
});

describe('when localStorage is unavailable', () => {
  it('still reads defaults and does not throw on write', async () => {
    vi.stubGlobal('localStorage', {
      getItem: () => {
        throw new Error('blocked');
      },
      setItem: () => {
        throw new Error('blocked');
      },
      removeItem: () => undefined,
    });
    vi.resetModules();
    const blocked = await import('./store.ts');

    expect(() => blocked.loadProfile()).not.toThrow();
    expect(blocked.loadHistory()).toEqual([]);
    expect(() => blocked.saveHistory([session('a', '2026-09-01T10:00:00.000Z')])).not.toThrow();
  });
});
