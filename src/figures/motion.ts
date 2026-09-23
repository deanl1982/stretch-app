import { pose, type Stance } from './build.ts';
import { nudge } from './nudge.ts';
import type { Point, Pose } from './types.ts';

/**
 * Movement, for the positions a single drawing cannot explain.
 *
 * A figure is already a table of joint angles, so a movement is two or more of those tables with
 * the angles interpolated between them. Angles are what get interpolated, never the joint
 * coordinates: halfway between two coordinate sets, a limb is a straight line between its two
 * positions and so comes out visibly shorter than the limb it is meant to be. Interpolating the
 * bearings swings each segment around its joint instead, which is what a body actually does.
 *
 * Nothing here runs a clock. `poseAt` is a pure function of progress through the cycle, so the same
 * code drives the screen, the tests and a screenshot of any single frame.
 */

/** The angle fields of a stance, which interpolate the short way round a circle. */
const ANGLES = [
  'torso', 'head', 'thigh', 'shin', 'foot', 'upperArm', 'forearm',
  'farThigh', 'farShin', 'farFoot', 'farUpperArm', 'farForearm',
] as const satisfies readonly (keyof Stance)[];

/** Plain numbers, which interpolate normally. `lift` is how a jump leaves the floor. */
const SCALARS = ['lift', 'centreX'] as const satisfies readonly (keyof Stance)[];

export interface Motion {
  /**
   * Two or more keyframes, and the first is the position the figure rests in.
   *
   * Bearings are built into a figure on the spot. Finished figures - which is what `nudge` returns,
   * and the only way to move one of the original hand-drawn poses - are taken apart into bearings
   * and lengths and put back together, so those keep their own proportions.
   */
  frames: [Stance, Stance, ...Stance[]] | [Pose, Pose, ...Pose[]];
  /** One full cycle, in seconds. */
  seconds?: number;
  /**
   * `pingPong` runs the frames forward then back, which is what almost every mobility drill does:
   * out and back to where it started. `cycle` runs them round in a loop and is for travelling,
   * where the last frame leads back into the first.
   */
  loop?: 'pingPong' | 'cycle';
}

export const DEFAULT_CYCLE_SECONDS = 4;

/** Shortest way round: 350 to 10 is twenty degrees forward, not three hundred and forty back. */
export function lerpAngle(from: number, to: number, t: number): number {
  const delta = (((to - from) % 360) + 540) % 360 - 180;
  return (((from + delta * t) % 360) + 360) % 360;
}

/** Slow at both ends, quick through the middle - how a controlled rep actually looks. */
const ease = (t: number): number => t * t * (3 - 2 * t);

function blend(base: Stance, a: Stance, b: Stance, t: number): Stance {
  // Everything that is not a number - props, highlights, the view - comes from the resting frame,
  // so a cycle of three or more keyframes cannot drop them halfway round.
  const out: Stance = { ...base };

  for (const key of ANGLES) {
    const from = a[key];
    const to = b[key];
    if (from === undefined || to === undefined) continue;
    out[key] = lerpAngle(from, to, t);
  }
  for (const key of SCALARS) {
    const from = a[key] ?? 0;
    const to = b[key] ?? 0;
    if (a[key] === undefined && b[key] === undefined) continue;
    out[key] = from + (to - from) * t;
  }
  return out;
}

const isPose = (frame: Stance | Pose): frame is Pose =>
  (frame as Pose).pelvis !== undefined;

/** Turn one finished figure towards another, segment by segment, keeping every length. */
function blendPoses(from: Pose, to: Pose, t: number): Pose {
  const bearing = (a: Point, b: Point): number =>
    ((Math.atan2(b[0] - a[0], b[1] - a[1]) * 180) / Math.PI + 360) % 360;
  const delta = (a: Point, b: Point, c: Point, d: Point): number => {
    const diff = (((bearing(c, d) - bearing(a, b)) % 360) + 540) % 360 - 180;
    return diff * t;
  };
  const pair = (
    rootFrom: Point, rootTo: Point,
    a: Point | undefined, b: Point | undefined,
  ): number => (a === undefined || b === undefined ? 0 : delta(rootFrom, a, rootTo, b));

  return nudge(from, {
    spine: delta(from.pelvis, from.neck, to.pelvis, to.neck),
    head: delta(from.neck, from.head, to.neck, to.head),
    thigh: delta(from.pelvis, from.knee, to.pelvis, to.knee),
    shin: delta(from.knee, from.ankle, to.knee, to.ankle),
    foot: delta(from.ankle, from.toe, to.ankle, to.toe),
    upperArm: delta(from.neck, from.elbow, to.neck, to.elbow),
    forearm: delta(from.elbow, from.hand, to.elbow, to.hand),
    farThigh: pair(from.pelvis, to.pelvis, from.farKnee, to.farKnee),
    farShin: from.farKnee && to.farKnee ? pair(from.farKnee, to.farKnee, from.farAnkle, to.farAnkle) : 0,
    farFoot: from.farAnkle && to.farAnkle ? pair(from.farAnkle, to.farAnkle, from.farToe, to.farToe) : 0,
    farUpperArm: pair(from.neck, to.neck, from.farElbow, to.farElbow),
    farForearm: from.farElbow && to.farElbow ? pair(from.farElbow, to.farElbow, from.farHand, to.farHand) : 0,
  });
}

/**
 * The stance at a point in the cycle. `progress` is 0 to 1 and wraps, so a clock can hand it
 * elapsed time without worrying where in the loop it is.
 */
export function stanceAt(motion: Motion, progress: number): Stance {
  const { loop = 'pingPong' } = motion;
  const frames = motion.frames as [Stance, Stance, ...Stance[]];
  const wrapped = ((progress % 1) + 1) % 1;

  // Where we are along the list of frames, as a fractional index.
  const position =
    loop === 'cycle'
      ? wrapped * frames.length
      : (wrapped < 0.5 ? wrapped * 2 : (1 - wrapped) * 2) * (frames.length - 1);

  const index = Math.floor(position);
  const from = frames[Math.min(index, frames.length - 1)] ?? frames[0];
  const to = frames[(index + 1) % frames.length] ?? frames[0];
  // At an exact keyframe, return it untouched rather than blending it with the next.
  const t = position - index;
  return t === 0 ? { ...frames[0], ...from } : blend(frames[0], from, to, ease(t));
}

/** Where in the frame list a progress value lands, and how far between the two. */
function position(motion: Motion, progress: number): { index: number; t: number } {
  const { loop = 'pingPong' } = motion;
  const count = motion.frames.length;
  const wrapped = ((progress % 1) + 1) % 1;
  const along =
    loop === 'cycle'
      ? wrapped * count
      : (wrapped < 0.5 ? wrapped * 2 : (1 - wrapped) * 2) * (count - 1);
  const index = Math.floor(along);
  return { index, t: along - index };
}

/** The drawable pose at a point in the cycle. */
export function poseAt(motion: Motion, progress: number): Pose {
  const first = motion.frames[0];
  if (!isPose(first)) return pose(stanceAt(motion, progress));

  const frames = motion.frames as Pose[];
  const { index, t } = position(motion, progress);
  const from = frames[Math.min(index, frames.length - 1)] ?? first;
  const to = frames[(index + 1) % frames.length] ?? first;
  return t === 0 ? from : blendPoses(from, to, ease(t));
}

/** The position the figure rests in: what a still frame shows, and what reduced motion gets. */
export function restPose(motion: Motion): Pose {
  const first = motion.frames[0];
  return isPose(first) ? first : pose(first);
}
