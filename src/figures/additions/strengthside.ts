import { pose } from '../build.ts';
import type { Pose } from '../types.ts';

/**
 * Figures for the Strength Side follow-alongs: floor locomotion, animal positions and the frog
 * ladder.
 *
 * Most of these travel, which a single frame cannot show. Each one draws the representative
 * mid-movement frame its cues describe, so the picture matches the moment the player is talking
 * about rather than a tidy start position nobody holds.
 */
export const STRENGTHSIDE_POSES: Record<string, Pose> = {
  // Kneeling on tucked toes, hips rocked back towards the heels.
  'toe-kneeling-rock': pose({
    torso: 178,
    thigh: 70, shin: 240, foot: 0,
    farThigh: 74, farShin: 244, farFoot: 0,
    upperArm: 10, forearm: 60,
    highlight: ['foot'],
  }),

  // Front view: a wide squat with the weight shifted onto one bent leg, hands down for balance.
  'fisherman-squat-switches': pose({
    view: 'front',
    torso: 185,
    thigh: 265, shin: 15, foot: 270,
    farThigh: 65, farShin: 65, farFoot: 180,
    upperArm: 5, forearm: 10, farUpperArm: 15, farForearm: 5,
    highlight: ['thigh'], farHighlight: ['thigh'],
  }),

  // Shrimping: on the back, one foot driving the floor, the other knee drawn in as the hips shift.
  'hip-escape': pose({
    torso: 270,
    thigh: 160, shin: 260, farThigh: 135, farShin: 45,
    upperArm: 100, forearm: 60,
    highlight: ['spine'],
  }),

  // Walking folded over, hands holding the shins, head hanging, mid-stride.
  'ostrich-walk': pose({
    torso: 72, head: 50,
    thigh: 15, shin: 15, farThigh: 345, farShin: 345,
    upperArm: 0, forearm: 350,
    highlight: ['thigh'],
  }),


  // Front view: a wide low stance with one knee driven in across the midline.
  'horse-stance-internal-rotation': pose({
    view: 'front',
    torso: 180,
    thigh: 250, shin: 30, foot: 270,
    farThigh: 110, farShin: 340, farFoot: 90,
    upperArm: 340, forearm: 100, farUpperArm: 20, farForearm: 260,
    highlight: ['thigh'],
  }),

  // Mid-jump from a wide crouch: hands braced, both feet just off the floor.
  'horse-jump': pose({
    torso: 70, head: 60,
    thigh: 330, shin: 20, foot: 90,
    upperArm: 15, forearm: 350,
    highlight: ['thigh'],
  }),

  // The second half of the hop: feet kicked back, weight on the hands, body in a line.
  'frog-hop': pose({
    torso: 100, head: 95,
    thigh: 282, shin: 282, foot: 320,
    upperArm: 0, forearm: 0,
    highlight: ['spine'],
  }),

  // Mid-thread: one leg passing under the body towards the far side, the other braced behind.
  'frog-kick-through': pose({
    torso: 100, head: 95,
    thigh: 55, shin: 95, foot: 150,
    farThigh: 288, farShin: 288, farFoot: 320,
    upperArm: 0, forearm: 0,
    highlight: ['thigh'],
  }),

  // Crab: hands planted behind, hips lifted, torso and thighs level, feet flat.
  'frog-crab-support-hold': pose({
    torso: 270, head: 250,
    thigh: 90, shin: 0, foot: 90,
    upperArm: 290, forearm: 340,
    highlight: ['spine'],
  }),

  // The same shape with the hips pressed higher and the glutes squeezed.
  'crab-press': pose({
    torso: 272, head: 252,
    thigh: 98, shin: 356, foot: 90,
    upperArm: 288, forearm: 338,
    highlight: ['thigh'],
  }),

  // Halfway between the two: a deep squat with the near hand reaching back to plant.
  'crab-squat': pose({
    torso: 150, head: 140,
    thigh: 105, shin: 330, foot: 90,
    farThigh: 75, farShin: 350, farFoot: 90,
    upperArm: 300, forearm: 330,
    highlight: ['thigh'],
  }),


  // Front view: the ribcage shifted sideways over a pelvis that stays put.
  'torso-lateral-shift': pose({
    view: 'front',
    torso: 166, head: 180,
    thigh: 355, shin: 5, foot: 270,
    farThigh: 5, farShin: 355, farFoot: 90,
    upperArm: 345, forearm: 15, farUpperArm: 15, farForearm: 345,
    highlight: ['spine'],
  }),

  // The downward dog end of the flow, up on the toes.
  'bear-to-downward-dog': pose({
    torso: 78, head: 66,
    thigh: 10, shin: 330, foot: 45,
    farThigh: 340, farShin: 340, farFoot: 45,
    upperArm: 0, forearm: 5,
    highlight: ['shin'],
  }),

  // Sitting cross-legged on a cushion, tall through the spine, hands on the knees.
  'cross-legged-sit': pose({
    torso: 180, lift: 6,
    thigh: 100, shin: 240, foot: 260,
    upperArm: 20, forearm: 75,
    props: (j) => [{ kind: 'cushion', at: [j.pelvis[0] - 13, j.pelvis[1] + 3], width: 26, height: 9 }],
    highlight: ['thigh'],
  }),

  // Ziani's gorilla: deep squat, fists down in front, weight through the fists and feet.
  'gorilla-hold': pose({
    torso: 95, head: 78,
    thigh: 60, shin: 350, foot: 90,
    upperArm: 0, forearm: 350,
    highlight: ['thigh'],
  }),

  // One foot drawn up onto the opposite thigh, folded forward over the leg on the floor.
  'half-lotus-forward-fold': pose({
    torso: 100, head: 95, lift: 5,
    thigh: 90, shin: 90, foot: 150,
    farThigh: 75, farShin: 215,
    upperArm: 55, forearm: 78,
    props: (j) => [{ kind: 'cushion', at: [j.pelvis[0] - 13, j.pelvis[1] + 3], width: 26, height: 9 }],
    highlight: ['thigh'],
  }),

  // Rising out of seiza into a half-kneeling lunge, driving through the front ankle.
  'half-sa-lift': pose({
    torso: 184,
    thigh: 338, shin: 262, foot: 270,
    farThigh: 82, farShin: 0, farFoot: 90,
    upperArm: 20, forearm: 55,
    highlight: ['shin', 'foot'],
  }),

  // A push-up on closed fists, at the bottom of the rep.
  'gorilla-push-up': pose({
    torso: 92, head: 88,
    thigh: 272, shin: 272, foot: 315,
    upperArm: 330, forearm: 20,
    highlight: ['spine'],
  }),

  // On hands and knees, one knee lifted just clear of the floor with the glute working.
  'kneeling-hip-extension': pose({
    torso: 90, head: 85,
    thigh: 280, shin: 190, foot: 250,
    farThigh: 0, farShin: 270, farFoot: 0,
    upperArm: 0, forearm: 0,
    highlight: ['thigh'],
  }),

  // Crawling in the downward dog shape: opposite hand and foot stepped through.
  'downward-dog-crawl': pose({
    torso: 78, head: 66,
    thigh: 356, shin: 350, foot: 100,
    farThigh: 338, farShin: 345, farFoot: 100,
    upperArm: 8, forearm: 22,
    highlight: ['thigh'],
  }),

  // Travelling in the crab: the near hand lifted mid-step, everything else planted.
  'crab-walk': pose({
    torso: 270, head: 250,
    thigh: 90, shin: 0, foot: 90,
    upperArm: 250, forearm: 300,
    farThigh: 96, farShin: 4, farFoot: 90,
    farUpperArm: 290, farForearm: 340,
    highlight: ['spine'],
  }),

  // The duck walk: hips low between the heels, one foot stepped ahead.
  'duck-walk': pose({
    torso: 158, head: 168,
    thigh: 100, shin: 330, foot: 90,
    farThigh: 58, farShin: 345, farFoot: 90,
    upperArm: 55, forearm: 80,
    highlight: ['thigh'],
  }),
};
