import { pose, type Joints, type Stance } from '../build.ts';
import type { Pose, PropShape } from '../types.ts';

/**
 * Ankle, foot and first-ray figures.
 *
 * A stick figure cannot show a toe splay or a sesamoid glide, so these draw the posture and light up
 * the foot. Most are variations of two seated templates. The figure is otherwise honest about where
 * the body is: at a chair, ankle crossed over a knee, at a wall, on a step.
 */

const chair = (j: Joints): PropShape[] => [
  { kind: 'chair', at: [j.pelvis[0] - 22, j.pelvis[1] + 4], width: 40, height: 34 },
];
const wallAt = (x: number): PropShape => ({ kind: 'wall', at: [x, 12], to: [x, 140] });

/** Sat tall on a chair, both feet flat, hands on the thighs. */
const SEATED = {
  torso: 180,
  thigh: 85, shin: 5, farThigh: 85, farShin: 5,
  upperArm: 20, forearm: 60,
} satisfies Stance;

/** Sat on a chair with one ankle crossed over the opposite knee, foot held in the hands. */
const CROSSED = {
  torso: 165,
  thigh: 60, shin: 165, foot: 100, farThigh: 85, farShin: 5,
  upperArm: 45, forearm: 23,
} satisfies Stance;

export const ANKLE_POSES: Record<string, Pose> = {
  // ── The big toe and first ray ──────────────────────────────────────────────

  // Facing a wall with the toes flexed up it, heel down, one hand on the wall.
  'wall-big-toe-stretch': pose({
    torso: 170,
    thigh: 25, shin: 20, foot: 120, farThigh: 350, farShin: 350,
    upperArm: 35, forearm: 45,
    props: (j) => [wallAt(j.hand[0] + 1)],
    highlight: ['foot'],
  }),

  // A long split stance at a wall, the rear heel lifted and the big toe bent back under load.
  'rear-foot-big-toe-lunge': pose({
    torso: 170,
    thigh: 292, shin: 292, foot: 350, farThigh: 80, farShin: 0,
    upperArm: 105, forearm: 95,
    props: (j) => [wallAt(j.hand[0] + 3)],
    highlight: ['foot'],
  }),

  // Seated, a band looped round the big toe and held in the hand, the toe lifting against it.
  'band-big-toe-extension': pose({
    ...SEATED,
    upperArm: 30, forearm: 50,
    props: (j) => [...chair(j), { kind: 'floorLine', at: [j.toe[0], j.toe[1]], to: [j.hand[0], j.hand[1]] }],
    highlight: ['foot'],
  }),

  'sesamoid-mobilisation': pose({ ...CROSSED, props: chair, highlight: ['foot'] }),

  'first-ray-glide': pose({ ...CROSSED, upperArm: 50, forearm: 30, props: chair, highlight: ['foot'] }),

  'big-and-little-toe-lifts': pose({ ...SEATED, props: chair, highlight: ['foot'] }),

  'toe-splay': pose({ ...SEATED, upperArm: 25, forearm: 50, props: chair, highlight: ['foot'] }),

  'toe-spacer-sit': pose({ ...CROSSED, upperArm: 40, forearm: 40, props: chair, highlight: ['foot'] }),

  'short-foot': pose({ ...SEATED, upperArm: 15, forearm: 65, props: chair, highlight: ['foot'] }),

  // Seated, toes curling a flat towel back towards the heel.
  'towel-scrunch': pose({
    ...SEATED,
    props: (j) => [...chair(j), { kind: 'cushion', at: [j.toe[0] - 16, j.toe[1] - 1], width: 32, height: 3 }],
    highlight: ['foot'],
  }),

  'big-toe-press': pose({ ...SEATED, upperArm: 30, forearm: 45, props: chair, highlight: ['foot'] }),

  // The self-test: foot raised on the opposite knee, big toe lifted by hand while the arch rises.
  'windlass-check': pose({ ...CROSSED, upperArm: 42, forearm: 30, props: chair, highlight: ['foot'] }),

  // Standing on one foot at a wall, at the top of a heel raise with the big toe held up on a rolled towel.
  'big-toe-heel-raise': pose({
    torso: 180,
    thigh: 0, shin: 0, foot: 40,
    upperArm: 90, forearm: 90,
    props: (j) => [
      { kind: 'cushion', at: [j.toe[0] - 8, j.toe[1] - 3], width: 14, height: 4 },
      wallAt(j.hand[0] + 3),
    ],
    highlight: ['foot'],
  }),

  // Standing at a wall, one foot behind with the top of the foot and toenails on the floor.
  'top-of-foot-stretch': pose({
    torso: 180,
    thigh: 350, shin: 339, foot: 265, farThigh: 355, farShin: 5,
    upperArm: 350, forearm: 355, farUpperArm: 90, farForearm: 90,
    props: (j) => [wallAt((j.farHand?.[0] ?? 140) + 3)],
    highlight: ['foot'],
  }),

  // ── Ankle mobility and the calf ────────────────────────────────────────────

  'ankle-cars': pose({ ...CROSSED, upperArm: 40, forearm: 35, props: chair, highlight: ['foot', 'shin'] }),

  // Bottom of a goblet squat, heels raised on a plate, weight held at the chest.
  'heel-elevated-goblet-squat': pose({
    torso: 175, lift: 6,
    thigh: 100, shin: 340, foot: 90,
    upperArm: 20, forearm: 100,
    props: (j) => [{ kind: 'block', at: [j.ankle[0] - 8, j.ankle[1] + 2], width: 18, height: 6 }],
    highlight: ['shin', 'foot'],
  }),

  // Walking on the heels: toes and forefoot pulled up, front of the shin working.
  'heel-walk': pose({
    torso: 180,
    thigh: 20, shin: 15, foot: 130, farThigh: 340, farShin: 345, farFoot: 130,
    upperArm: 340, forearm: 350,
    highlight: ['shin', 'foot'],
  }),

  // On a step edge with the heel dropped below it, knee straight, one hand on a rail.
  'alfredson-heel-drop': pose({
    torso: 180,
    thigh: 0, shin: 0, foot: 120, farThigh: 350, farShin: 290,
    upperArm: 90, forearm: 90,
    props: (j) => [
      { kind: 'step', at: [j.toe[0] - 16, j.toe[1] + 2], width: 24, height: Math.max(8, 132 - j.toe[1] - 2) },
      wallAt(j.hand[0] + 3),
    ],
    highlight: ['shin'],
  }),

  // The same with the knee bent about 45 degrees, which shifts the work to the lower calf.
  'bent-knee-heel-drop': pose({
    torso: 180,
    thigh: 25, shin: 340, foot: 120, farThigh: 350, farShin: 290,
    upperArm: 90, forearm: 90,
    props: (j) => [
      { kind: 'step', at: [j.toe[0] - 16, j.toe[1] + 2], width: 24, height: Math.max(8, 132 - j.toe[1] - 2) },
      wallAt(j.hand[0] + 3),
    ],
    highlight: ['shin'],
  }),

  // Sat with the knees at 90 over the heels, both heels lifted and pressing the balls of the feet down.
  'seated-soleus-pushup': pose({
    ...SEATED,
    foot: 45, farFoot: 45,
    props: chair,
    highlight: ['shin', 'foot'],
  }),

  // Legs out in front, a band round the forefoot, turning the sole outwards against it.
  'banded-eversion': pose({
    torso: 180,
    thigh: 90, shin: 90, foot: 120, farThigh: 90, farShin: 90, farFoot: 120,
    upperArm: 60, forearm: 70,
    props: (j) => [{ kind: 'floorLine', at: [j.toe[0], j.toe[1]], to: [j.hand[0], j.hand[1]] }],
    highlight: ['foot', 'shin'],
  }),

  // On the forefoot on a step, toes bent up on a rolled towel, at the top of a slow calf raise.
  'high-load-towel-heel-raise': pose({
    torso: 180,
    thigh: 0, shin: 0, foot: 40,
    upperArm: 90, forearm: 90,
    props: (j) => [
      { kind: 'step', at: [j.toe[0] - 14, j.toe[1] + 3], width: 24, height: Math.max(8, 132 - j.toe[1] - 3) },
      { kind: 'cushion', at: [j.toe[0] - 6, j.toe[1] - 2], width: 12, height: 4 },
      wallAt(j.hand[0] + 3),
    ],
    highlight: ['foot', 'shin'],
  }),

  // Seated, rolling the arch of the foot over a small ball.
  'arch-roll': pose({
    ...SEATED,
    props: (j) => [...chair(j), { kind: 'roller', at: [j.ankle[0] + 6, j.ankle[1] + 3], width: 5 }],
    highlight: ['foot'],
  }),

  // Front view. Standing on the right leg beside a wall, the other foot just off the floor, fingertips on the wall.
  'supported-single-leg-stand': pose({
    view: 'front',
    torso: 180,
    thigh: 340, shin: 15, foot: 270, farThigh: 0, farShin: 0, farFoot: 90,
    upperArm: 350, forearm: 355, farUpperArm: 100, farForearm: 100,
    props: (j) => [wallAt((j.farHand?.[0] ?? 140) + 3)],
    farHighlight: ['shin', 'foot'],
  }),

  // Heel on the floor, toe lightly touching, feet in one line, walking along a wall.
  'heel-to-toe-walk': pose({
    torso: 180,
    thigh: 15, shin: 10, foot: 90, farThigh: 350, farShin: 355, farFoot: 90,
    upperArm: 340, forearm: 350,
    highlight: ['foot'],
  }),

  // Standing on one soft knee, hands on the hips, the other foot reaching forward to touch down lightly.
  'star-excursion-reach': pose({
    torso: 180,
    thigh: 30, shin: 335, foot: 90, farThigh: 28, farShin: 28, farFoot: 90,
    upperArm: 340, forearm: 15,
    highlight: ['shin', 'foot'],
  }),

  // Lunge stance facing a wall: front knee to the wall, heel down, a ruler marking the gap from the big toe.
  'knee-to-wall-check': pose({
    torso: 175,
    thigh: 75, shin: 335, foot: 90, farThigh: 302, farShin: 302, farFoot: 90,
    upperArm: 35, forearm: 45,
    props: (j) => [
      wallAt(j.knee[0] + 3),
      { kind: 'floorLine', at: [j.toe[0], j.toe[1] + 4], to: [j.knee[0] + 3, j.toe[1] + 4] },
    ],
    highlight: ['shin', 'foot'],
  }),
};
