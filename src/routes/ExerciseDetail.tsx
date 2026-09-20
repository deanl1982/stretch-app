import type { JSX, ReactNode } from 'react';
import { useParams } from 'react-router';
import { getExercise } from '../content/exercises.ts';
import { PROP_LABELS, REGION_LABELS, describeDose } from '../content/types.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { Button, Card, EvidenceNote, PageTitle, Pill, Screen } from '../ui.tsx';

function Section({ title, children }: { title: string; children: ReactNode }): JSX.Element {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-sm uppercase tracking-wider text-bone-dim">{title}</h2>
      {children}
    </section>
  );
}

export function ExerciseDetail(): JSX.Element {
  const { id } = useParams();
  const exercise = id === undefined ? undefined : getExercise(id);

  if (exercise === undefined) {
    return (
      <Screen>
        <PageTitle sub="That position is not in the library.">Not found</PageTitle>
        <Button to="/library">Back to the library</Button>
      </Screen>
    );
  }

  const pose = getPose(exercise.id);

  return (
    <Screen>
      <PageTitle sub={exercise.summary}>{exercise.name}</PageTitle>

      {pose !== undefined && (
        <Card className="mb-4">
          <Figure
            pose={pose}
            label={`${exercise.name}: ${exercise.summary}`}
            className="mx-auto h-48 w-full max-w-sm text-bone"
          />
        </Card>
      )}

      <div className="flex flex-wrap gap-2">
        {exercise.regions.map((region) => (
          <Pill key={region}>{REGION_LABELS[region]}</Pill>
        ))}
        <Pill>{describeDose(exercise)}</Pill>
        {exercise.officeFriendly && <Pill>works at a desk</Pill>}
        {exercise.barefootOnly && <Pill>barefoot</Pill>}
        {!exercise.dailySafe && <Pill>once or twice a week</Pill>}
      </div>

      <Section title="Why bother">
        <p className="leading-relaxed text-bone-dim">{exercise.why}</p>
      </Section>

      <Section title="Cues">
        <ul className="space-y-1.5 text-lg leading-snug">
          {exercise.cues.map((cue) => (
            <li key={cue}>{cue}</li>
          ))}
        </ul>
      </Section>

      <Section title="What it should feel like">
        <div className="space-y-3">
          <p className="rounded-xl border border-sage/30 bg-sage/5 px-4 py-3 text-bone-dim">
            <span className="mr-2 font-medium text-sage">Yes</span>
            {exercise.shouldFeel}
          </p>
          <p className="rounded-xl border border-rust/40 bg-rust/5 px-4 py-3 text-bone-dim">
            <span className="mr-2 font-medium text-rust">No</span>
            {exercise.shouldNotFeel}
          </p>
        </div>
      </Section>

      <Section title="If it’s too hard">
        <ul className="space-y-2">
          {exercise.regressions.map((regression) => (
            <li key={regression.label}>
              <Card className="py-3">
                <p className="font-medium">{regression.label}</p>
                <p className="mt-0.5 text-sm text-bone-dim">{regression.detail}</p>
                {regression.props.filter((p) => p !== 'none').length > 0 && (
                  <p className="mt-2 text-xs text-bone-dim">
                    Needs: {regression.props.filter((p) => p !== 'none').map((p) => PROP_LABELS[p]).join(', ')}
                  </p>
                )}
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="When you’re ready for more">
        <ul className="space-y-2">
          {exercise.progressions.map((progression) => (
            <li key={progression.label}>
              <Card className="py-3">
                <p className="font-medium">{progression.label}</p>
                <p className="mt-0.5 text-sm text-bone-dim">{progression.detail}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      {exercise.evidenceNote !== undefined && <EvidenceNote note={exercise.evidenceNote} />}

      <p className="mt-6 text-xs text-bone-dim">From: {exercise.source.join(' · ')}</p>

      <Button to="/library" className="mt-6">
        Back to the library
      </Button>
    </Screen>
  );
}
