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

  // Bottom of the hinge: knees soft, hips sent back, back flat, arms hanging.
  'romanian-deadlift': pose({
    torso: 105, head: 110,
    thigh: 5, shin: 355,
    upperArm: 5, forearm: 5,
    highlight: ['thigh'],
  }),

  // On the standing leg, hinged to horizontal with the other leg straight out behind: a T.
  'single-leg-romanian-deadlift': pose({
    torso: 90, head: 95,
    thigh: 4, shin: 356, farThigh: 270, farShin: 270,
    upperArm: 0, forearm: 0,
    highlight: ['thigh'],
  }),

  // Kneeling on a cushion, heels held down, the whole body a straight line tipped forward, hands ready.
  'nordic-hamstring-curl': pose({
    torso: 135, head: 130,
    thigh: 315, shin: 270, foot: 270,
    upperArm: 90, forearm: 100,
    props: (j) => [{ kind: 'cushion', at: [j.knee[0] - 10, j.knee[1] + 3], width: 24, height: 7 }],
    highlight: ['thigh'],
  }),

  // A bridge with the heels on towels, slid out until the knees are only part bent.
  'bridge-slider-leg-curl': pose({
    torso: 288, head: 270,
    thigh: 100, shin: 47, farThigh: 108, farShin: 29,
    upperArm: 90, forearm: 90,
    highlight: ['thigh'],
  }),

  // A bridge with the heels placed far from the hips, knees only slightly bent, toes up.
  'long-lever-bridge-hold': pose({
    torso: 282, head: 270,
    thigh: 95, shin: 63, foot: 150,
    upperArm: 90, forearm: 90,
    highlight: ['thigh'],
  }),

  // Sat on the floor with a roller under one thigh, hands behind, hips lifted a little off the floor.
  'foam-roller-hamstring-roll': pose({
    torso: 200, head: 205, lift: 8,
    thigh: 92, shin: 92, foot: 170, farThigh: 130, farShin: 20,
    upperArm: 330, forearm: 335,
    props: (j) => [{ kind: 'roller', at: [j.pelvis[0] + 14, j.pelvis[1] + 9], width: 8 }],
    highlight: ['thigh'],
  }),

  // Inverted V, hips the highest point: one knee bent with the heel lifted, the other leg straighter.
  'pedalling-downward-dog': pose({
    torso: 78, head: 65,
    thigh: 10, shin: 330, farThigh: 340, farShin: 340,
    upperArm: 0, forearm: 5,
    highlight: ['thigh', 'shin'],
  }),

  // Standing on a wedge with the toes raised, folded forward with slightly soft knees.
  'toes-up-toe-touch': pose({
    torso: 70, head: 55,
    thigh: 5, shin: 355, foot: 120,
    upperArm: 5, forearm: 0,
    props: (j) => [{ kind: 'wedge', at: [j.toe[0] - 12, j.toe[1] - 4], width: 24, height: 8 }],
    highlight: ['thigh'],
  }),

  // The bottom position: deep squat with the chest on the thighs, hands still holding the toes.
  'squat-to-stand': pose({
    torso: 110, head: 115,
    thigh: 105, shin: 335, foot: 90,
    upperArm: 335, forearm: 345,
    highlight: ['thigh'],
  }),

  // Folded from the hips with soft knees, head and arms hanging heavy.
  'ragdoll-forward-fold': pose({
    torso: 75, head: 60,
    thigh: 10, shin: 350,
    upperArm: 0, forearm: 0,
    highlight: ['thigh', 'spine'],
  }),
};
