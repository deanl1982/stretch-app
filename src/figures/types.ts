/**
 * The posable figure system.
 *
 * Rather than drawing each exercise by hand, a body is defined once as a set of joints
 * and every illustration is a table of coordinates. Adding a new position means adding
 * about sixteen numbers, which is what makes a library of forty-odd of them affordable.
 *
 * Coordinate space is a 200 x 150 viewBox. y increases downward. The ground sits at
 * GROUND_Y, so a standing figure runs from roughly y=13 (top of head) to y=132 (heel).
 */

export type Point = readonly [x: number, y: number];

export const VIEW_WIDTH = 200;
export const VIEW_HEIGHT = 150;
export const GROUND_Y = 132;
export const HEAD_RADIUS = 9;

/**
 * Half the distance between the two shoulders and between the two hips, used only by the
 * front view. The side view collapses both sides onto one line, so it needs neither.
 */
export const SHOULDER_HALF_WIDTH = 9;
export const HIP_HALF_WIDTH = 6;

/**
 * Which way the figure is seen.
 *
 * `side` faces right and is the default: right for anything that happens forwards and
 * backwards (a hinge, a lunge, a squat). It cannot show a side bend, a rotation or a leg
 * swung out sideways, because those move across the line of sight. `front` faces the viewer.
 */
export type View = 'side' | 'front';

/** Limb segments that can be highlighted to show what an exercise targets. */
export type Segment =
  | 'spine'
  | 'neck'
  | 'upperArm'
  | 'forearm'
  | 'thigh'
  | 'shin'
  | 'foot';

export interface PropShape {
  kind: 'block' | 'cushion' | 'chair' | 'wall' | 'floorLine' | 'wedge' | 'roller' | 'step' | 'dowel';
  /** Top-left anchor, or the two ends for line-like props. */
  at: Point;
  to?: Point;
  width?: number;
  height?: number;
}

/**
 * A pose.
 *
 * Shoulder is taken as `neck` and hip as `pelvis`, which keeps the authoring burden to
 * eight points for the near side of the body. The optional `far*` points draw the
 * opposite arm and leg faded behind, for positions where that reads better.
 */
export interface Pose {
  /** Defaults to `side`. In `front`, near limbs are the image-left ones and far limbs the image-right, drawn unfaded. */
  view?: View;
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

  props?: PropShape[];
  /** Segments of the near limbs to draw in the accent colour. */
  highlight?: Segment[];
  /**
   * The same for the far limbs. Front view only: in the side view the far limbs are a faded
   * shadow and never highlighted. Kept separate because an exercise often works one side - the
   * lifted leg in a side leg lift - and lighting up both would say it works both.
   */
  farHighlight?: Segment[];
  /** Set false for supine or seated-on-a-chair poses that should not show a floor. */
  ground?: boolean;
}
