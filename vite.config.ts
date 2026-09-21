import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Build provenance, stamped in at build time.
 *
 * When someone reports odd behaviour, the first question is which build they
 * were running - and with a service worker in play, whether it was even the
 * current one. Settings shows these so that question has an answer.
 */
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8')) as {
  version: string;
};

function gitSha(): string {
  // On a GitHub runner the checkout is present, but prefer the explicit env var.
  const fromCi = process.env['GITHUB_SHA'];
  if (fromCi !== undefined && fromCi !== '') return fromCi.slice(0, 7);
  try {
    return execSync('git rev-parse --short=7 HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    // A tarball with no git history still has to build.
    return 'unknown';
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __GIT_SHA__: JSON.stringify(gitSha()),
    __BUILT_AT__: JSON.stringify(new Date().toISOString()),
  },
  build: {
    // Hashed asset filenames let staticwebapp.config.json cache /assets/* immutably.
    assetsDir: 'assets',
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
