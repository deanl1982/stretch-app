import type { JSX, ReactNode } from 'react';
import { Link } from 'react-router';

/** Shared presentational bits. Kept in one file — there are not enough to warrant more. */

export function Screen({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <main className={`mx-auto w-full max-w-2xl px-4 pb-24 ${className}`}>{children}</main>
  );
}

export function PageTitle({
  children,
  sub,
}: {
  children: ReactNode;
  sub?: string | undefined;
}): JSX.Element {
  return (
    <header className="pt-8 pb-6">
      <h1 className="text-3xl font-semibold tracking-tight text-bone">{children}</h1>
      {sub !== undefined && <p className="mt-2 text-bone-dim">{sub}</p>}
    </header>
  );
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`rounded-2xl border border-edge bg-surface p-5 ${className}`}>
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

const VARIANTS: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-amber text-ink hover:bg-amber-bright',
  secondary: 'bg-surface-2 text-bone border border-edge hover:border-bone-dim',
  ghost: 'text-bone-dim hover:text-bone',
  danger: 'bg-transparent text-rust border border-rust/50 hover:bg-rust/10',
};

export function Button({
  children,
  onClick,
  to,
  variant = 'secondary',
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel,
}: ButtonProps): JSX.Element {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-medium transition-colors disabled:opacity-40 disabled:pointer-events-none ${VARIANTS[variant]} ${className}`;

  if (to !== undefined) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export function Pill({ children }: { children: ReactNode }): JSX.Element {
  return (
    <span className="rounded-full border border-edge bg-surface-2 px-2.5 py-1 text-xs text-bone-dim">
      {children}
    </span>
  );
}

/**
 * The "Is this actually true?" disclosure.
 *
 * Several claims in the source videos do not survive checking. Rather than repeating
 * them or silently dropping them, the corrected version lives here — honest without
 * nagging.
 */
export function EvidenceNote({ note }: { note: string }): JSX.Element {
  return (
    <details className="mt-4 rounded-xl border border-edge bg-surface-2/60 px-4 py-3">
      <summary className="cursor-pointer text-sm text-bone-dim hover:text-bone">
        Is this actually true?
      </summary>
      <p className="mt-2 text-sm leading-relaxed text-bone-dim">{note}</p>
    </details>
  );
}

export function Empty({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="rounded-2xl border border-dashed border-edge px-6 py-12 text-center text-bone-dim">
      {children}
    </div>
  );
}
