import { useEffect, useRef } from 'react';

/**
 * Keeps the screen awake during a session.
 *
 * Without this the phone sleeps halfway through a 90-second hold, which is the single
 * most annoying thing a floor-based app can do. The API is not universally supported
 * and the lock is dropped whenever the tab is backgrounded, so we re-acquire on
 * visibility change.
 */
export function useWakeLock(active: boolean): void {
  const lockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!active) return;
    if (!('wakeLock' in navigator)) return;

    let cancelled = false;

    const acquire = async (): Promise<void> => {
      try {
        const lock = await navigator.wakeLock.request('screen');
        if (cancelled) {
          void lock.release();
          return;
        }
        lockRef.current = lock;
      } catch {
        // Denied, or the document was not visible. Not worth surfacing.
      }
    };

    const onVisibility = (): void => {
      if (document.visibilityState === 'visible' && lockRef.current === null) {
        void acquire();
      }
    };

    void acquire();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVisibility);
      const lock = lockRef.current;
      lockRef.current = null;
      if (lock !== null) void lock.release().catch(() => undefined);
    };
  }, [active]);
}
