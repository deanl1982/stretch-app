import {
  HEAD_RADIUS,
  HIP_HALF_WIDTH,
  SHOULDER_HALF_WIDTH,
  type Point,
  type Pose,
  type PropShape,
  type Segment,
  type View,
} from './types.ts';

/**
 * Build a pose from joint angles rather than typed-out coordinates.
 *
 * The hand-written poses in poses.ts are eight or so raw points each. That is fine for
 * thirty of them and error-prone for a hundred, and the research behind the newer entries
 * describes positions in exactly the terms this takes: a thigh at 120 degrees, a torso
 * folded forward. Segment lengths are fixed, so a figure cannot come out with a stretched
 * limb, and the figure is grounded and centred automatically so an author only decides the
 * shape of the body.
 *
 * Angles are compass bearings of each segment, measured the way the figure faces:
 *
 *        180 (up)
 *   270 (behind) + 90 (in front, the way the figure faces)
 *         0 (down)
 *
 * A standing figure is torso 180, thigh 0, shin 0, foot 90. Lying on the back with the head to
 * the left is torso 270. A leg swung straight out in front of a sitting figure is thigh 90.
 *
 * In `front` view the same compass is read across the image instead: 90 is towards the
 * right-hand edge, 270 towards the left. The near limbs are the image-left ones, hung from a
 * left shoulder and hip, and the far limbs the image-right ones. A torso of 195 leans the
 * trunk to the left of the image, 165 to the right.
 */

export type Bearing = number;

export interface Joints {
  head: Point;
  neck: Point;
  pelvis: Point;
  elbow: Point;
  hand: Point;
  knee: Point;
  ankle: Point;
  toe: Point;
  farElbow?: Point;
  farHand?: Point;
  farKnee?: Point;
  farAnkle?: Point;
  farToe?: Point;
}

export interface Stance {
  /** Defaults to `side`. */
  view?: View;
  /** Pelvis to neck. */
  torso: Bearing;
  /** Neck to head. Continues the torso line when omitted. */
  head?: Bearing;

  /** Near leg: pelvis to knee, knee to ankle, ankle to toe (flat foot forward when omitted). */
  thigh: Bearing;
  shin: Bearing;
  foot?: Bearing;
  /** Near arm: neck to elbow, elbow to hand. */
  upperArm: Bearing;
  forearm: Bearing;

  /** The far leg and arm, drawn faded behind. Give the pair together. */
  farThigh?: Bearing;
  farShin?: Bearing;
  farFoot?: Bearing;
  farUpperArm?: Bearing;
  farForearm?: Bearing;

  /** Props, given the joints once the figure has been grounded and centred. */
  props?: (joints: Joints) => PropShape[];
  highlight?: Segment[];
  /** Front view only: the far limbs' highlight. See `Pose.farHighlight`. */
  farHighlight?: Segment[];
  /**
   * Force the lying rule on or off. By default a torso within about 55 degrees of horizontal counts
   * as lying, which is right for a supine or prone figure but not for one propped steeply on their
   * hands, as in a prone press-up, whose whole front still rests on the floor.
   */
  lying?: boolean;
  /** False for poses that should not draw a floor line. */
  ground?: boolean;
  /** Raise the whole figure, e.g. sitting up on a block. */
  lift?: number;
  /** Centre the figure here instead of at the middle of the view. */
  centreX?: number;
}

// Proportions match the hand-drawn poses, so old and new figures sit side by side.
export const TORSO = 42;
export const HEAD_OFFSET = 18;
export const THIGH = 26;
export const SHIN = 24;
export const FOOT = 12;
export const UPPER_ARM = 20;
export const FOREARM = 18;

/**
 * Where the lowest limb rests, and where a trunk resting on the floor sits. A sitting or kneeling
 * trunk matches the older hand-drawn poses. A trunk lying flat sits lower, level with the feet,
 * because a person lying on their back with their feet flat has back and heels on the same floor;
 * the sitting figure's higher rest would leave the feet floating.
 */
const LIMB_FLOOR = 130;
const TRUNK_FLOOR = 121;
const LYING_TRUNK_FLOOR = 128;
const HEAD_FLOOR = 134;
const LYING_HEAD_FLOOR = 139;

const step = (from: Point, bearing: Bearing, length: number): Point => {
  const radians = (bearing * Math.PI) / 180;
  return [from[0] + Math.sin(radians) * length, from[1] + Math.cos(radians) * length];
};

