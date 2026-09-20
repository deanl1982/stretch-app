import { useRef, useState, type ChangeEvent, type JSX, type ReactNode } from 'react';
import { FLAG_LABELS, type Flag } from '../content/types.ts';
import { downloadBackup, loadProfile, restoreBackup, saveProfile } from '../storage/store.ts';
import type { Profile } from '../storage/types.ts';
import {
  ANKLE_NOTE,
  DISCLAIMER,
  EMERGENCY_FLAGS,
  LEG_RULE,
  NERVE_TEST,
  SEE_SOMEONE_FLAGS,
} from '../safety.ts';
import { Button, Card, PageTitle, Screen } from '../ui.tsx';

const ASKABLE: Flag[] = [
  'knee',
  'hipReplacement',
  'backPain',
  'sciatica',
  'balance',
  'groin',
  'shoulder',
  'osteoporosis',
  'achilles',
  'plantarFascia',
  'bigToe',
  'bloodPressure',
  'wrist',
];

function Toggle({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}): JSX.Element {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 py-3">
      <span>
        <span className="block">{label}</span>
        {hint !== undefined && <span className="block text-sm text-bone-dim">{hint}</span>}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-amber)]"
      />
    </label>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }): JSX.Element {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-sm uppercase tracking-wider text-bone-dim">{title}</h2>
      {children}
    </section>
  );
}

export function Settings(): JSX.Element {
  const [profile, setProfile] = useState(loadProfile);
  const [message, setMessage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const update = (patch: Partial<Profile>): void => {
    const next = { ...profile, ...patch };
    setProfile(next);
    saveProfile(next);
  };

  const toggleFlag = (flag: Flag): void => {
    const has = profile.exclusions.includes(flag);
    update({
      exclusions: has
        ? profile.exclusions.filter((f) => f !== flag)
        : [...profile.exclusions, flag],
    });
  };

  const onRestore = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file === undefined) return;
    void file.text().then((text) => {
      const result = restoreBackup(text);
      setMessage(result.message);
      if (result.ok) setProfile(loadProfile());
    });
    event.target.value = '';
  };

  return (
    <Screen>
      <PageTitle>Settings</PageTitle>

      <Section title="Things to work around">
        <Card className="divide-y divide-edge py-0">
          {ASKABLE.map((flag) => (
            <Toggle
              key={flag}
              label={FLAG_LABELS[flag]}
              checked={profile.exclusions.includes(flag)}
              onChange={() => toggleFlag(flag)}
            />
          ))}
        </Card>
        <p className="mt-2 text-xs text-bone-dim">
          Anything ticked is removed from your draws completely, not just flagged.
        </p>
      </Section>

      <Section title="Sessions">
        <Card className="divide-y divide-edge py-0">
          <Toggle
            label="Pure chaos"
            hint="Draw the whole session completely unstructured, with no gentle opener or closing rest position."
            checked={profile.pureChaos}
            onChange={(value) => update({ pureChaos: value })}
          />
          <Toggle
            label="Desk only"
            hint="Only draw positions you can do in an office without getting on the floor."
            checked={profile.officeOnly}
            onChange={(value) => update({ officeOnly: value })}
          />
          <Toggle
            label="Sound"
            hint="Chimes for switching sides and moving on."
            checked={profile.sound}
            onChange={(value) => update({ sound: value })}
          />
          <Toggle
            label="Spoken cues"
            hint="Reads the position name and first cue aloud."
            checked={profile.voice}
            onChange={(value) => update({ voice: value })}
          />
        </Card>
      </Section>

      <Section title="Your data">
        <Card>
          <p className="text-sm leading-relaxed text-bone-dim">
            Everything is stored in this browser and nowhere else. There is no account
            and no server — which also means clearing your browser data will wipe your
            history, and your phone keeps a separate streak from your laptop. Take a
            backup now and then.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button onClick={downloadBackup}>Download backup</Button>
            <Button onClick={() => fileRef.current?.click()}>Restore from backup</Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              onChange={onRestore}
              className="hidden"
            />
          </div>
          {message !== null && <p className="mt-3 text-sm text-amber">{message}</p>}
        </Card>
      </Section>

      <Section title="Two rules worth knowing">
        <div className="space-y-3">
          <Card>
            <h3 className="font-medium">The leg rule</h3>
            <p className="mt-1 text-sm leading-relaxed text-bone-dim">{LEG_RULE}</p>
          </Card>
          <Card>
            <h3 className="font-medium">Nerve or muscle?</h3>
            <p className="mt-1 text-sm leading-relaxed text-bone-dim">{NERVE_TEST}</p>
          </Card>
          <Card>
            <h3 className="font-medium">If your heels will not go down</h3>
            <p className="mt-1 text-sm leading-relaxed text-bone-dim">{ANKLE_NOTE}</p>
          </Card>
        </div>
      </Section>

      <Section title="When to see someone">
        <Card className="border-rust/40">
          <h3 className="font-medium text-rust">Go to A&amp;E straight away</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-bone-dim">
            {EMERGENCY_FLAGS.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
          <h3 className="mt-4 font-medium">Book with a doctor soon</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-bone-dim">
            {SEE_SOMEONE_FLAGS.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
        </Card>
        <p className="mt-3 text-xs leading-relaxed text-bone-dim">{DISCLAIMER}</p>
      </Section>
    </Screen>
  );
}
