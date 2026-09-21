import { pose } from '../build.ts';
import type { Pose } from '../types.ts';

/**
 * Lower-back and trunk figures. Lying figures have the head to the left and face right;
 * bearings are documented in build.ts.
 */
export const BACK_POSES: Record<string, Pose> = {
  // Head and shoulder tips just off the floor, one knee bent, hands under the lumbar curve.
  'mcgill-curl-up': pose({
    torso: 262, head: 250,
    thigh: 135, shin: 45, farThigh: 90, farShin: 90,
    upperArm: 95, forearm: 90,
    highlight: ['spine'],
  }),

  // Tabletop legs, one arm reaching up, the other arm and opposite leg lowering away.
  'dead-bug': pose({
    torso: 270,
    thigh: 180, shin: 90, farThigh: 100, farShin: 100,
    upperArm: 235, forearm: 265, farUpperArm: 180, farForearm: 180,
    highlight: ['spine'],
  }),

  // Hips up so shoulders, hips and knees make one line; arms flat by the sides.
  'glute-bridge': pose({
    torso: 288, head: 270,
    thigh: 108, shin: 29,
    upperArm: 90, forearm: 90,
    highlight: ['thigh'],
  }),

  // The bridge held, one foot planted and the other knee lifted with the shin hanging.
  'bridge-march': pose({
    torso: 288, head: 270,
    thigh: 108, shin: 29, farThigh: 170, farShin: 10,
    upperArm: 90, forearm: 90,
    highlight: ['thigh'],
  }),

  // Front view. Hands pressed out from the chest against a band anchored to a post.
  'pallof-press': pose({
    view: 'front',
    torso: 180,
    thigh: 355, shin: 0, farThigh: 5, farShin: 0,
    upperArm: 345, forearm: 135, farUpperArm: 15, farForearm: 225,
    props: (j) => [
      { kind: 'floorLine', at: [j.hand[0], j.hand[1]], to: [176, j.hand[1]] },
      { kind: 'wall', at: [176, 14], to: [176, 140] },
    ],
    highlight: ['spine'],
  }),

  // One straight line from head to toes, forearms flat, elbows under the shoulders.
  'forearm-plank': pose({
    torso: 102, head: 100,
    thigh: 283, shin: 283, foot: 320,
    upperArm: 0, forearm: 90,
    highlight: ['spine'],
  }),

  // Hands and toes down, knees bent and hovering, back flat as a table.
  'bear-hold': pose({
    torso: 90, head: 85,
    thigh: 0, shin: 270, foot: 0,
    upperArm: 0, forearm: 0,
    highlight: ['spine'],
  }),

  // Face down, chest pressed up on the hands, hips and legs relaxed on the floor.
  'prone-press-up': pose({
    lying: true,
    torso: 140, head: 130,
    thigh: 270, shin: 270, foot: 270,
    upperArm: 0, forearm: 47,
    highlight: ['spine'],
  }),


  // Standing tall, hands on the back of the pelvis, leaning gently back.
  'standing-back-extension': pose({
    torso: 190, head: 200,
    thigh: 0, shin: 0,
    upperArm: 320, forearm: 20,
    highlight: ['spine'],
  }),

  // One knee hugged to the chest with both hands, the other foot flat on the floor.
  'knee-to-chest': pose({
    torso: 270,
    thigh: 215, shin: 100, farThigh: 135, farShin: 45,
    upperArm: 130, forearm: 125,
    highlight: ['thigh'],
  }),

  // Seen from above, since the point is the sideways roll: shoulders flat, both knees rolled to one side.
  'lower-trunk-rotation': pose({
    lying: true, ground: false,
    torso: 270, head: 270,
    // Knees roll towards the bottom of the image while the feet stay near the midline.
    thigh: 60, shin: 100, farThigh: 55, farShin: 95,
    upperArm: 180, forearm: 180, farUpperArm: 0, farForearm: 0,
    highlight: ['spine'],
  }),

  // Knees bent, feet flat, the low back gently pressed into the floor.
  'pelvic-tilt': pose({
    torso: 270,
    thigh: 135, shin: 45, farThigh: 135, farShin: 45,
    upperArm: 90, forearm: 90,
    highlight: ['spine'],
  }),

  // On all fours rocked back, one hand down and the other behind the head with the elbow rotating up.
  'quadruped-thoracic-rotation': pose({
    torso: 95,
    thigh: 25, shin: 275, foot: 270,
    upperArm: 0, forearm: 0,
    farUpperArm: 170, farForearm: 250,
    highlight: ['spine'],
  }),
};
