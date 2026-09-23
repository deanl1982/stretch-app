import { HEAD_RADIUS, type Point, type Pose } from './types.ts';

/**
 * Moving a figure that was drawn as coordinates rather than joint angles.
 *
 * The first figures in this app were authored as raw joint positions, and the later ones as tables
 * of bearings. Only the second kind can be swung between two positions directly. This takes any
 * figure, works out the bearing and length of every segment, turns some of those bearings, and
 * rebuilds it - so a hand-drawn figure can move without being redrawn, and keeps its own
 * proportions rather than being forced into the standard ones.
 *
 * Lengths are measured from the figure itself and never changed, so a limb cannot stretch or shrink
 * however far it swings.
 */

/** Degrees to turn each segment by. The convention matches build.ts: 0 down, 90 forward, 180 up. */
export interface Turn {
  spine?: number;
  head?: number;
  thigh?: number;
  shin?: number;
  foot?: number;
  upperArm?: number;
  forearm?: number;
  farThigh?: number;
  farShin?: number;
  farFoot?: number;
  farUpperArm?: number;
  farForearm?: number;
}

const bearing = (from: Point, to: Point): number => {
  const degrees = (Math.atan2(to[0] - from[0], to[1] - from[1]) * 180) / Math.PI;
  return (degrees + 360) % 360;
};
const length = (from: Point, to: Point): number => Math.hypot(to[0] - from[0], to[1] - from[1]);
const step = (from: Point, deg: number, len: number): Point => {
  const rad = (deg * Math.PI) / 180;
  return [from[0] + Math.sin(rad) * len, from[1] + Math.cos(rad) * len];
};
const round = (p: Point): Point => [Math.round(p[0] * 100) / 100, Math.round(p[1] * 100) / 100];

/** Every joint a figure can have, for working out where the floor is. */
function allPoints(pose: Pose): Point[] {
  return [
    pose.pelvis, pose.neck, pose.head, pose.elbow, pose.hand, pose.knee, pose.ankle, pose.toe,
    pose.farElbow, pose.farHand, pose.farKnee, pose.farAnkle, pose.farToe,
  ].filter((p): p is Point => p !== undefined);
}

const lowest = (pose: Pose): number =>
  Math.max(...allPoints(pose).map((p) => p[1]), pose.head[1] + HEAD_RADIUS);

/**
 * The same figure with some of its segments turned.
 *
 * The result is dropped back onto the floor the original stood on, so a figure that bends its
 * knees sinks rather than hovering, and one that straightens them does not push its feet through
 * the ground.
 */
export function nudge(base: Pose, turn: Turn): Pose {
  const pelvis = base.pelvis;
  const neck = step(pelvis, bearing(pelvis, base.neck) + (turn.spine ?? 0), length(pelvis, base.neck));

  /**
   * Rebuild a limb from a root that may itself have moved.
   *
   * Every bearing and length is measured on the original figure and applied from the new root. The
   * arms and head hang off the neck, so when the spine turns they travel with it and keep their
   * own angles - measuring from the new neck to the old elbow instead would silently change both
   * the angle and the length of the arm.
   */
  const limb = (
    was: Point,
    now: Point,
    joints: readonly [Point, Point, Point | undefined],
    turns: readonly [number, number, number],
  ): [Point, Point, Point | undefined] => {
    const [a, b, c] = joints;
    const first = step(now, bearing(was, a) + turns[0], length(was, a));
    const second = step(first, bearing(a, b) + turns[1], length(a, b));
    const third = c === undefined ? undefined : step(second, bearing(b, c) + turns[2], length(b, c));
    return [first, second, third];
  };

  const [knee, ankle, toe] = limb(
    pelvis, pelvis,
    [base.knee, base.ankle, base.toe],
    [turn.thigh ?? 0, turn.shin ?? 0, turn.foot ?? 0],
  );
  const [elbow, hand] = limb(
    base.neck, neck,
    [base.elbow, base.hand, undefined],
    [turn.upperArm ?? 0, turn.forearm ?? 0, 0],
  );

  const moved: Pose = {
    ...base,
    pelvis,
    neck,
    head: step(neck, bearing(base.neck, base.head) + (turn.head ?? turn.spine ?? 0), length(base.neck, base.head)),
    knee,
    ankle,
    toe: toe ?? base.toe,
    elbow,
    hand,
  };

  if (base.farKnee !== undefined && base.farAnkle !== undefined) {
    const [farKnee, farAnkle, farToe] = limb(
      pelvis, pelvis,
      [base.farKnee, base.farAnkle, base.farToe],
      [turn.farThigh ?? 0, turn.farShin ?? 0, turn.farFoot ?? 0],
    );
    moved.farKnee = farKnee;
    moved.farAnkle = farAnkle;
    if (farToe !== undefined) moved.farToe = farToe;
  }
  if (base.farElbow !== undefined && base.farHand !== undefined) {
    const [farElbow, farHand] = limb(
      base.neck, neck,
      [base.farElbow, base.farHand, undefined],
      [turn.farUpperArm ?? 0, turn.farForearm ?? 0, 0],
    );
    moved.farElbow = farElbow;
    moved.farHand = farHand;
  }

  // Put it back on the floor it started on.
  const drop = lowest(base) - lowest(moved);
  const shift = (p: Point): Point => round([p[0], p[1] + drop]);
  const grounded: Pose = {
    ...moved,
    pelvis: shift(moved.pelvis), neck: shift(moved.neck), head: shift(moved.head),
    knee: shift(moved.knee), ankle: shift(moved.ankle), toe: shift(moved.toe),
    elbow: shift(moved.elbow), hand: shift(moved.hand),
  };
  if (moved.farKnee) grounded.farKnee = shift(moved.farKnee);
  if (moved.farAnkle) grounded.farAnkle = shift(moved.farAnkle);
  if (moved.farToe) grounded.farToe = shift(moved.farToe);
  if (moved.farElbow) grounded.farElbow = shift(moved.farElbow);
  if (moved.farHand) grounded.farHand = shift(moved.farHand);
  return grounded;
}
