import type { Turn } from '../nudge.ts';

/**
 * What moves, for every position that was drawn as a single figure.
 *
 * Each recipe is a set of segment turns away from the figure the app already draws, in degrees.
 * The still figure is always the first keyframe, so pausing gives back the drawing people know.
 *
 * Two sizes of movement, on purpose:
 *
 * - **Rep work** gets the whole rep: the knee straightens, the hips lift, the heel drops. Large
 *   turns, because the movement is the exercise.
 * - **A hold is a hold.** Those get a small settle - the few degrees you sink as the position
 *   gives - which shows which way the stretch goes without inventing a repetition that nobody
 *   performs. Anything bigger would be a lie about what the exercise is.
 */
export interface Recipe {
  /** One turn, or several for a movement with more than two positions. */
  turn: Turn | Turn[];
  /** One full cycle. Slower for holds, quicker for a brisk rep. */
  seconds?: number;
  /** `cycle` for travelling and for anything that alternates sides. */
  loop?: 'cycle';
}

/** A settle: the couple of degrees a held position gives as you breathe out into it. */
const SETTLE = 5;

export const RECIPES: Record<string, Recipe> = {
  // ─────────────────────────────────────────────────────────────── HIPS ──

  // The knee draws a circle, which is the entire point and cannot be drawn once.
  'hip-cars': { seconds: 6, loop: 'cycle', turn: [
    { thigh: 30, shin: 20 }, { thigh: 55, shin: -10 }, { thigh: 25, shin: -30 }, { thigh: -5, shin: -10 },
  ] },
  // Wipers: both knees drop one way, then the other.
  'hip-swivels': { seconds: 4, loop: 'cycle', turn: [
    { thigh: 22, shin: 26, farThigh: 18, farShin: 22 }, {}, { thigh: -22, shin: -26, farThigh: -18, farShin: -22 }, {},
  ] },
  'shin-box': { turn: { spine: SETTLE, thigh: 4 } },
  'ninety-ninety-lean': { seconds: 5, turn: { spine: 16, head: 14 } },
  // Press up into the hand, then down into the floor: an isometric, so the figure barely moves.
  'ninety-ninety-isometric': { seconds: 5, loop: 'cycle', turn: [{ thigh: -6 }, {}, { thigh: 6 }, {}] },
  'shin-box-hip-lift': { seconds: 4, turn: { spine: -12, thigh: -16, farThigh: -14 } },
  'frog-rock-back': { seconds: 4, turn: { spine: 14, thigh: -20, farThigh: -18 } },
  'couch-stretch': { seconds: 6, turn: { spine: -SETTLE, thigh: -6 } },
  'chair-hover': { seconds: 4, turn: { spine: -8, thigh: -12, farThigh: -12 } },
  'half-kneeling-pelvic-tuck-stretch': { seconds: 6, turn: { spine: -4, thigh: -5 } },
  'psoas-stride': { seconds: 5, turn: { spine: -8, thigh: -10, upperArm: -10 } },
  'runners-lunge-rotation': { seconds: 6, turn: { spine: -10, upperArm: -18, forearm: -14 } },
  'standing-split-stance-stretch': { seconds: 6, turn: { thigh: -6, spine: -4 } },
  'thomas-stretch': { seconds: 6, turn: { farThigh: 8, farShin: 6 } },
  'side-lying-hip-flexor-stretch': { seconds: 6, turn: { thigh: -8, shin: -6 } },
  'prone-knee-bend-quad-stretch': { seconds: 6, turn: { shin: 12 } },
  'seated-hip-flexor-lift-off': { seconds: 5, turn: { thigh: -14, shin: -8 } },
  'classic-pigeon': { seconds: 6, turn: { spine: 10, head: 8 } },
  'reclined-pigeon': { seconds: 6, turn: { farThigh: -12, farShin: -8 } },
  'seated-figure-4': { seconds: 6, turn: { spine: 12, head: 10 } },
  'happy-baby': { seconds: 5, turn: { thigh: -8, farThigh: -8, shin: -6, farShin: -6 } },
  'cossack-squat': { seconds: 5, turn: { thigh: -14, shin: 10, spine: -6, farThigh: -8 } },
  'wide-stance-groin-opener': { seconds: 6, turn: { thigh: -6, farThigh: -6, spine: -4 } },
  'standing-side-leg-lift': { seconds: 3, turn: { thigh: -26, shin: -26 } },
  'fisherman-squat-switches': { seconds: 4, loop: 'cycle', turn: [
    {}, { thigh: 24, shin: -20, farThigh: -24, farShin: 20 }, {}, { thigh: -6, farThigh: 6 },
  ] },
  'horse-stance-internal-rotation': { seconds: 4, loop: 'cycle', turn: [{}, { thigh: 22, shin: -18 }, {}, { farThigh: -22, farShin: 18 }] },
  'gorilla-hold': { seconds: 5, turn: { spine: -6, thigh: -8 } },
  'half-lotus-forward-fold': { seconds: 6, turn: { spine: 12, head: 10 } },
  'cross-legged-sit': { seconds: 7, turn: { spine: 3, head: 3 } },

  // ────────────────────────────────────────────────────────── HAMSTRINGS ──

  'dowel-hinge': { seconds: 4, turn: { spine: 45, head: 45, upperArm: 30 } },
  'standing-good-morning': { seconds: 4, turn: { spine: 48, head: 46, upperArm: 34 } },
  // The pulse: at the bottom, the knees straighten a little further and give again.
  'good-morning-pulse': { seconds: 2.5, turn: { shin: 10, farShin: 10, spine: 6 } },
  'hands-on-thighs-straighten': { seconds: 4, loop: 'cycle', turn: [{}, { shin: 14 }, {}, { farShin: 14 }] },
  'active-slr': { seconds: 4, turn: { thigh: -42 } },
  'sciatic-slider': { seconds: 3, loop: 'cycle', turn: [{}, { shin: 24, head: -12 }, {}, { shin: -10, head: 12 }] },
  'long-sit': { seconds: 7, turn: { spine: 6, head: 5 } },
  'strap-hamstring-stretch': { seconds: 6, turn: { thigh: -10 } },
  'seated-chair-hamstring-stretch': { seconds: 6, turn: { spine: 10, head: 8 } },
  'standing-heel-up-hamstring-stretch': { seconds: 6, turn: { spine: 10, head: 8 } },
  'seated-one-leg-forward-fold': { seconds: 6, turn: { spine: 10, head: 8 } },
  'straddle-forward-fold': { seconds: 6, turn: { spine: 10, head: 8 } },
  'half-split': { seconds: 6, turn: { spine: 10, thigh: 6 } },
  'wide-leg-standing-fold': { seconds: 6, turn: { spine: 10, head: 8 } },
  'front-back-leg-swings': { seconds: 2.5, loop: 'cycle', turn: [
    {}, { thigh: 40, shin: 30 }, {}, { thigh: -40, shin: -30 },
  ] },
  'straight-leg-march': { seconds: 3, loop: 'cycle', turn: [
    {}, { thigh: -30, farThigh: 20 }, {}, { thigh: 25, farThigh: -18 },
  ] },
  'inchworm-walkout': { seconds: 5, turn: { spine: 20, thigh: -14, farThigh: -14, upperArm: 16 } },
  'supine-sciatic-nerve-glide': { seconds: 3, loop: 'cycle', turn: [{}, { shin: 26, foot: 20 }, {}, { shin: -8, foot: -20 }] },
  'single-leg-romanian-deadlift': { seconds: 4, turn: { spine: 30, head: 28, farThigh: -26, farShin: -24 } },
  'nordic-hamstring-curl': { seconds: 5, turn: { spine: 28, head: 26 } },
  'bridge-slider-leg-curl': { seconds: 4, turn: { shin: 26, farShin: 26, spine: 8 } },
  'long-lever-bridge-hold': { seconds: 6, turn: { spine: -4, thigh: -4 } },
  'foam-roller-hamstring-roll': { seconds: 4, turn: { thigh: 10, shin: -10, spine: 6 } },
  'toes-up-toe-touch': { seconds: 4, turn: { spine: 26, head: 24, upperArm: 18 } },
  'ragdoll-forward-fold': { seconds: 7, turn: { spine: 6, head: 6 } },

  // ────────────────────────────────────────────────────── ANKLES AND FEET ──

  'wall-ankle-drive': { seconds: 3, turn: { shin: 18, spine: 8 } },
  'soleus-calf-stretch': { seconds: 6, turn: { foot: 8 } },
  'gastroc-calf-stretch': { seconds: 6, turn: { foot: 8 } },
  'tib-raise': { seconds: 3, turn: { foot: -30 } },
  'seiza': { seconds: 7, turn: { spine: 3 } },
  'toes-tucked-kneeling': { seconds: 6, turn: { spine: 4, thigh: 4 } },
  'big-toe-tucked-kneeling': { seconds: 6, turn: { spine: 4, thigh: 4 } },
  'deep-squat-hold': { seconds: 7, turn: { spine: 4, thigh: 3 } },
  'big-toe-extension': { seconds: 3, turn: { foot: -26 } },
  'plantar-fascia-stretch': { seconds: 3.5, turn: { foot: -24 } },
  'wall-big-toe-stretch': { seconds: 5, turn: { spine: 6, foot: -8 } },
  'rear-foot-big-toe-lunge': { seconds: 5, turn: { spine: -5, thigh: -6 } },
  'band-big-toe-extension': { seconds: 3, loop: 'cycle', turn: [{}, { foot: -22 }, {}, { foot: 10 }] },
  'sesamoid-mobilisation': { seconds: 3.5, turn: { foot: -18 } },
  'first-ray-glide': { seconds: 3, loop: 'cycle', turn: [{}, { foot: -12 }, {}, { foot: 12 }] },
  'big-and-little-toe-lifts': { seconds: 3, loop: 'cycle', turn: [{}, { foot: -16 }, {}, { foot: 8 }] },
  'toe-splay': { seconds: 3, turn: { foot: -8 } },
  'toe-spacer-sit': { seconds: 7, turn: { foot: -4 } },
  'short-foot': { seconds: 3.5, turn: { foot: -10 } },
  'towel-scrunch': { seconds: 2.5, turn: { foot: -14 } },
  'big-toe-press': { seconds: 3.5, turn: { foot: 10 } },
  'windlass-check': { seconds: 4, turn: { foot: -20 } },
  'big-toe-heel-raise': { seconds: 3.5, turn: { foot: 26, shin: -6 } },
  'top-of-foot-stretch': { seconds: 6, turn: { spine: -4, thigh: -5 } },
  // Ankle circles, which is a circle and nothing else.
  'ankle-cars': { seconds: 5, loop: 'cycle', turn: [
    { foot: 26 }, { foot: 8, shin: 8 }, { foot: -26 }, { foot: 8, shin: -8 },
  ] },
  'heel-elevated-goblet-squat': { seconds: 4, turn: { thigh: -26, shin: 20, spine: -8 } },
  'heel-walk': { seconds: 3, loop: 'cycle', turn: [
    {}, { thigh: -18, farThigh: 14 }, {}, { thigh: 16, farThigh: -14 },
  ] },
  'alfredson-heel-drop': { seconds: 4, turn: { foot: 28, shin: -6 } },
  'bent-knee-heel-drop': { seconds: 4, turn: { foot: 26, shin: -8 } },
  'seated-soleus-pushup': { seconds: 2, turn: { foot: -26, farFoot: -26 } },
  'banded-eversion': { seconds: 3, turn: { foot: -22 } },
  'high-load-towel-heel-raise': { seconds: 4, turn: { foot: 26, shin: -6 } },
  'arch-roll': { seconds: 4, turn: { foot: 14, shin: -8 } },
  'supported-single-leg-stand': { seconds: 6, turn: { spine: 3, farThigh: -6 } },
  'heel-to-toe-walk': { seconds: 3.5, loop: 'cycle', turn: [
    {}, { thigh: -16, farThigh: 14 }, {}, { thigh: 14, farThigh: -16 },
  ] },
  'star-excursion-reach': { seconds: 4.5, loop: 'cycle', turn: [
    {}, { farThigh: 26, farShin: 14 }, {}, { farThigh: -22, farShin: -12 },
  ] },
  'knee-to-wall-check': { seconds: 4, turn: { shin: 16, spine: 6 } },

  // ─────────────────────────────────────────────────────── BACK AND TRUNK ──

  'mcgill-curl-up': { seconds: 3.5, turn: { spine: -10, head: -16 } },
  'glute-bridge': { seconds: 3.5, turn: { spine: -14, thigh: -14 } },
  'pallof-press': { seconds: 3.5, turn: { upperArm: 18, forearm: 14, farUpperArm: -18, farForearm: -14 } },
  'forearm-plank': { seconds: 7, turn: { spine: 2 } },
  'bear-hold': { seconds: 6, turn: { spine: 3, thigh: -3 } },
  'prone-press-up': { seconds: 4, turn: { spine: -26, head: -22, forearm: -20 } },
  'standing-back-extension': { seconds: 4, turn: { spine: -16, head: -14 } },
  'knee-to-chest': { seconds: 5, turn: { thigh: -12, shin: -8 } },
  'pelvic-tilt': { seconds: 4, loop: 'cycle', turn: [{}, { spine: 6, thigh: -6 }, {}, { spine: -6, thigh: 6 }] },
  'quadruped-thoracic-rotation': { seconds: 4, turn: { farUpperArm: -40, farForearm: -30, head: -18 } },
  'seated-thoracic-rotation': { seconds: 4, loop: 'cycle', turn: [
    {}, { upperArm: 20, farUpperArm: 20, head: 14 }, {}, { upperArm: -20, farUpperArm: -20, head: -14 },
  ] },
  'bench-thoracic-extension': { seconds: 6, turn: { spine: 8, head: 8 } },
  'wall-angels': { seconds: 4, turn: { upperArm: -26, forearm: -20, farUpperArm: 26, farForearm: 20 } },
  'prone-ytw': { seconds: 4, turn: { upperArm: -18, forearm: -14 } },
  'standing-roll-down': { seconds: 6, turn: { spine: 26, head: 30, upperArm: 16 } },
  'doorframe-lat-stretch': { seconds: 6, turn: { spine: 8 } },
  'seated-side-bend': { seconds: 6, turn: { spine: 8, head: 6, upperArm: 8 } },
  'crocodile-breathing': { seconds: 8, turn: { spine: 2, head: 2 } },
  'side-lying-rib-breathing': { seconds: 8, turn: { spine: 2, head: 2 } },
  'abdominal-draw-in': { seconds: 6, turn: { spine: 3 } },
  'open-book': { seconds: 5, turn: { upperArm: -50, forearm: -40, head: -16 } },
  'bird-dog': { seconds: 4, loop: 'cycle', turn: [
    {}, { upperArm: -34, forearm: -26, farThigh: 30, farShin: 24 }, {}, {},
  ] },
  'side-bridge': { seconds: 4, turn: { spine: -10, thigh: -8 } },
  'tspine-extension': { seconds: 5, turn: { spine: -14, head: -12 } },
  'childs-pose': { seconds: 7, turn: { spine: 5, thigh: -4 } },
  'supine-breathing': { seconds: 8, turn: { spine: 2, head: 2 } },
  'ground-time': { seconds: 8, turn: { spine: 4, head: 3 } },

  // ─────────────────────────────────────────── FLOOR WORK AND LOCOMOTION ──

  'horse-jump': { seconds: 2.5, turn: { thigh: -16, shin: 14, spine: -8 } },
  'frog-hop': { seconds: 2.5, turn: { thigh: -22, shin: 18, spine: -10 } },
  'frog-kick-through': { seconds: 3.5, loop: 'cycle', turn: [
    {}, { thigh: 30, shin: -20 }, {}, { thigh: -20, shin: 16 },
  ] },
  'frog-crab-support-hold': { seconds: 6, turn: { spine: -4, thigh: -5 } },
  'crab-press': { seconds: 3.5, turn: { spine: -8, thigh: -10 } },
  'crab-squat': { seconds: 5, turn: { spine: -30, thigh: -24, upperArm: 26 } },
  'gorilla-push-up': { seconds: 3, turn: { spine: -10, upperArm: 22, forearm: -18 } },
  'kneeling-hip-extension': { seconds: 3.5, turn: { thigh: -22, shin: -16 } },
  'half-sa-lift': { seconds: 4, turn: { spine: -10, farThigh: -14, farShin: 10 } },
  'torso-lateral-shift': { seconds: 4, loop: 'cycle', turn: [{}, { spine: 9, head: -7 }, {}, { spine: -5, head: 4 }] },
  'ostrich-walk': { seconds: 3, loop: 'cycle', turn: [
    {}, { thigh: -18, farThigh: 16 }, {}, { thigh: 16, farThigh: -18 },
  ] },
  'downward-dog-crawl': { seconds: 3.5, loop: 'cycle', turn: [
    {}, { thigh: -16, farThigh: 14, upperArm: 10 }, {}, { thigh: 14, farThigh: -16, upperArm: -10 },
  ] },
};
