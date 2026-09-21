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

  // Sat tall on a chair, arms crossed over the chest, turning the upper body while the hips stay square.
  'seated-thoracic-rotation': pose({
    torso: 180,
    thigh: 85, shin: 5, farThigh: 85, farShin: 5,
    upperArm: 40, forearm: 200, farUpperArm: 50, farForearm: 205,
    props: (j) => [{ kind: 'chair', at: [j.pelvis[0] - 22, j.pelvis[1] + 4], width: 40, height: 34 }],
    highlight: ['spine'],
  }),

  // Kneeling at a seat with the elbows on it, hips over the heels, chest sinking between the arms.
  'bench-thoracic-extension': pose({
    torso: 95, head: 100,
    thigh: 55, shin: 270, foot: 270,
    upperArm: 100, forearm: 90,
    props: (j) => [{ kind: 'block', at: [j.elbow[0] - 6, j.elbow[1] + 3], width: 32, height: Math.max(8, 131 - j.elbow[1] - 3) }],
    highlight: ['spine'],
  }),

  // Back, head and arms against a wall; the arms sliding up it from goalposts to overhead.
  'wall-angels': pose({
    torso: 180,
    thigh: 352, shin: 8,
    // The goalpost position they slide up from: elbows out behind, forearms up the wall. Arms fully
    // overhead cover the face side-on and run off the top of the frame.
    upperArm: 255, forearm: 185,
    props: (j) => [{ kind: 'wall', at: [j.pelvis[0] - 9, 12], to: [j.pelvis[0] - 9, 140] }],
    highlight: ['upperArm'],
  }),

  // Face down with the arms overhead in a Y, lifted a little off the floor.
  'prone-ytw': pose({
    torso: 90, head: 100,
    thigh: 270, shin: 270, foot: 270,
    upperArm: 95, forearm: 95,
    props: (j) => [{ kind: 'cushion', at: [j.head[0] - 10, j.head[1] + 8], width: 20, height: 5 }],
    highlight: ['upperArm', 'spine'],
  }),

  // On all fours, hips sent back towards the heels while the lower back holds its position.
  'quadruped-rock-back': pose({
    torso: 100,
    thigh: 30, shin: 275, foot: 270,
    upperArm: 0, forearm: 0,
    highlight: ['thigh'],
  }),

  // Chin to chest and rolling down one bone at a time, knees soft, arms and head hanging.
  'standing-roll-down': pose({
    torso: 75, head: 30,
    thigh: 3, shin: 357,
    upperArm: 5, forearm: 0,
    highlight: ['spine'],
  }),

  // Front view. One hand on the frame above head height, hips pushed away so the working side lengthens.
  'doorframe-lat-stretch': pose({
    view: 'front',
    torso: 195,
    thigh: 350, shin: 0, farThigh: 10, farShin: 0,
    upperArm: 235, forearm: 235, farUpperArm: 15, farForearm: 340,
    props: (j) => [{ kind: 'wall', at: [j.hand[0] - 2, j.hand[1] - 22], to: [j.hand[0] - 2, 140] }],
    highlight: ['upperArm', 'forearm', 'spine'],
  }),

  // Front view. Sat tall on a chair, one arm reaching overhead as the trunk bends away from it.
  'seated-side-bend': pose({
    view: 'front',
    torso: 200,
    thigh: 300, shin: 0, farThigh: 60, farShin: 0,
    upperArm: 350, forearm: 20, farUpperArm: 195, farForearm: 200,
    props: (j) => [{ kind: 'block', at: [j.pelvis[0] - 22, j.pelvis[1] + 4], width: 44, height: Math.max(8, 132 - j.pelvis[1] - 4) }],
    highlight: ['spine'],
  }),

  // Face down, forehead on stacked hands, breathing low into the belly and back ribs.
  'crocodile-breathing': pose({
    torso: 90, head: 95,
    thigh: 270, shin: 270, foot: 270,
    upperArm: 30, forearm: 100,
    highlight: ['spine'],
  }),

  // On the side with a pillow under the head, knees bent, one hand on the lower ribs.
  'side-lying-rib-breathing': pose({
    torso: 270,
    thigh: 120, shin: 75, farThigh: 115, farShin: 70,
    upperArm: 90, forearm: 130,
    props: (j) => [{ kind: 'cushion', at: [j.head[0] - 11, j.head[1] + 8], width: 22, height: 7 }],
    highlight: ['spine'],
  }),

  // On the back, knees bent, a hand resting on the lower belly as it draws gently in.
  'abdominal-draw-in': pose({
    torso: 270,
    thigh: 135, shin: 45, farThigh: 135, farShin: 45,
    upperArm: 95, forearm: 100,
    highlight: ['spine'],
  }),
};
