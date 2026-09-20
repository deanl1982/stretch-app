import { beforeEach, describe, expect, it, vi } from 'vitest';

function installStorage(): void {
  const map = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => map.get(k) ?? null,
    setItem: (k: string, v: string) => void map.set(k, v),
    removeItem: (k: string) => void map.delete(k),
    clear: () => map.clear(),
  });
}

let routines: typeof import('./routines.ts');
let favourites: typeof import('./favourites.ts');

beforeEach(async () => {
  installStorage();
  vi.resetModules();
  routines = await import('./routines.ts');
  favourites = await import('./favourites.ts');
  favourites.resetFavouritesCache();
});

describe('routines', () => {
  it('creates and reads back a workout', () => {
    const created = routines.createRoutine('Morning', ['shin-box', 'seiza']);
    expect(created.name).toBe('Morning');
    expect(routines.loadRoutines()).toHaveLength(1);
    expect(routines.getRoutine(created.id)?.exerciseIds).toEqual(['shin-box', 'seiza']);
  });

  it('preserves the order the user chose rather than sorting it', () => {
    const order = ['seiza', 'big-toe-extension', 'shin-box'];
    const created = routines.createRoutine('Mine', order);
    expect(routines.getRoutine(created.id)?.exerciseIds).toEqual(order);
  });

  it('falls back to a placeholder name rather than saving an empty one', () => {
    expect(routines.createRoutine('   ', ['shin-box']).name).toBe('Untitled workout');
  });

  it('updates an existing workout instead of duplicating it', () => {
    const created = routines.createRoutine('Mine', ['shin-box']);
    routines.saveRoutine({ ...created, exerciseIds: ['shin-box', 'seiza'] });
    expect(routines.loadRoutines()).toHaveLength(1);
    expect(routines.getRoutine(created.id)?.exerciseIds).toHaveLength(2);
  });

  it('renames, but ignores an empty rename', () => {
    const created = routines.createRoutine('Mine', ['shin-box']);
    routines.renameRoutine(created.id, 'Evening');
    expect(routines.getRoutine(created.id)?.name).toBe('Evening');
    routines.renameRoutine(created.id, '  ');
    expect(routines.getRoutine(created.id)?.name).toBe('Evening');
  });

  it('deletes', () => {
    const created = routines.createRoutine('Mine', ['shin-box']);
    routines.deleteRoutine(created.id);
    expect(routines.loadRoutines()).toEqual([]);
  });

  it('puts the most recently used workout first', () => {
    const a = routines.createRoutine('A', ['shin-box']);
    routines.createRoutine('B', ['seiza']);
    // B is newer, so it leads until A is actually used.
    expect(routines.loadRoutines()[0]?.name).toBe('B');
    routines.touchRoutine(a.id);
    expect(routines.loadRoutines()[0]?.name).toBe('A');
  });

  it('survives corrupt storage', () => {
    localStorage.setItem('groundwork.v1.routines', '{ not an array');
    expect(routines.loadRoutines()).toEqual([]);
  });

  it('merges from a backup without duplicating ids', () => {
    const created = routines.createRoutine('Mine', ['shin-box']);
    const added = routines.mergeRoutines([
      { ...created },
      { id: 'other', name: 'Theirs', exerciseIds: ['seiza'], createdAt: new Date().toISOString() },
    ]);
    expect(added).toBe(1);
    expect(routines.loadRoutines()).toHaveLength(2);
  });
});

describe('favourites', () => {
  it('starts empty and toggles on and off', () => {
    expect(favourites.loadFavourites()).toEqual([]);
    expect(favourites.toggleFavourite('shin-box')).toBe(true);
    expect(favourites.isFavourite('shin-box')).toBe(true);
    expect(favourites.toggleFavourite('shin-box')).toBe(false);
    expect(favourites.loadFavourites()).toEqual([]);
  });

  it('keeps the order things were starred in', () => {
    favourites.toggleFavourite('seiza');
    favourites.toggleFavourite('shin-box');
    favourites.toggleFavourite('big-toe-extension');
    expect(favourites.loadFavourites()).toEqual(['seiza', 'shin-box', 'big-toe-extension']);
  });

  it('merges a backup without duplicating', () => {
    favourites.toggleFavourite('seiza');
    favourites.mergeFavourites(['seiza', 'shin-box']);
    expect(favourites.loadFavourites()).toEqual(['seiza', 'shin-box']);
  });

  it('ignores junk in storage', () => {
    localStorage.setItem('groundwork.v1.favourites', '{"not":"an array"}');
    favourites.resetFavouritesCache();
    expect(favourites.loadFavourites()).toEqual([]);
  });
});

describe('the three positions named as a real routine', () => {
  it('can be favourited and saved as a workout', () => {
    // first ray, seiza and shin box — the user's own habitual three.
    const mine = ['big-toe-extension', 'seiza', 'shin-box'];
    for (const id of mine) favourites.toggleFavourite(id);
    expect(favourites.loadFavourites()).toEqual(mine);

    const routine = routines.createRoutine('My three', favourites.loadFavourites());
    expect(routines.getRoutine(routine.id)?.exerciseIds).toEqual(mine);
  });
});
