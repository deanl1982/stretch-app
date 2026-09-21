import { useRef, useState, type ChangeEvent, type JSX, type ReactNode } from 'react';
import { FLAG_LABELS, type Flag } from '../content/types.ts';
import { downloadBackup, loadProfile, restoreBackup, saveProfile } from '../storage/store.ts';
import type { Profile } from '../storage/types.ts';
import { DISCLAIMER } from '../safety.ts';
import { BUILD, buildAge, commitUrl, formatBuiltAt } from '../buildInfo.ts';
import {
  HOLD_LEVELS,
  HOLD_LEVEL_HINTS,
  HOLD_LEVEL_LABELS,
  REP_PACINGS,
  REP_PACING_HINTS,
  REP_PACING_LABELS,
  type HoldLevel,
  type RepPacing,
} from '../session/phases.ts';
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
    <label className="flex min-h-11 cursor-pointer items-start justify-between gap-4 py-3">
      <span>
        <span className="block">{label}</span>
        {hint !== undefined && <span className="block text-sm text-bone-dim">{hint}</span>}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 size-6 shrink-0 accent-[var(--color-accent)]"
      />
    </label>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }): JSX.Element {
  return (
    <section className="mt-6">
      <h2 className="label mb-2">{title}</h2>
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

      <Section title="How long you hold">
        <Card className="py-2">
          {HOLD_LEVELS.map((level) => (
            <label
              key={level}
              className="flex min-h-11 cursor-pointer items-start gap-3 py-3"
            >
              <input
                type="radio"
                name="holdLevel"
                checked={profile.holdLevel === level}
                onChange={() => update({ holdLevel: level as HoldLevel })}
                className="mt-0.5 size-6 shrink-0 accent-[var(--color-accent)]"
              />
              <span>
                <span className="block">{HOLD_LEVEL_LABELS[level]}</span>
                <span className="block text-sm text-bone-dim">{HOLD_LEVEL_HINTS[level]}</span>
              </span>
            </label>
          ))}
        </Card>
        <p className="mt-2 text-xs leading-relaxed text-bone-dim">
          This scales every hold, and the session length adjusts with it. A few
          positions have a ceiling they will not go past however you set this —
          toes-tucked kneeling is punishing enough without extra time on it.
          Rep-based work is unaffected: you set the pace there and tap when done.
        </p>
      </Section>

      <Section title="How reps run">
        <Card className="py-2">
          {REP_PACINGS.map((pacing) => (
            <label key={pacing} className="flex min-h-11 cursor-pointer items-start gap-3 py-3">
              <input
                type="radio"
                name="repPacing"
                checked={profile.repPacing === pacing}
                onChange={() => update({ repPacing: pacing as RepPacing })}
                className="mt-0.5 size-6 shrink-0 accent-[var(--color-accent)]"
              />
              <span>
                <span className="block">{REP_PACING_LABELS[pacing]}</span>
                <span className="block text-sm text-bone-dim">{REP_PACING_HINTS[pacing]}</span>
              </span>
            </label>
          ))}
        </Card>
        <p className="mt-2 text-xs leading-relaxed text-bone-dim">
          Either way you get a rep counter — the count and a pip per rep — so you
          always know which one you are on. The pace comes from each position's own
          tempo, so a ten-second bird dog rep is not hurried along at the same speed
          as a two-second pulse.
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
          <p role="status" aria-live="polite" className="mt-3 text-sm text-accent">
            {message}
          </p>
        </Card>
      </Section>

      <Section title="This build">
        <Card>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="text-bone-dim">Version</dt>
            <dd className="tabular-nums">{BUILD.version}</dd>

            <dt className="text-bone-dim">Commit</dt>
            <dd className="tabular-nums">
              {commitUrl() === null ? (
                BUILD.sha
              ) : (
                <a
                  href={commitUrl() ?? undefined}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-accent"
                >
                  {BUILD.sha}
                </a>
              )}
            </dd>

            <dt className="text-bone-dim">Built</dt>
            <dd>
              {formatBuiltAt()}
              <span className="text-bone-dim"> · {buildAge()}</span>
            </dd>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-bone-dim">
            If something misbehaves, quote these. The app caches itself to work offline,
            so the version you are running is not always the newest one published — a
            hard refresh picks up the latest.
          </p>
        </Card>
      </Section>

      <p className="mt-8 text-xs leading-relaxed text-bone-dim">{DISCLAIMER}</p>

    </Screen>
  );
}
