import type { JSX } from 'react';
import { Figure } from './Figure.tsx';
import { DEFAULT_CYCLE_SECONDS, poseAt, restPose, type Motion } from './motion.ts';
import { useClock, usePrefersReducedMotion } from './useMotion.ts';

/**
 * A moving figure, for positions a single drawing cannot explain.
 *
 * It falls back to the still figure whenever movement is unwanted or pointless: when the person has
 * asked their system to reduce motion, and when the caller has paused it.
 */
export function AnimatedFigure({
  motion,
  label,
  className,
  paused = false,
}: {
  motion: Motion;
  /** Accessible description. Empty where the figure only repeats adjacent text. */
  label: string;
  className?: string;
  paused?: boolean;
}): JSX.Element {
  const reduced = usePrefersReducedMotion();
  const still = paused || reduced;
  const elapsed = useClock(!still);

  const seconds = motion.seconds ?? DEFAULT_CYCLE_SECONDS;
  const pose = still ? restPose(motion) : poseAt(motion, elapsed / (seconds * 1000));

  return <Figure pose={pose} label={label} {...(className === undefined ? {} : { className })} />;
}
