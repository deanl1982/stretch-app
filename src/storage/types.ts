import type { Flag, Prop } from '../content/types.ts';

export const SCHEMA_VERSION = 1;

export interface Profile {
  createdAt: string;
  /** Conditions to work around. Matching exercises are removed from the pool. */
  exclusions: Flag[];
  /** Props the user has. `null` means "assume I have everything". */
  availableProps: Prop[] | null;
  defaultMinutes: number;
  sound: boolean;
  voice: boolean;
  /** Drop the opener/closer structure and draw sessions completely unconstrained. */
  pureChaos: boolean;
  officeOnly: boolean;
}

export interface SessionRecord {
  id: string;
  dateISO: string;
  seed: string;
  budgetSeconds: number;
  plannedIds: string[];
  completedIds: string[];
  skippedIds: string[];
  totalSeconds: number;
}

/**
 * A workout the user assembled themselves, saved to be run again.
 *
 * Order is the user's own — we do not silently reshuffle what they built.
 */
export interface Routine {
  id: string;
  name: string;
  exerciseIds: string[];
  createdAt: string;
  lastUsedAt?: string;
}

export interface Backup {
  app: 'groundwork';
  version: number;
  exportedAt: string;
  profile: Profile;
  history: SessionRecord[];
  favourites?: string[];
  routines?: Routine[];
}

export const DEFAULT_PROFILE: Profile = {
  createdAt: new Date().toISOString(),
  exclusions: [],
  availableProps: null,
  defaultMinutes: 20,
  sound: true,
  voice: false,
  pureChaos: false,
  officeOnly: false,
};
