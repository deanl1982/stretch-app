/**
 * A tiny seeded PRNG, so a session can be reproduced from its seed alone.
 *
 * That reproducibility is what lets us put the seed in a URL, replay a session from
 * history, and write deterministic tests against a "random" generator.
 */

/** Hash an arbitrary string seed down to a 32-bit integer. */
function hashSeed(seed: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export interface Rng {
  /** Float in [0, 1). */
  next(): number;
  /** Integer in [0, max). */
  nextInt(max: number): number;
}

/** mulberry32 — small, fast, and good enough for shuffling a list of stretches. */
export function createRng(seed: string): Rng {
  let state = hashSeed(seed);

  const next = (): number => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  return {
    next,
    nextInt: (max: number) => Math.floor(next() * max),
  };
}

/** Fisher-Yates, returning a new array and leaving the input untouched. */
export function shuffle<T>(items: readonly T[], rng: Rng): T[] {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = rng.nextInt(i + 1);
    const a = out[i];
    const b = out[j];
    // Guarded for noUncheckedIndexedAccess; both indices are always in range here.
    if (a !== undefined && b !== undefined) {
      out[i] = b;
      out[j] = a;
    }
  }
  return out;
}

/** A short, human-typable seed. Not security-sensitive. */
export function randomSeed(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(36).padStart(2, '0')).join('');
}
