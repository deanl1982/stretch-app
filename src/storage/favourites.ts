import { useSyncExternalStore } from 'react';
import { SCHEMA_VERSION } from './types.ts';

/**
 * Favourited exercises.
 *
 * Backed by a tiny subscribable store rather than component state, so starring
 * something in the library updates the star on every other screen immediately —
 * including the count on the build screen.
 */

const KEY = `groundwork.v${SCHEMA_VERSION}.favourites`;

let cache: string[] | null = null;
const listeners = new Set<() => void>();

function read(): string[] {
  if (cache !== null) return cache;
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw === null ? [] : (JSON.parse(raw) as unknown);
    cache = Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    cache = [];
  }
  return cache;
}

function write(ids: string[]): void {
  cache = ids;
  try {
    localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    // Blocked or full. The change still applies for this session.
  }
  for (const listener of listeners) listener();
}

export function loadFavourites(): string[] {
  return read();
}

export function isFavourite(id: string): boolean {
  return read().includes(id);
}

export function toggleFavourite(id: string): boolean {
  const current = read();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  write(next);
  return next.includes(id);
}

export function setFavourites(ids: string[]): void {
  write([...new Set(ids)]);
}

/** Merge in favourites from a backup without dropping local ones. */
export function mergeFavourites(ids: readonly string[]): void {
  write([...new Set([...read(), ...ids])]);
}

/** Test seam — drops the in-memory copy so the next read hits storage. */
export function resetFavouritesCache(): void {
  cache = null;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Reactive list of favourited exercise ids. */
export function useFavourites(): string[] {
  return useSyncExternalStore(subscribe, read, () => []);
}
