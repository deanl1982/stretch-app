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
  /** Set once the safety screen has been seen, so we stop showing it. */
  onboarded: boolean;
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

export interface Backup {
  app: 'groundwork';
  version: number;
  exportedAt: string;
  profile: Profile;
  history: SessionRecord[];
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
  onboarded: false,
};
