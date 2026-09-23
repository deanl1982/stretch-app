import { getPose } from '../poses.ts';
import { nudge } from '../nudge.ts';
import type { Motion } from '../motion.ts';
import { RECIPES } from './recipes.ts';

/**
 * Movements, for the positions users told us a single drawing did not explain.
 *
 * Each one's first frame is the position its still figure already shows, so nothing jumps when a
 * figure starts or stops moving, and a paused figure is the drawing people already know.
 *
 * Two kinds. A `pingPong` runs out and back - a rock, a hinge, a knee straightening - which is what
 * almost every mobility drill does. A `cycle` runs round and wraps, for travelling and for anything
 * that alternates sides.
 */
const AUTHORED: Record<string, Motion> = {
  // ── Things that go out and come back ───────────────────────────────────────

  // Rocking the hips back over tucked toes and forward again. The whole point is the rock.
  'toe-kneeling-rock': {
    seconds: 3.5,
    frames: [
      { torso: 178, thigh: 70, shin: 240, foot: 0, farThigh: 74, farShin: 244, farFoot: 0, upperArm: 10, forearm: 60, highlight: ['foot'] },
      { torso: 172, thigh: 30, shin: 268, foot: 0, farThigh: 34, farShin: 272, farFoot: 0, upperArm: 20, forearm: 70 },
    ],
  },

  // Sitting the hips back towards the heels while the lower back holds still.
  'quadruped-rock-back': {
    seconds: 4,
    frames: [
      { torso: 100, thigh: 30, shin: 275, foot: 270, upperArm: 0, forearm: 0, highlight: ['thigh'] },
      { torso: 112, thigh: 356, shin: 268, foot: 270, upperArm: 330, forearm: 340 },
    ],
  },

  // The knee straightening towards the ceiling and bending back: the actual test.
  'active-knee-extension': {
    seconds: 3.5,
    frames: [
      { torso: 270, thigh: 178, shin: 150, foot: 200, farThigh: 90, farShin: 90, upperArm: 110, forearm: 130, highlight: ['thigh'] },
      { torso: 270, thigh: 178, shin: 176, foot: 205, farThigh: 90, farShin: 90, upperArm: 110, forearm: 130 },
    ],
  },

  // The hinge itself: hips back, chest down, and stand up again.
  'romanian-deadlift': {
    seconds: 4,
    frames: [
      { torso: 105, head: 110, thigh: 5, shin: 355, upperArm: 5, forearm: 5, highlight: ['thigh'] },
      { torso: 170, head: 175, thigh: 2, shin: 358, upperArm: 2, forearm: 2 },
    ],
  },

  // Deep squat to a straight-legged fold and back, which is the whole drill.
  'squat-to-stand': {
    seconds: 5,
    frames: [
      { torso: 110, head: 115, thigh: 105, shin: 335, foot: 90, upperArm: 335, forearm: 345, highlight: ['thigh'] },
      { torso: 68, head: 52, thigh: 8, shin: 352, foot: 90, upperArm: 0, forearm: 352 },
    ],
  },

  // Bear hold to downward dog: two shapes a still frame has to choose between.
  'bear-to-downward-dog': {
    seconds: 4.5,
    frames: [
      { torso: 78, head: 66, thigh: 10, shin: 330, foot: 45, farThigh: 340, farShin: 340, farFoot: 45, upperArm: 0, forearm: 5, highlight: ['shin'] },
      { torso: 90, head: 85, thigh: 0, shin: 270, foot: 0, farThigh: 4, farShin: 274, farFoot: 0, upperArm: 0, forearm: 0 },
    ],
  },

  // Shrimping: driving off one foot to shift the hips away.
  'hip-escape': {
    seconds: 3.5,
    frames: [
      { torso: 270, thigh: 160, shin: 260, farThigh: 135, farShin: 45, upperArm: 100, forearm: 60, highlight: ['spine'] },
      { torso: 276, thigh: 130, shin: 230, farThigh: 100, farShin: 80, upperArm: 110, forearm: 70 },
    ],
  },

  // ── Things that alternate or travel ────────────────────────────────────────

  // Cat and cow. A straight-line spine cannot draw a curve, so the arch reads through the head and
  // the tilt of the trunk - which is still the difference a still frame cannot show at all.
  'cat-cow': {
    seconds: 5,
    loop: 'cycle',
    frames: [
      { torso: 85, head: 83, thigh: 355, shin: 320, foot: 275, farThigh: 0, farShin: 325, farFoot: 275, upperArm: 10, forearm: 5, highlight: ['spine'] },
      { torso: 78, head: 40, thigh: 350, shin: 316, foot: 275, farThigh: 355, farShin: 321, farFoot: 275, upperArm: 8, forearm: 3 },
      { torso: 85, head: 83, thigh: 355, shin: 320, foot: 275, farThigh: 0, farShin: 325, farFoot: 275, upperArm: 10, forearm: 5 },
      { torso: 96, head: 140, thigh: 4, shin: 326, foot: 275, farThigh: 8, farShin: 330, farFoot: 275, upperArm: 14, forearm: 9 },
    ],
  },

  // Lowering the opposite arm and leg away, then back. Alternating sides is the exercise.
  'dead-bug': {
    seconds: 5,
    loop: 'cycle',
    frames: [
      { torso: 270, thigh: 180, shin: 90, farThigh: 100, farShin: 100, upperArm: 235, forearm: 265, farUpperArm: 180, farForearm: 180, highlight: ['spine'] },
      { torso: 270, thigh: 180, shin: 90, farThigh: 180, farShin: 90, upperArm: 180, forearm: 180, farUpperArm: 180, farForearm: 180 },
      { torso: 270, thigh: 100, shin: 100, farThigh: 180, farShin: 90, upperArm: 180, forearm: 180, farUpperArm: 235, farForearm: 265 },
      { torso: 270, thigh: 180, shin: 90, farThigh: 180, farShin: 90, upperArm: 180, forearm: 180, farUpperArm: 180, farForearm: 180 },
    ],
  },

  // Marching in the bridge: one knee up, back down, the other knee up.
  'bridge-march': {
    seconds: 4.5,
    loop: 'cycle',
    frames: [
      { torso: 288, head: 270, thigh: 108, shin: 29, farThigh: 170, farShin: 10, upperArm: 90, forearm: 90, highlight: ['thigh'] },
      { torso: 288, head: 270, thigh: 108, shin: 29, farThigh: 112, farShin: 33, upperArm: 90, forearm: 90 },
      { torso: 288, head: 270, thigh: 166, shin: 6, farThigh: 112, farShin: 33, upperArm: 90, forearm: 90 },
      { torso: 288, head: 270, thigh: 108, shin: 29, farThigh: 112, farShin: 33, upperArm: 90, forearm: 90 },
    ],
  },

  // Knees rolling from one side to the other while the shoulders stay put.
  'lower-trunk-rotation': {
    seconds: 5,
    loop: 'cycle',
    frames: [
      { lying: true, ground: false, torso: 270, head: 270, thigh: 60, shin: 100, farThigh: 55, farShin: 95, upperArm: 180, forearm: 180, farUpperArm: 0, farForearm: 0, highlight: ['spine'] },
      { lying: true, ground: false, torso: 270, head: 270, thigh: 90, shin: 130, farThigh: 85, farShin: 125, upperArm: 180, forearm: 180, farUpperArm: 0, farForearm: 0 },
      { lying: true, ground: false, torso: 270, head: 270, thigh: 120, shin: 160, farThigh: 115, farShin: 155, upperArm: 180, forearm: 180, farUpperArm: 0, farForearm: 0 },
      { lying: true, ground: false, torso: 270, head: 270, thigh: 90, shin: 130, farThigh: 85, farShin: 125, upperArm: 180, forearm: 180, farUpperArm: 0, farForearm: 0 },
    ],
  },

  // Pedalling the heels in the dog: one knee bends as the other straightens.
  'pedalling-downward-dog': {
    seconds: 3.5,
    loop: 'cycle',
    frames: [
      { torso: 78, head: 65, thigh: 10, shin: 330, farThigh: 340, farShin: 340, upperArm: 0, forearm: 5, highlight: ['thigh', 'shin'] },
      { torso: 78, head: 65, thigh: 340, shin: 350, farThigh: 8, farShin: 328, upperArm: 0, forearm: 5 },
    ],
  },

  // Travelling in the crab: hand and opposite foot step, then the other pair.
  'crab-walk': {
    seconds: 3.5,
    loop: 'cycle',
    frames: [
      { torso: 270, head: 250, thigh: 90, shin: 0, foot: 90, upperArm: 250, forearm: 300, farThigh: 96, farShin: 4, farFoot: 90, farUpperArm: 290, farForearm: 340, highlight: ['spine'] },
      { torso: 270, head: 250, thigh: 84, shin: 356, foot: 90, upperArm: 290, forearm: 340, farThigh: 96, farShin: 4, farFoot: 90, farUpperArm: 290, farForearm: 340 },
      { torso: 270, head: 250, thigh: 84, shin: 356, foot: 90, upperArm: 290, forearm: 340, farThigh: 104, farShin: 12, farFoot: 90, farUpperArm: 250, farForearm: 300 },
      { torso: 270, head: 250, thigh: 84, shin: 356, foot: 90, upperArm: 290, forearm: 340, farThigh: 96, farShin: 4, farFoot: 90, farUpperArm: 290, farForearm: 340 },
    ],
  },

  // The duck walk: staying low and stepping one foot past the other.
  'duck-walk': {
    seconds: 3.5,
    loop: 'cycle',
    frames: [
      { torso: 158, head: 168, thigh: 100, shin: 330, foot: 90, farThigh: 58, farShin: 345, farFoot: 90, upperArm: 55, forearm: 80, highlight: ['thigh'] },
      { torso: 158, head: 168, thigh: 78, shin: 338, foot: 90, farThigh: 78, farShin: 338, farFoot: 90, upperArm: 55, forearm: 80 },
      { torso: 158, head: 168, thigh: 58, shin: 345, foot: 90, farThigh: 100, farShin: 330, farFoot: 90, upperArm: 55, forearm: 80 },
      { torso: 158, head: 168, thigh: 78, shin: 338, foot: 90, farThigh: 78, farShin: 338, farFoot: 90, upperArm: 55, forearm: 80 },
    ],
  },
};

/**
 * Every movement in the app: the hand-written ones above, then one built from each recipe by
 * turning the figure the app already draws.
 *
 * A hand-written movement wins, because it was authored against the exercise rather than derived
 * from it.
 */
export const MOTIONS: Record<string, Motion> = (() => {
  const all: Record<string, Motion> = { ...AUTHORED };

  for (const [id, recipe] of Object.entries(RECIPES)) {
    if (all[id] !== undefined) continue;
    const base = getPose(id);
    if (base === undefined) continue;

    const turns = Array.isArray(recipe.turn) ? recipe.turn : [recipe.turn];
    const frames = [base, ...turns.map((turn) => nudge(base, turn))];
    if (frames.length < 2) continue;

    all[id] = {
      frames: frames as [typeof base, typeof base, ...(typeof base)[]],
      ...(recipe.seconds === undefined ? {} : { seconds: recipe.seconds }),
      ...(recipe.loop === undefined ? {} : { loop: recipe.loop }),
    };
  }
  return all;
})();

/** Whether this exercise has a movement. */
export function getMotion(exerciseId: string): Motion | undefined {
  return MOTIONS[exerciseId];
}
