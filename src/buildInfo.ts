/**
 * What this build is.
 *
 * Values are substituted by Vite at build time (see vite.config.ts). They exist
 * so a bug report can be tied to an actual build: with a service worker caching
 * assets, "it's broken" is unanswerable without knowing which version is running
 * and whether it is the current one.
 */

declare const __APP_VERSION__: string;
declare const __GIT_SHA__: string;
declare const __BUILT_AT__: string;

export interface BuildInfo {
  version: string;
  /** Short commit SHA, or 'unknown' when built outside a git checkout. */
  sha: string;
  /** ISO timestamp of the build. */
  builtAt: string;
}

export const BUILD: BuildInfo = {
  version: __APP_VERSION__,
  sha: __GIT_SHA__,
  builtAt: __BUILT_AT__,
};

export const REPO_URL = 'https://github.com/deanl1982/stretch-app';

/** A link to the exact commit, when we know it. */
export function commitUrl(sha: string = BUILD.sha): string | null {
  return sha === 'unknown' ? null : `${REPO_URL}/commit/${sha}`;
}

/** "21 Sep 2026, 10:42" — short, unambiguous, local time. */
export function formatBuiltAt(iso: string = BUILD.builtAt): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return 'unknown';
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/** "3 days ago" — how stale the running build is. */
export function buildAge(iso: string = BUILD.builtAt, now: Date = new Date()): string {
  const then = new Date(iso);
  if (Number.isNaN(then.getTime())) return '';
  const mins = Math.floor((now.getTime() - then.getTime()) / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins} minute${mins === 1 ? '' : 's'} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days === 1 ? '' : 's'} ago`;
}
