import { useEffect, useState, useSyncExternalStore } from 'react';

/**
 * One clock for every figure on the page.
 *
 * A screen can hold dozens of figures. Giving each its own requestAnimationFrame loop means dozens
 * of loops doing the same arithmetic; this is a single loop that every figure reads from, so the
 * cost of animating forty of them is the cost of animating one, plus their renders.
 *
 * It ticks at 24fps rather than the display's rate. These are stick figures with five or six moving
 * segments - a higher rate buys nothing visible and costs a React render per figure per frame.
 */

const FPS = 24;
const listeners = new Set<() => void>();
let handle = 0;
let elapsed = 0;
let last = 0;
let lastTick = 0;

function loop(timestamp: number): void {
  handle = requestAnimationFrame(loop);
  if (last === 0) last = timestamp;

  // Advance by real time, so a dropped frame does not slow the movement down.
  elapsed += timestamp - last;
  last = timestamp;

  if (timestamp - lastTick < 1000 / FPS) return;
  lastTick = timestamp;
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  if (listeners.size === 1) {
    last = 0;
    handle = requestAnimationFrame(loop);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      cancelAnimationFrame(handle);
      handle = 0;
    }
  };
}

const elapsedMs = (): number => elapsed;
/** The server and the first client render agree on a still figure. */
const atRest = (): number => 0;

/** Milliseconds since the first figure on the page started moving. */
export function useClock(running: boolean): number {
  const ticking = useSyncExternalStore(
    running ? subscribe : () => () => undefined,
    running ? elapsedMs : atRest,
    atRest,
  );
  return ticking;
}

/**
 * Whether this person has asked their system to reduce motion.
 *
 * Respected everywhere, no setting needed: if someone has said they do not want movement, the
 * figures are still drawings.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent): void => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
