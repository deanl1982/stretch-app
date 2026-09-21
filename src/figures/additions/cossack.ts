import { pose } from '../build.ts';
import type { Pose } from '../types.ts';

/**
 * The Cossack family, drawn from the front: the trail leg goes out to the side, which a side
 * view would flatten to nothing. Near limbs are the image-left ones.
 */
export const COSSACK_POSES: Record<string, Pose> = {
  // Sat deep over the left leg, right leg straight out along the floor, toes up, arms forward.
  'cossack-squat': pose({
    view: 'front',
    torso: 185,
    thigh: 265, shin: 15, foot: 270,
    farThigh: 65, farShin: 65, farFoot: 180,
    upperArm: 345, forearm: 135,
    farUpperArm: 15, farForearm: 225,
    highlight: ['thigh'],
    farHighlight: ['thigh'],
  }),

  // Feet wide, sat deep between them, knees out over the toes, hands on the inner thighs.
  'wide-stance-groin-opener': pose({
    view: 'front',
    torso: 180,
    thigh: 250, shin: 10, foot: 270,
    farThigh: 110, farShin: 350, farFoot: 90,
    upperArm: 350, forearm: 335,
    farUpperArm: 10, farForearm: 25,
    highlight: ['thigh'],
    farHighlight: ['thigh'],
  }),

  // The midpoint of the crossing: low and central in a horse stance, arms out in front.
  'horse-stance-transition': pose({
    view: 'front',
    torso: 180,
    thigh: 290, shin: 0, foot: 270,
    farThigh: 70, farShin: 0, farFoot: 90,
    upperArm: 345, forearm: 135,
    farUpperArm: 15, farForearm: 225,
    highlight: ['thigh'],
    farHighlight: ['thigh'],
  }),

  // Standing tall on the right leg, left leg lifted out to the side, hand on a wall for balance.
  'standing-side-leg-lift': pose({
    view: 'front',
    torso: 180,
    thigh: 325, shin: 325, foot: 270,
    farThigh: 0, farShin: 0, farFoot: 90,
    upperArm: 350, forearm: 355,
    farUpperArm: 100, farForearm: 100,
    props: (j) => [
      { kind: 'wall', at: [(j.farHand?.[0] ?? 130) + 3, 14], to: [(j.farHand?.[0] ?? 130) + 3, 140] },
    ],
    highlight: ['thigh'],
  }),
};
