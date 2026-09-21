/**
 * The exercise content model.
 *
 * Exercises are authored as typed TS data rather than JSON so the compiler catches a
 * malformed entry at build time, and so authoring ~45 of them gets autocomplete.
 */

export type Region = 'hips' | 'hamstrings' | 'ankles' | 'back' | 'fullBody';

export const REGION_LABELS: Record<Region, string> = {
  hips: 'Hips',
  hamstrings: 'Hamstrings',
  ankles: 'Ankles & feet',
  back: 'Back & spine',
  fullBody: 'Full body',
};

/** Physical objects an exercise needs. `none` means bare floor. */
export type Prop =
  | 'none'
  | 'cushion'
  | 'block'
  | 'chair'
  | 'wall'
  | 'doorframe'
  | 'towel'
  | 'wedge'
  | 'dowel'
  | 'roller'
  | 'band'
  | 'step';

export const PROP_LABELS: Record<Prop, string> = {
  none: 'Nothing',
  cushion: 'Cushion or folded towel',
  block: 'Yoga block',
  chair: 'Stable chair',
  wall: 'Wall',
  doorframe: 'Doorframe or post',
  towel: 'Rolled towel',
  wedge: 'Heel wedge, book or plate',
  dowel: 'Broomstick or dowel',
  roller: 'Foam roller',
  band: 'Resistance band',
  step: 'Step or stair',
};

/**
 * Things a user can tell us to avoid. An exercise listing a flag in
 * `contraindications` is removed from the pool entirely when that flag is active —
 * not merely warned about.
 */
export type Flag =
  | 'knee'
  | 'hipReplacement'
  | 'backPain'
  | 'sciatica'
  | 'balance'
  | 'groin'
  | 'bloodPressure'
  | 'shoulder'
  | 'osteoporosis'
  | 'achilles'
  | 'plantarFascia'
  | 'bigToe'
  | 'wrist';

export const FLAG_LABELS: Record<Flag, string> = {
  knee: 'Knee problems, or a knee replacement',
  hipReplacement: 'Hip replacement',
  backPain: 'Back pain that flares when I bend',
  sciatica: 'Sciatica, or pain down the leg',
  balance: 'Balance problems or dizziness',
  groin: 'Groin strain history',
  bloodPressure: 'High blood pressure',
  shoulder: 'Shoulder problems',
  osteoporosis: 'Osteoporosis, or a past spinal fracture',
  achilles: 'Achilles or heel pain',
  plantarFascia: 'Plantar fasciitis',
  bigToe: 'Big toe pain or stiffness',
  wrist: 'Wrist problems',
};

/**
 * Where an exercise sits in a session.
 *
 * The random generator pins one `opener` first and one `rest` last, then fills the
 * middle at random from `main` and `load`. Deep knee-flexion positions must not be
 * drawn cold, which is the entire reason this field exists.
 */
export type Role = 'opener' | 'main' | 'load' | 'rest';

/** 1 = anyone on day one. 3 = earn it first. */
export type Intensity = 1 | 2 | 3;

export type Dose =
  | { kind: 'hold'; seconds: number; sets: number; perSide: boolean }
  | { kind: 'reps'; reps: number; sets: number; perSide: boolean; tempoNote?: string };

export interface Variation {
  label: string;
  detail: string;
  props: Prop[];
}

export interface Exercise {
  /** Stable slug. Used in URLs and in stored history — never rename one in place. */
  id: string;
  name: string;
  aka?: string[];
  regions: Region[];
  role: Role;
  intensity: Intensity;

  /** One line, plain English, no jargon. */
  summary: string;
  /** Why it matters to a man who lifts or runs and sits for work. */
  why: string;
  /** Tissues and joint actions, e.g. 'soleus', 'hip internal rotation'. */
  targets: string[];

  dose: Dose;

  /** 2-4, imperative voice, shown during the hold. */
  cues: string[];
  shouldFeel: string;
  shouldNotFeel: string;

  regressions: Variation[];
  progressions: Omit<Variation, 'props'>[];

  props: Prop[];
  officeFriendly: boolean;
  barefootOnly: boolean;
  contraindications: Flag[];

  /** False for heavy eccentric work — capped at twice a week by the generator. */
  dailySafe: boolean;
  /** Hard ceiling on hold length regardless of dose, e.g. toes-tucked kneeling. */
  maxHoldSeconds?: number;

  /**
   * Only offer this exercise when the user has declared the given flag — the inverse
   * of `contraindications`. Used for items that treat a specific problem rather than
   * building general range, e.g. the sciatic nerve slider, which is the wrong thing
   * to hand someone with no nerve symptoms.
   */
  requiresFlag?: Flag;

  /** Which transcript or coach this came from. */
  source: string[];
  /**
   * Shown behind a collapsed "Is this actually true?" disclosure. Present wherever
   * the source material's claim needed correcting against the evidence.
   */
  evidenceNote?: string;
}

/** Body areas in the order they are presented, everywhere. */
export const REGION_ORDER: Region[] = ['hips', 'hamstrings', 'ankles', 'back', 'fullBody'];

export function isRegion(value: string): value is Region {
  return (REGION_ORDER as string[]).includes(value);
}

/** Parse a `focus=hips,back` URL parameter into regions, ignoring anything unknown. */
export function parseRegions(value: string | null): Region[] {
  if (value === null || value.trim() === '') return [];
  return value.split(',').map((part) => part.trim()).filter(isRegion);
}

/** "Hips and ankles & feet" — a focus list rendered for a human. */
export function describeRegions(regions: readonly Region[]): string {
  const names = regions.map((region) => REGION_LABELS[region].toLowerCase());
  if (names.length === 0) return 'everything';
  if (names.length === 1) return names[0] ?? 'everything';
  return `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;
}
