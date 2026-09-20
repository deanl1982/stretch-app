import { useState, type JSX } from 'react';
import { useNavigate } from 'react-router';
import { FLAG_LABELS, type Flag } from '../content/types.ts';
import { loadProfile, saveProfile } from '../storage/store.ts';
import { DISCLAIMER, EMERGENCY_FLAGS } from '../safety.ts';
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

export function Onboarding(): JSX.Element {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<Flag>>(new Set());

  const toggle = (flag: Flag): void => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(flag)) next.delete(flag);
      else next.add(flag);
      return next;
    });
  };

  const finish = (): void => {
    saveProfile({ ...loadProfile(), exclusions: [...selected], onboarded: true });
    navigate('/', { replace: true });
  };

  return (
    <Screen>
      <PageTitle sub="One question before you start, then never again.">
        Anything to work around?
      </PageTitle>

      <p className="mb-5 leading-relaxed text-bone-dim">
        Tick anything that applies. We will take the relevant positions out of your draws
        entirely rather than just warning you about them. You can change this later.
      </p>

      <ul className="space-y-2">
        {ASKABLE.map((flag) => (
          <li key={flag}>
            <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-edge bg-surface px-4 py-3 transition-colors hover:border-bone-dim">
              <input
                type="checkbox"
                checked={selected.has(flag)}
                onChange={() => toggle(flag)}
                className="h-5 w-5 accent-[var(--color-amber)]"
              />
              <span>{FLAG_LABELS[flag]}</span>
            </label>
          </li>
        ))}
      </ul>

      <Card className="mt-6 border-rust/40">
        <h2 className="font-medium text-rust">Go to A&amp;E, not to an app</h2>
        <p className="mt-2 text-sm text-bone-dim">
          Back pain is almost never serious. But get seen straight away if you have back
          pain together with any of:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-bone-dim">
          {EMERGENCY_FLAGS.map((flag) => (
            <li key={flag}>{flag}</li>
          ))}
        </ul>
      </Card>

      <p className="mt-5 text-xs leading-relaxed text-bone-dim">{DISCLAIMER}</p>

      <Button variant="primary" onClick={finish} className="mt-6 w-full py-4 text-lg">
        {selected.size === 0 ? 'Nothing to avoid — start' : `Save and start`}
      </Button>
    </Screen>
  );
}
