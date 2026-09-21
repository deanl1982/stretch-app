import { pose } from '../build.ts';
import type { Pose } from '../types.ts';

/**
 * Hamstring figures. The working leg is the near (solid, highlightable) one.
 *
 * The figure's legs are shorter than its torso and arms together, so a fold that hangs the torso
 * between wide-set feet would put the head through the floor. Folds are drawn side-on, hinged
 * forward, which is also where the hinge is actually visible.
 */
export const HAMSTRING_POSES: Record<string, Pose> = {
  // On the back, one straight leg raised to about 85 degrees with a towel looped round the foot.
  'strap-hamstring-stretch': pose({
    torso: 270,
    thigh: 175, shin: 175, foot: 270, farThigh: 90, farShin: 90,
    upperArm: 120, forearm: 150,
    props: (j) => [{ kind: 'floorLine', at: [j.toe[0], j.toe[1]], to: [j.hand[0], j.hand[1]] }],
    highlight: ['thigh'],
  }),

  // Front edge of a chair, one leg straight out with the heel down, tipped forward over it.
  'seated-chair-hamstring-stretch': pose({
    torso: 155,
    thigh: 58, shin: 58, foot: 150, farThigh: 85, farShin: 5,
    upperArm: 30, forearm: 70,
    props: (j) => [{ kind: 'chair', at: [j.pelvis[0] - 22, j.pelvis[1] + 4], width: 40, height: 34 }],
    highlight: ['thigh'],
  }),

  // Standing, one heel up on a low step with the knee straight, hinged forward over it.
  'standing-heel-up-hamstring-stretch': pose({
    torso: 135,
    thigh: 37, shin: 37, foot: 127, farThigh: 358, farShin: 2,
    upperArm: 45, forearm: 60,
    props: (j) => [{ kind: 'step', at: [j.ankle[0] - 12, j.ankle[1] + 3], width: 26, height: 10 }],
    highlight: ['thigh'],
  }),

  // On a cushion, one leg straight with the toes up, the other folded in; hinged forward over the straight leg.
  'seated-one-leg-forward-fold': pose({
    torso: 120, head: 115, lift: 6,
    thigh: 90, shin: 90, foot: 170, farThigh: 60, farShin: 250,
    upperArm: 75, forearm: 80,
    props: (j) => [{ kind: 'cushion', at: [j.pelvis[0] - 12, j.pelvis[1] + 3], width: 26, height: 9 }],
    highlight: ['thigh'],
  }),

  // Front view: sat in a wide V, toes up, reaching forward between the legs.
  'straddle-forward-fold': pose({
    view: 'front',
    torso: 180, head: 195,
    thigh: 272, shin: 272, foot: 180, farThigh: 88, farShin: 88, farFoot: 180,
    upperArm: 340, forearm: 350, farUpperArm: 20, farForearm: 10,
    highlight: ['thigh'], farHighlight: ['thigh'],
  }),

  // Half-kneeling with the back knee down, front leg straight and heel down, hips sent back, hands on blocks.
  'half-split': pose({
    torso: 115, head: 110,
    thigh: 59, shin: 59, foot: 150, farThigh: 5, farShin: 270,
    upperArm: 20, forearm: 15,
    props: (j) => [
      { kind: 'block', at: [j.hand[0] - 8, j.hand[1] + 1], width: 16, height: Math.max(6, 131 - j.hand[1]) },
      { kind: 'cushion', at: [(j.farKnee?.[0] ?? j.pelvis[0]) - 11, (j.farKnee?.[1] ?? j.pelvis[1]) + 2], width: 22, height: 8 },
    ],
    highlight: ['thigh'],
  }),

  // Standing, feet wide, folded over from the hips with hands on blocks between them (drawn side-on).
  'wide-leg-standing-fold': pose({
    torso: 100, head: 105,
    thigh: 358, shin: 2, farThigh: 8, farShin: 352,
    upperArm: 10, forearm: 5,
    props: (j) => [{ kind: 'block', at: [j.hand[0] - 9, j.hand[1] + 1], width: 18, height: Math.max(6, 131 - j.hand[1]) }],
    highlight: ['thigh'],
  }),

  // On the back, hip at 90, both hands behind the thigh, the knee straightening towards the ceiling.
  'active-knee-extension': pose({
    torso: 270,
    thigh: 178, shin: 150, foot: 200, farThigh: 90, farShin: 90,
    upperArm: 110, forearm: 130,
    highlight: ['thigh'],
  }),

  // Standing tall with a hand on a wall, one straight leg swinging forward with the toes up.
  'front-back-leg-swings': pose({
    torso: 180,
    thigh: 40, shin: 40, foot: 130, farThigh: 0, farShin: 0,
    upperArm: 350, forearm: 340, farUpperArm: 80, farForearm: 90,
    props: (j) => [{ kind: 'wall', at: [(j.farHand?.[0] ?? 150) + 3, 14], to: [(j.farHand?.[0] ?? 150) + 3, 140] }],
    highlight: ['thigh', 'shin'],
  }),

  // Mid-march: one straight leg kicked out at hip height, the opposite hand reaching towards it.
  'straight-leg-march': pose({
    torso: 178,
    thigh: 95, shin: 95, foot: 180, farThigh: 5, farShin: 355,
    upperArm: 350, forearm: 355, farUpperArm: 60, farForearm: 80,
    highlight: ['thigh', 'shin'],
  }),

  // Folded: hips high, legs nearly straight, hands walked out on the floor in front of the feet.
  'inchworm-walkout': pose({
    torso: 75, head: 60,
    thigh: 350, shin: 355,
    upperArm: 5, forearm: 0,
    highlight: ['thigh'],
  }),

  // On the back, hip at 90 with the hand behind the thigh, the knee straightening and the toes pointed away.
  'supine-sciatic-nerve-glide': pose({
    torso: 270,
    thigh: 180, shin: 160, foot: 160, farThigh: 90, farShin: 90,
    upperArm: 110, forearm: 130,
    highlight: ['shin', 'thigh'],
  }),
};
