import type { JSX } from 'react';

/**
 * The Groundwork Flexibility mark.
 *
 * A G built from two strokes, standing on a ground rule. Inlined rather than
 * loaded through <img> because it takes its colour from `currentColor` — that is
 * what lets one asset work cream-on-navy and navy-on-cream with no second file.
 *
 * Below 24px the two-weight hierarchy is sub-pixel and muddies, so the mono path
 * substitutes automatically. That is a brand rule, not a preference.
 */
export function GroundworkMark({
  size = 40,
  mono = false,
  title = 'Groundwork Flexibility',
  className,
  decorative = false,
}: {
  size?: number;
  mono?: boolean;
  title?: string;
  className?: string;
  decorative?: boolean;
}): JSX.Element {
  const labelling = decorative
    ? { 'aria-hidden': true as const }
    : { role: 'img' as const, 'aria-label': title };

  const common = {
    width: size,
    height: size,
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    ...labelling,
  };

  if (mono || size <= 24) {
    return (
      <svg {...common}>
        <path d="M46 16 H16 V48 M48 48 V30 H34 M4 48 H60" strokeWidth={8} />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M46 16 H16 V48 M48 48 V30 H34" strokeWidth={7} />
      <path d="M4 48 H60" strokeWidth={10} />
    </svg>
  );
}
