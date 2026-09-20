import type { JSX } from 'react';
import { EXERCISES } from '../content/exercises.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { PageTitle, Screen } from '../ui.tsx';

/**
 * Development QA sheet. Every pose on one page, so a bad set of coordinates is
 * obvious at a glance rather than being discovered mid-session.
 */
export function Figures(): JSX.Element {
  return (
    <Screen className="max-w-5xl">
      <PageTitle sub="Every pose in the library. Development view.">Figures</PageTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {EXERCISES.map((exercise) => {
          const pose = getPose(exercise.id);
          return (
            <figure key={exercise.id} className="m-0">
              <div
                className={`rounded-xl border bg-surface ${
                  pose === undefined ? 'border-rust' : 'border-edge'
                }`}
              >
                {pose === undefined ? (
                  <div className="flex h-24 items-center justify-center text-sm text-rust">
                    no pose
                  </div>
                ) : (
                  <Figure pose={pose} label={exercise.name} className="w-full text-bone" />
                )}
              </div>
              <figcaption className="px-1 py-2 text-xs text-bone-dim">
                {exercise.name}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </Screen>
  );
}
