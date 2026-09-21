import type { JSX, ReactNode } from 'react';
import { Link } from 'react-router';
import { toggleFavourite, useFavourites } from './storage/favourites.ts';

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
  primary: 'bg-accent text-ink hover:bg-accent-bright',
  secondary: 'bg-surface-2 text-bone border border-control hover:border-bone',
  ghost: 'text-bone-dim hover:text-bone',
  danger: 'bg-transparent text-negative border border-negative/50 hover:bg-negative/10',
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
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-medium transition-colors disabled:opacity-40 disabled:pointer-events-none ${VARIANTS[variant]} ${className}`;

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

/**
 * Star toggle for favouriting an exercise.
 *
 * Stops propagation because these sit inside link cards in the library — tapping the
 * star should favourite, not navigate.
 */
export function FavouriteButton({
  id,
  className = '',
}: {
  id: string;
  className?: string;
}): JSX.Element {
  const favourites = useFavourites();
  const on = favourites.includes(id);

  return (
    <button
      type="button"
      aria-pressed={on}
      aria-label={on ? 'Remove from favourites' : 'Add to favourites'}
      className={`-m-1 flex size-11 shrink-0 items-center justify-center rounded-full transition-colors ${
        on ? 'text-accent' : 'text-bone-dim hover:text-bone'
      } ${className}`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavourite(id);
      }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 3.6l2.6 5.3 5.8.85-4.2 4.1 1 5.75L12 16.9l-5.2 2.7 1-5.75-4.2-4.1 5.8-.85z"
          fill={on ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
