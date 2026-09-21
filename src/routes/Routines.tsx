import { useMemo, useState, type JSX } from 'react';
import { useNavigate } from 'react-router';
import { getExercise } from '../content/exercises.ts';
import { estimateSeconds } from '../session/phases.ts';
import { saveActive } from '../session/active.ts';
import { deleteRoutine, loadRoutines, renameRoutine, touchRoutine } from '../storage/routines.ts';
import type { Routine } from '../storage/types.ts';
import { Button, Card, Empty, PageTitle, Screen } from '../ui.tsx';

export function routineSeconds(routine: Routine): number {
  return routine.exerciseIds
    .map(getExercise)
    .reduce((sum, exercise) => sum + (exercise === undefined ? 0 : estimateSeconds(exercise)), 0);
}

/** Start a saved workout, recording that it was used so the list stays useful. */
export function startRoutine(routine: Routine): void {
  touchRoutine(routine.id);
  saveActive({
    seed: routine.id,
    budgetSeconds: routineSeconds(routine),
    plannedIds: routine.exerciseIds,
    index: 0,
    completedIds: [],
    skippedIds: [],
    startedAt: new Date().toISOString(),
  });
}

export function Routines(): JSX.Element {
  const navigate = useNavigate();
  const [routines, setRoutines] = useState(loadRoutines);
  const [renaming, setRenaming] = useState<string | null>(null);
  const [draftName, setDraftName] = useState('');
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const refresh = (): void => setRoutines(loadRoutines());

  const run = (routine: Routine): void => {
    startRoutine(routine);
    navigate('/session/play');
  };

  const names = useMemo(
    () =>
      new Map(
        routines.map((routine) => [
          routine.id,
          routine.exerciseIds
            .map((id) => getExercise(id)?.name)
            .filter((name): name is string => name !== undefined),
        ]),
      ),
    [routines],
  );

  return (
    <Screen>
      <PageTitle sub="Workouts you built yourself.">Your workouts</PageTitle>

      {routines.length === 0 ? (
        <>
          <Empty>
            Nothing saved yet. Build one from the positions you actually use and it will
            live here.
          </Empty>
          <Button to="/build" variant="primary" className="mt-4 w-full py-4 text-lg">
            Build a workout
          </Button>
        </>
      ) : (
        <>
          <ul className="space-y-3">
            {routines.map((routine) => {
              const list = names.get(routine.id) ?? [];
              return (
                <li key={routine.id}>
                  <Card>
                    {renaming === routine.id ? (
                      <div className="flex gap-2">
                        <input
                          autoFocus
                          value={draftName}
                          onChange={(event) => setDraftName(event.target.value)}
                          className="min-w-0 flex-1 min-h-11 rounded-xl border border-control bg-surface-2 px-4 py-2 focus:border-accent"
                        />
                        <Button
                          variant="primary"
                          onClick={() => {
                            renameRoutine(routine.id, draftName);
                            setRenaming(null);
                            refresh();
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-3">
                          <h2 className="text-lg font-medium">{routine.name}</h2>
                          <span className="shrink-0 text-sm text-bone-dim">
                            {routine.exerciseIds.length} ·{' '}
                            {Math.max(1, Math.round(routineSeconds(routine) / 60))} min
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-bone-dim">
                          {list.join(' · ')}
                        </p>
                      </>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button variant="primary" onClick={() => run(routine)} className="flex-1">
                        Start
                      </Button>
                      <Button to={`/build?routine=${routine.id}`}>Edit</Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setRenaming(routine.id);
                          setDraftName(routine.name);
                        }}
                      >
                        Rename
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => setConfirmDelete(routine.id)}
                        ariaLabel={`Delete ${routine.name}`}
                      >
                        Delete
                      </Button>
                    </div>

                    {confirmDelete === routine.id && (
                      <div className="mt-3 rounded-xl border border-negative/40 bg-negative/5 p-3">
                        <p className="text-sm text-bone-dim">
                          Delete “{routine.name}”? This cannot be undone.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteRoutine(routine.id);
                              setConfirmDelete(null);
                              refresh();
                            }}
                          >
                            Delete
                          </Button>
                          <Button variant="ghost" onClick={() => setConfirmDelete(null)}>
                            Keep it
                          </Button>
                        </div>
                      </div>
                    )}
                  </Card>
                </li>
              );
            })}
          </ul>

          <Button to="/build" className="mt-5 w-full">
            Build another
          </Button>
        </>
      )}
    </Screen>
  );
}
