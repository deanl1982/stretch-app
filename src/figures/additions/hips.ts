import { pose } from '../build.ts';
import type { Pose } from '../types.ts';

/**
 * Hip-flexor, pigeon and figure-4 figures.
 *
 * In the lunges the stretched leg is the back one, so it is drawn as the near (solid, highlightable)
 * limb and the front leg is the faded far one. Side-lying poses are seen from above, because the
 * movement happens in a plane that a side view would lay flat.
 */
export const HIPS_POSES: Record<string, Pose> = {
  // Back knee down on a cushion, front knee at 90, pelvis tucked, tall through the chest.
  'half-kneeling-pelvic-tuck-stretch': pose({
    torso: 178,
    thigh: 340, shin: 265, foot: 270,
    farThigh: 80, farShin: 0, farFoot: 90,
    upperArm: 25, forearm: 55,
    props: (j) => [{ kind: 'cushion', at: [j.knee[0] - 11, j.knee[1] + 2], width: 22, height: 8 }],
    highlight: ['thigh'],
  }),

  // Mid-stride: back leg long with the heel lifted, back-side arm reaching straight up.
  'psoas-stride': pose({
    torso: 176,
    // Back leg sloped until its toe meets the floor level of the front foot.
    thigh: 292, shin: 292, foot: 350,
    farThigh: 80, farShin: 0, farFoot: 90,
    upperArm: 170, forearm: 175,
    highlight: ['thigh'],
  }),

  // Deep lunge: back leg straight and strong, inside hand down by the front foot, outside arm reaching up.
  'runners-lunge-rotation': pose({
    torso: 100, head: 115,
    thigh: 290, shin: 290, foot: 330,
    farThigh: 75, farShin: 340, farFoot: 90,
    upperArm: 350, forearm: 350,
    farUpperArm: 180, farForearm: 180,
    highlight: ['thigh'],
  }),

  // Long stride, front knee bent, back leg roughly straight with the heel down, hands on the hips.
  'standing-split-stance-stretch': pose({
    torso: 180,
    thigh: 305, shin: 305, foot: 90,
    farThigh: 60, farShin: 350, farFoot: 90,
    upperArm: 340, forearm: 15,
    highlight: ['thigh'],
  }),

  // On the very edge of a bed: one knee hugged in, the other leg hanging off with the thigh dropping.
  'thomas-stretch': pose({
    torso: 270,
    thigh: 215, shin: 100, farThigh: 45, farShin: 10,
    upperArm: 130, forearm: 125,
    props: (j) => [{ kind: 'cushion', at: [j.pelvis[0] - 84, j.pelvis[1] + 3], width: 86, height: 9 }],
    highlight: ['thigh'],
  }),

  // Seen from above: on the side, the top leg drawn back behind the hip line, ankle held in the hand.
  'side-lying-hip-flexor-stretch': pose({
    lying: true, ground: false,
    torso: 270, head: 270,
    thigh: 80, shin: 250, farThigh: 140, farShin: 230,
    upperArm: 80, forearm: 120,
    highlight: ['thigh'],
  }),

  // Face down, one heel drawn towards the buttock with the thigh flat, a small towel under the hip bones.
  'prone-knee-bend-quad-stretch': pose({
    lying: true,
    torso: 270,
    thigh: 90, shin: 190, foot: 240, farThigh: 90, farShin: 90,
    upperArm: 90, forearm: 60,
    props: (j) => [{ kind: 'cushion', at: [j.pelvis[0] - 8, j.pelvis[1] + 5], width: 18, height: 5 }],
    highlight: ['thigh'],
  }),

  // Sat tall on the front of a chair, one knee lifted as high as it goes, hands pressing down on that thigh.
  'seated-hip-flexor-lift-off': pose({
    torso: 180,
    thigh: 120, shin: 5, farThigh: 85, farShin: 5,
    upperArm: 15, forearm: 40,
    props: (j) => [{ kind: 'chair', at: [j.pelvis[0] - 22, j.pelvis[1] + 4], width: 40, height: 34 }],
    highlight: ['thigh'],
  }),

  // The back leg long behind, the front leg folded across (shown returning under the hip), torso upright on the hands.
  'classic-pigeon': pose({
    torso: 180,
    thigh: 270, shin: 270, foot: 270,
    farThigh: 75, farShin: 265,
    upperArm: 20, forearm: 10,
    props: (j) => [{ kind: 'cushion', at: [j.pelvis[0] - 6, j.pelvis[1] + 4], width: 22, height: 7 }],
    highlight: ['thigh'],
  }),

  // On the back: one ankle crossed over the other thigh, both hands behind the lifted thigh.
  'reclined-pigeon': pose({
    torso: 270,
    thigh: 150, shin: 265, farThigh: 190, farShin: 100,
    upperArm: 80, forearm: 120,
    highlight: ['thigh'],
  }),

  // Sat upright on a chair with one ankle crossed over the other thigh, torso hinged a little forward.
  'seated-figure-4': pose({
    torso: 168,
    thigh: 60, shin: 230, farThigh: 85, farShin: 0,
    upperArm: 20, forearm: 50,
    props: (j) => [{ kind: 'chair', at: [j.pelvis[0] - 22, j.pelvis[1] + 4], width: 40, height: 34 }],
    highlight: ['thigh'],
  }),

  // On the back, knees drawn wide towards the chest, hands holding the feet, soles to the ceiling.
  'happy-baby': pose({
    torso: 270,
    thigh: 210, shin: 180, foot: 90, farThigh: 205, farShin: 175,
    upperArm: 130, forearm: 155,
    highlight: ['thigh'],
  }),
};
