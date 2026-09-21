import { useState, type FormEvent, type JSX } from 'react';
import { createAccount, loadAccount, signIn } from '../auth/gate.ts';
import { Button, Card } from '../ui.tsx';

/**
 * The development gate. Shown instead of the app until the admin password is
 * entered. See src/auth/gate.ts for why this is a speed bump rather than security.
 */
export function Login({ onSuccess }: { onSuccess: () => void }): JSX.Element {
  const existing = loadAccount();
  const isSetup = existing === null;

  const [username, setUsername] = useState(existing?.username ?? '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setBusy(true);
    setError(null);

    const ok = isSetup
      ? await createAccount(username, password)
      : await signIn(username, password);

    setBusy(false);
    if (ok) {
      onSuccess();
    } else {
      setPassword('');
      setError(isSetup ? 'That is not the admin password.' : 'Those details are not right.');
    }
  };

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-4 py-10">
      <header className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-bone-dim">Groundwork Flexibility</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          {isSetup ? 'Set up the admin account' : 'Sign in'}
        </h1>
        <p className="mt-2 text-bone-dim">
          {isSetup
            ? 'This site is not public yet. Pick a username and enter the admin password.'
            : 'This site is not public yet.'}
        </p>
      </header>

      <Card>
        <form onSubmit={(event) => void submit(event)}>
          <label className="block">
            <span className="text-sm text-bone-dim">Username</span>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
              className="mt-2 min-h-11 w-full rounded-xl border border-control bg-surface-2 px-4 py-3 text-bone placeholder:text-bone-dim focus:border-accent"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm text-bone-dim">Password</span>
            <input
              type="password"
              autoComplete={isSetup ? 'new-password' : 'current-password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoFocus
              className="mt-2 min-h-11 w-full rounded-xl border border-control bg-surface-2 px-4 py-3 text-bone focus:border-accent"
            />
          </label>

          {error !== null && (
            <p role="alert" className="mt-4 text-sm text-negative">
              {error}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            disabled={busy || password === ''}
            className="mt-6 w-full py-4 text-lg"
          >
            {busy ? 'Checking…' : isSetup ? 'Create account' : 'Sign in'}
          </Button>
        </form>
      </Card>

      <p className="mt-6 text-center text-xs leading-relaxed text-bone-dim">
        A development gate, not security — it runs in your browser, so treat it as a
        closed door rather than a locked one.
      </p>
    </main>
  );
}