const round = (p: Point): Point => [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];

export function pose(stance: Stance): Pose {
  const front = stance.view === 'front';
  const origin: Point = [0, 0];
  // Where each limb hangs from. One point in the side view, a left and a right in the front.
  const hipNear: Point = front ? [-HIP_HALF_WIDTH, 0] : origin;
  const hipFar: Point = front ? [HIP_HALF_WIDTH, 0] : origin;
  const neck = step(origin, stance.torso, TORSO);
  const shoulderNear: Point = front ? [neck[0] - SHOULDER_HALF_WIDTH, neck[1]] : neck;
  const shoulderFar: Point = front ? [neck[0] + SHOULDER_HALF_WIDTH, neck[1]] : neck;

  const raw: Joints = {
    pelvis: origin,
    neck,
    head: step(neck, stance.head ?? stance.torso, HEAD_OFFSET),
    elbow: step(shoulderNear, stance.upperArm, UPPER_ARM),
    hand: [0, 0],
    knee: step(hipNear, stance.thigh, THIGH),
    ankle: [0, 0],
    toe: [0, 0],
  };
  raw.hand = step(raw.elbow, stance.forearm, FOREARM);
  raw.ankle = step(raw.knee, stance.shin, SHIN);
  raw.toe = step(raw.ankle, stance.foot ?? 90, FOOT);

  if (stance.farThigh !== undefined && stance.farShin !== undefined) {
    raw.farKnee = step(hipFar, stance.farThigh, THIGH);
    raw.farAnkle = step(raw.farKnee, stance.farShin, SHIN);
    raw.farToe = step(raw.farAnkle, stance.farFoot ?? 90, FOOT);
  }
  if (stance.farUpperArm !== undefined && stance.farForearm !== undefined) {
    raw.farElbow = step(shoulderFar, stance.farUpperArm, UPPER_ARM);
    raw.farHand = step(raw.farElbow, stance.farForearm, FOREARM);
  }

  const limbs = [raw.knee, raw.ankle, raw.toe, raw.elbow, raw.hand]
    .concat(
      [raw.farKnee, raw.farAnkle, raw.farToe, raw.farElbow, raw.farHand].filter(
        (p): p is Point => p !== undefined,
      ),
    );
  const lowestLimb = Math.max(...limbs.map((p) => p[1]));
  const lowestTrunk = Math.max(raw.pelvis[1], raw.neck[1]);
  // Lying, prone, or held in a plank or bridge: the trunk is close to horizontal.
  const lying = stance.lying ?? Math.abs(Math.sin((stance.torso * Math.PI) / 180)) > 0.8;

  // Rest on whichever of limb, trunk or head reaches the floor first, then apply any lift.
  const dy =
    Math.min(
      LIMB_FLOOR - lowestLimb,
      (lying ? LYING_TRUNK_FLOOR : TRUNK_FLOOR) - lowestTrunk,
      (lying ? LYING_HEAD_FLOOR : HEAD_FLOOR) - HEAD_RADIUS - raw.head[1],
    ) - (stance.lift ?? 0);

  const xs = [raw.head, raw.neck, raw.pelvis, ...limbs].map((p) => p[0]);
  const dx = (stance.centreX ?? 100) - (Math.min(...xs) + Math.max(...xs)) / 2;

  const place = (p: Point): Point => round([p[0] + dx, p[1] + dy]);
  const placed: Joints = {
    head: place(raw.head),
    neck: place(raw.neck),
    pelvis: place(raw.pelvis),
    elbow: place(raw.elbow),
    hand: place(raw.hand),
    knee: place(raw.knee),
    ankle: place(raw.ankle),
    toe: place(raw.toe),
    ...(raw.farKnee && raw.farAnkle && raw.farToe
      ? { farKnee: place(raw.farKnee), farAnkle: place(raw.farAnkle), farToe: place(raw.farToe) }
      : {}),
    ...(raw.farElbow && raw.farHand
      ? { farElbow: place(raw.farElbow), farHand: place(raw.farHand) }
      : {}),
  };

  return {
    ...placed,
    ...(stance.props ? { props: stance.props(placed) } : {}),
    ...(front ? { view: 'front' as const } : {}),
    ...(stance.highlight ? { highlight: stance.highlight } : {}),
    ...(stance.farHighlight ? { farHighlight: stance.farHighlight } : {}),
    ...(stance.ground === false ? { ground: false } : {}),
  };
}
