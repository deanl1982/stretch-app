import type { Pose } from './types.ts';

/**
 * One pose per exercise, keyed by exercise id.
 *
 * Conventions: the figure faces right, the ground is at y=132, and a standing body
 * runs from about y=13 at the top of the head to y=132 at the heel. Shoulder is taken
 * as `neck` and hip as `pelvis`, so most poses are eight points.
 */
export const POSES: Record<string, Pose> = {
  // ─────────────────────────────────────────────────────────────── HIPS ──

  'hip-cars': {
    head: [95, 20], neck: [95, 38], pelvis: [95, 80],
    elbow: [74, 52], hand: [58, 48],
    knee: [95, 106], ankle: [95, 130], toe: [107, 132],
    farKnee: [122, 76], farAnkle: [130, 100], farToe: [140, 104],
    props: [{ kind: 'wall', at: [52, 16], to: [52, 132] }],
    highlight: ['thigh'],
  },

  'hip-swivels': {
    head: [100, 66], neck: [100, 84], pelvis: [100, 120],
    elbow: [84, 104], hand: [72, 126],
    knee: [126, 106], ankle: [140, 124], toe: [152, 126],
    farKnee: [120, 112], farAnkle: [136, 128], farToe: [148, 130],
    highlight: ['thigh'],
  },

  'shin-box': {
    head: [100, 66], neck: [100, 84], pelvis: [100, 120],
    elbow: [112, 100], hand: [124, 112],
    knee: [128, 116], ankle: [150, 126], toe: [160, 124],
    farKnee: [76, 122], farAnkle: [64, 110], farToe: [60, 100],
    props: [{ kind: 'cushion', at: [88, 124], width: 24, height: 8 }],
  },

  'ninety-ninety-lean': {
    head: [142, 88], neck: [126, 98], pelvis: [100, 120],
    elbow: [142, 112], hand: [154, 122],
    knee: [130, 116], ankle: [152, 126], toe: [162, 124],
    farKnee: [76, 122], farAnkle: [64, 110], farToe: [60, 100],
    props: [{ kind: 'cushion', at: [88, 124], width: 24, height: 8 }],
    highlight: ['thigh'],
  },

  'ninety-ninety-isometric': {
    head: [100, 66], neck: [100, 84], pelvis: [100, 120],
    elbow: [86, 100], hand: [76, 116],
    knee: [128, 116], ankle: [150, 126], toe: [160, 124],
    farKnee: [74, 122], farAnkle: [62, 110], farToe: [58, 100],
  },

  'shin-box-hip-lift': {
    head: [98, 54], neck: [100, 72], pelvis: [104, 102],
    elbow: [116, 94], hand: [126, 118],
    knee: [130, 110], ankle: [150, 126], toe: [160, 124],
    farKnee: [80, 114], farAnkle: [66, 104], farToe: [60, 96],
    highlight: ['thigh'],
  },

  'frog-rock-back': {
    head: [134, 98], neck: [118, 102], pelvis: [70, 104],
    elbow: [126, 116], hand: [132, 130],
    knee: [64, 122], ankle: [52, 128], toe: [44, 130],
    farKnee: [72, 118], farAnkle: [60, 126], farToe: [52, 128],
    highlight: ['thigh'],
  },

  'couch-stretch': {
    head: [100, 38], neck: [100, 56], pelvis: [100, 92],
    elbow: [106, 74], hand: [114, 90],
    knee: [126, 110], ankle: [126, 130], toe: [138, 132],
    farKnee: [76, 120], farAnkle: [62, 112], farToe: [56, 104],
    props: [{ kind: 'chair', at: [40, 108], width: 38, height: 30 }],
    highlight: ['thigh'],
  },

  'chair-hover': {
    head: [104, 48], neck: [104, 66], pelvis: [104, 100],
    elbow: [92, 84], hand: [84, 106],
    knee: [130, 104], ankle: [130, 128], toe: [142, 130],
    props: [{ kind: 'chair', at: [76, 108], width: 46, height: 34 }],
    highlight: ['thigh'],
  },

  // ──────────────────────────────────────────────────────── HAMSTRINGS ──

  'dowel-hinge': {
    head: [148, 58], neck: [134, 64], pelvis: [96, 80],
    elbow: [140, 82], hand: [146, 94],
    knee: [94, 106], ankle: [94, 130], toe: [106, 132],
    props: [{ kind: 'dowel', at: [156, 50], to: [92, 84] }],
    highlight: ['spine', 'thigh'],
  },

  'standing-good-morning': {
    head: [150, 60], neck: [136, 66], pelvis: [96, 80],
    elbow: [146, 84], hand: [152, 96],
    knee: [94, 106], ankle: [94, 130], toe: [106, 132],
    highlight: ['thigh'],
  },

  'good-morning-pulse': {
    head: [152, 68], neck: [138, 72], pelvis: [94, 78],
    elbow: [148, 90], hand: [152, 104],
    knee: [92, 106], ankle: [92, 130], toe: [104, 132],
    highlight: ['thigh'],
  },

  'hands-on-thighs-straighten': {
    head: [146, 62], neck: [132, 68], pelvis: [96, 80],
    elbow: [114, 84], hand: [98, 96],
    knee: [94, 106], ankle: [94, 130], toe: [106, 132],
    farKnee: [110, 108], farAnkle: [112, 130], farToe: [124, 132],
    highlight: ['thigh'],
  },

  'active-slr': {
    head: [38, 116], neck: [54, 118], pelvis: [110, 122],
    elbow: [76, 128], hand: [92, 130],
    knee: [126, 96], ankle: [140, 72], toe: [147, 62],
    farKnee: [140, 126], farAnkle: [168, 128], farToe: [178, 122],
    highlight: ['thigh'],
  },

  'sciatic-slider': {
    head: [92, 50], neck: [92, 70], pelvis: [92, 102],
    elbow: [100, 86], hand: [110, 100],
    knee: [120, 104], ankle: [150, 98], toe: [158, 92],
    props: [{ kind: 'chair', at: [60, 106], width: 46, height: 32 }],
    highlight: ['shin'],
  },

  'long-sit': {
    head: [86, 62], neck: [86, 82], pelvis: [86, 118],
    elbow: [96, 100], hand: [108, 120],
    knee: [120, 124], ankle: [152, 127], toe: [160, 118],
    props: [{ kind: 'cushion', at: [76, 124], width: 20, height: 8 }],
    highlight: ['thigh'],
  },

  // ─────────────────────────────────────────────────────── ANKLES/FEET ──

  'wall-ankle-drive': {
    head: [110, 34], neck: [110, 52], pelvis: [112, 86],
    elbow: [134, 66], hand: [156, 62],
    knee: [142, 108], ankle: [136, 130], toe: [150, 132],
    farKnee: [92, 110], farAnkle: [76, 128], farToe: [66, 130],
    props: [{ kind: 'wall', at: [166, 16], to: [166, 132] }],
    highlight: ['shin'],
  },

  'soleus-calf-stretch': {
    head: [106, 32], neck: [108, 50], pelvis: [112, 84],
    elbow: [118, 66], hand: [132, 62],
    knee: [126, 104], ankle: [134, 128], toe: [147, 116],
    props: [{ kind: 'step', at: [132, 114], width: 48, height: 18 }],
    highlight: ['shin'],
  },

  'gastroc-calf-stretch': {
    head: [116, 40], neck: [110, 56], pelvis: [100, 84],
    elbow: [136, 64], hand: [158, 58],
    knee: [86, 106], ankle: [72, 130], toe: [84, 132],
    farKnee: [124, 104], farAnkle: [134, 128], farToe: [146, 130],
    props: [{ kind: 'wall', at: [168, 16], to: [168, 132] }],
    highlight: ['shin'],
  },

  'tib-raise': {
    head: [62, 34], neck: [64, 52], pelvis: [72, 86],
    elbow: [74, 70], hand: [80, 88],
    knee: [94, 106], ankle: [110, 130], toe: [108, 114],
    props: [{ kind: 'wall', at: [56, 16], to: [56, 132] }],
    highlight: ['shin'],
  },

  seiza: {
    head: [104, 58], neck: [104, 76], pelvis: [104, 112],
    elbow: [114, 96], hand: [124, 112],
    knee: [132, 128], ankle: [104, 130], toe: [88, 130],
    highlight: ['shin', 'foot'],
  },

  'toes-tucked-kneeling': {
    head: [104, 54], neck: [104, 72], pelvis: [104, 108],
    elbow: [114, 92], hand: [124, 110],
    knee: [134, 128], ankle: [104, 126], toe: [97, 112],
    highlight: ['foot'],
  },

  'deep-squat-hold': {
    head: [106, 58], neck: [104, 76], pelvis: [100, 112],
    elbow: [116, 92], hand: [122, 108],
    knee: [132, 102], ankle: [120, 130], toe: [136, 132],
    farKnee: [74, 104], farAnkle: [86, 130], farToe: [70, 132],
    highlight: ['shin', 'thigh'],
  },

  'plantar-fascia-stretch': {
    head: [88, 52], neck: [88, 72], pelvis: [88, 104],
    elbow: [102, 80], hand: [90, 88],
    knee: [120, 100], ankle: [98, 94], toe: [88, 88],
    farKnee: [116, 106], farAnkle: [118, 130], farToe: [130, 132],
    props: [{ kind: 'chair', at: [58, 108], width: 48, height: 32 }],
    highlight: ['foot'],
  },

  // ─────────────────────────────────────────────────────── BACK/SPINE ──

  'cat-cow': {
    head: [138, 92], neck: [122, 94], pelvis: [74, 98],
    elbow: [126, 112], hand: [130, 130],
    knee: [70, 116], ankle: [58, 130], toe: [50, 132],
    farKnee: [78, 114], farAnkle: [66, 128], farToe: [58, 130],
    highlight: ['spine'],
  },

  'open-book': {
    head: [44, 108], neck: [60, 110], pelvis: [114, 114],
    elbow: [66, 88], hand: [76, 70],
    knee: [132, 96], ankle: [154, 102], toe: [164, 98],
    props: [{ kind: 'cushion', at: [126, 100], width: 16, height: 8 }],
    highlight: ['spine'],
  },

  'bird-dog': {
    head: [142, 94], neck: [126, 98], pelvis: [80, 100],
    elbow: [130, 114], hand: [134, 130],
    knee: [58, 96], ankle: [38, 92], toe: [28, 92],
    farElbow: [148, 88], farHand: [170, 82],
    farKnee: [76, 118], farAnkle: [66, 130],
    highlight: ['spine'],
  },

  'side-bridge': {
    head: [46, 88], neck: [62, 94], pelvis: [120, 112],
    elbow: [60, 116], hand: [48, 126],
    knee: [146, 120], ankle: [170, 128], toe: [180, 124],
    highlight: ['spine'],
  },

  'tspine-extension': {
    head: [58, 106], neck: [76, 108], pelvis: [124, 114],
    elbow: [68, 90], hand: [58, 98],
    knee: [148, 96], ankle: [166, 128], toe: [178, 130],
    props: [{ kind: 'roller', at: [104, 118], width: 9 }],
    highlight: ['spine'],
  },

  'childs-pose': {
    head: [128, 122], neck: [112, 120], pelvis: [70, 112],
    elbow: [140, 126], hand: [162, 128],
    knee: [72, 126], ankle: [54, 130], toe: [46, 128],
    highlight: ['spine'],
  },

  'supine-breathing': {
    head: [40, 114], neck: [56, 116], pelvis: [110, 120],
    elbow: [76, 108], hand: [92, 114],
    knee: [128, 102], ankle: [158, 100], toe: [168, 94],
    props: [{ kind: 'chair', at: [126, 102], width: 48, height: 28 }],
    highlight: ['spine'],
  },

  'ground-time': {
    head: [98, 60], neck: [98, 80], pelvis: [98, 116],
    elbow: [110, 98], hand: [120, 116],
    knee: [128, 120], ankle: [102, 129], toe: [88, 126],
    farKnee: [68, 122], farAnkle: [94, 130], farToe: [108, 127],
    props: [{ kind: 'cushion', at: [88, 126], width: 22, height: 7 }],
  },
};

export function getPose(exerciseId: string): Pose | undefined {
  return POSES[exerciseId];
}
