import { useState, type JSX } from 'react';
import { Link } from 'react-router';
import { getExercise } from '../content/exercises.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { AnimatedFigure } from '../figures/AnimatedFigure.tsx';
import { MOTIONS } from '../figures/motions/index.ts';
import { usePrefersReducedMotion } from '../figures/useMotion.ts';
import { Button, Card, PageTitle, Screen } from '../ui.tsx';

/**
 * Every movement in the library, beside the drawing it was built from.
 *
 * Not linked from the app's navigation: it is a check sheet, for spotting a movement that turns
 * the wrong way among a hundred and forty that do not.
 */
export function Motion(): JSX.Element {
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const ids = Object.keys(MOTIONS);

  return (
    <Screen>
      <PageTitle sub={`All ${ids.length} positions, each as it is drawn and as it moves.`}>
        Still or moving
      </PageTitle>

      <Card className="mb-5">
        <p className="text-sm leading-relaxed text-bone-dim">
          Moving figures are live on each position's own page and in the player. List thumbnails
          stay still, because a wall of moving figures is noise rather than help. This page is the
          check: every movement beside the drawing it came from.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-bone-dim">
          Rep work shows the whole rep. A hold only settles a few degrees, because a hold is a hold
          and animating a repetition nobody performs would be a lie about the exercise. Nothing was
          redrawn: each movement turns the existing figure at its joints, so every limb keeps its
          own length and its own proportions.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button variant="primary" onClick={() => setPaused((value) => !value)}>
            {paused ? 'Play all' : 'Pause all'}
          </Button>
          <Button to="/settings" variant="ghost">
            Turn them off
          </Button>
        </div>
        <p role="status" aria-live="polite" className="mt-3 text-sm text-bone-dim">
          {reduced
            ? 'Your system asks for reduced motion, so these are held still. That is what anyone with that setting sees, whatever the app setting says.'
            : paused
              ? 'Held still.'
              : 'Moving.'}
        </p>
      </Card>

      <ul className="space-y-3">
        {ids.map((id) => {
          const exercise = getExercise(id);
          const still = getPose(id);
          const motion = MOTIONS[id];
          if (exercise === undefined || still === undefined || motion === undefined) return null;

          return (
            <li key={id}>
              <Card className="py-4">
                <div className="mb-3 flex items-baseline justify-between gap-3">
                  <h2 className="font-medium leading-tight">{exercise.name}</h2>
                  <Link
                    to={`/library/${id}`}
                    className="shrink-0 text-sm text-bone-dim underline underline-offset-4 hover:text-bone"
                  >
                    Details
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <figure className="m-0">
                    <div className="rounded-xl border border-edge bg-surface-2/40">
                      <Figure pose={still} label="" className="w-full text-label" />
                    </div>
                    <figcaption className="label mt-2 text-center">Now</figcaption>
                  </figure>
                  <figure className="m-0">
                    <div className="rounded-xl border border-accent/40 bg-surface-2/40">
                      <AnimatedFigure
                        motion={motion}
                        label={`${exercise.name}, moving`}
                        className="w-full text-label"
                        paused={paused}
                      />
                    </div>
                    <figcaption className="label mt-2 text-center text-accent">Moving</figcaption>
                  </figure>
                </div>
                <p className="mt-3 text-sm text-bone-dim">{exercise.summary}</p>
              </Card>
            </li>
          );
        })}
      </ul>

      <Card className="mt-6">
        <h2 className="label mb-2">What this cannot do</h2>
        <p className="text-sm leading-relaxed text-bone-dim">
          The spine is one straight line, so cat-cow and the roll-down cannot show the back rounding
          and arching section by section. What moves there is the head and the tilt of the trunk,
          which reads as the right movement without being the whole of it. Giving the spine a real
          curve is a separate job.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-bone-dim">
          Travelling positions - the crawls and walks - step on the spot rather than crossing the
          frame, so they stay the same size as everything else.
        </p>
      </Card>
    </Screen>
  );
}
