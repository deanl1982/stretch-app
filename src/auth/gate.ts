import { SCHEMA_VERSION } from '../storage/types.ts';

/**
 * A development-time gate on the whole app.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * THIS IS NOT SECURITY. It is a doormat, not a lock.
 *
 * Groundwork Flexibility is a static bundle with no backend, so any check it performs runs
 * on the visitor's own machine. Anyone who opens devtools can set the session
 * flag by hand and walk straight in, and the password hash ships in the
 * JavaScript. It will keep out a casual passer-by who finds the URL. It will not
 * keep out anyone who is actually trying.
 *
 * For real protection, Azure Static Web Apps has built-in authentication on the
 * Free tier: add a role-gated route rule to staticwebapp.config.json and invite
 * yourself. That is enforced at the edge, before any content is served.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * To remove the gate entirely when the site goes public, set
 * VITE_REQUIRE_LOGIN=false at build time — or delete this file, the Login route
 * and the guard in App.tsx.
 */

/** sha256("hobbitfeet") — overridden by VITE_ADMIN_PASSWORD_HASH if provided. */
const DEFAULT_HASH = '844089ff2ae383ed12b36f3d100e127e7f6a3c31f202d8c45b7432efcc633073';

// An unset environment variable can arrive as an empty string rather than undefined
// — notably from GitHub Actions — and `??` would happily accept that, leaving an
// empty expected hash that no password can ever match. Treat blank as absent.
const CONFIGURED_HASH = import.meta.env['VITE_ADMIN_PASSWORD_HASH'];
const EXPECTED_HASH = (
  typeof CONFIGURED_HASH === 'string' && CONFIGURED_HASH.trim() !== ''
    ? CONFIGURED_HASH.trim()
    : DEFAULT_HASH
).toLowerCase();

/** The gate is on unless explicitly switched off at build time. */
export const GATE_ENABLED = import.meta.env['VITE_REQUIRE_LOGIN'] !== 'false';

const ACCOUNT_KEY = `groundwork.v${SCHEMA_VERSION}.admin`;
const SESSION_KEY = `groundwork.v${SCHEMA_VERSION}.session`;

export interface AdminAccount {
  username: string;
  createdAt: string;
}

async function sha256(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export function loadAccount(): AdminAccount | null {
  try {
    const raw = localStorage.getItem(ACCOUNT_KEY);
    if (raw === null) return null;
    const parsed = JSON.parse(raw) as AdminAccount;
    return typeof parsed?.username === 'string' ? parsed : null;
  } catch {
    return null;
  }
}

/** Signed-in state lives in sessionStorage, so closing the tab signs you out. */
export function isSignedIn(): boolean {
  if (!GATE_ENABLED) return true;
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'yes';
  } catch {
    return false;
  }
}

function startSession(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, 'yes');
  } catch {
    // Private mode. The gate simply will not persist across a reload.
  }
}

export function signOut(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Nothing to do.
  }
}

export async function checkPassword(password: string): Promise<boolean> {
  return (await sha256(password)) === EXPECTED_HASH;
}

/** First run: name the admin account and set the session going. */
export async function createAccount(username: string, password: string): Promise<boolean> {
  if (!(await checkPassword(password))) return false;
  const account: AdminAccount = {
    username: username.trim() === '' ? 'admin' : username.trim(),
    createdAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
  } catch {
    // The account is cosmetic; the password check is what matters.
  }
  startSession();
  return true;
}

export async function signIn(username: string, password: string): Promise<boolean> {
  const account = loadAccount();
  if (account !== null && username.trim().toLowerCase() !== account.username.toLowerCase()) {
    return false;
  }
  if (!(await checkPassword(password))) return false;
  startSession();
  return true;
}
