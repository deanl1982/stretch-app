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
  /** Segments to draw in the accent colour. */
  highlight?: Segment[];
  /** Set false for supine or seated-on-a-chair poses that should not show a floor. */
  ground?: boolean;
}
