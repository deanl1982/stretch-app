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
 * Proposal page: the still figures beside moving ones, for a decision about whether to move the
 * whole library over.
 *
 * Not linked from anywhere in the app. It exists to be looked at and judged.
 */
export function Motion(): JSX.Element {
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const ids = Object.keys(MOTIONS);

  return (
    <Screen>
      <PageTitle sub={`${ids.length} positions, each shown as it is now and as it could be.`}>
        Still or moving
      </PageTitle>

      <Card className="mb-5">
        <p className="text-sm leading-relaxed text-bone-dim">
          The feedback was that some positions are hard to read as a single drawing. A figure is
          already a table of joint angles, so it can be swung between two or more of them. Nothing
          is redrawn: the left-hand figure is exactly what the app shows today, and thirteen of
          these fourteen movements start from that exact position, so a figure that stops moving is
          the drawing you already know. Cat-cow is the exception — it is one of the original
          hand-drawn figures and had to be rebuilt to move, so its two sides differ slightly even
          when paused.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-bone-dim">
          Cost, measured on this page with the processor slowed to about phone speed: fourteen
          moving figures use 2% of the main thread. Animating all 144 at once would be wasteful, so
          the proposal is to move only where it teaches something — the position's own page and the
          player — and leave the list thumbnails still.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button variant="primary" onClick={() => setPaused((value) => !value)}>
            {paused ? 'Play all' : 'Pause all'}
          </Button>
          <Button to="/figures" variant="ghost">
            All still figures
          </Button>
        </div>
        <p role="status" aria-live="polite" className="mt-3 text-sm text-bone-dim">
          {reduced
            ? 'Your system asks for reduced motion, so these are held still. That is what anyone with that setting would see.'
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
          The spine is drawn as one straight line, so cat-cow cannot show the back rounding and
          arching. What moves there is the head and the tilt of the trunk, which reads as the right
          movement without being the whole of it. Giving the spine a real curve is a separate job,
          and worth doing if this is the direction you want.
        </p>
      </Card>
    </Screen>
  );
}
