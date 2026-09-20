import { useMemo, type JSX } from 'react';
import { Link } from 'react-router';
import { getExercise } from '../content/exercises.ts';
import { describeDose } from '../content/types.ts';
import { useFavourites } from '../storage/favourites.ts';
import { getPose } from '../figures/poses.ts';
import { Figure } from '../figures/Figure.tsx';
import { Button, Card, Empty, FavouriteButton, PageTitle, Screen } from '../ui.tsx';

export function Favourites(): JSX.Element {
  const favourites = useFavourites();
  const exercises = useMemo(
    () =>
      favourites
        .map(getExercise)
        .filter((exercise): exercise is NonNullable<typeof exercise> => exercise !== undefined),
    [favourites],
  );

  return (
    <Screen>
      <PageTitle sub="The positions you keep coming back to.">Favourites</PageTitle>

      {exercises.length === 0 ? (
        <Empty>
          Nothing starred yet. Tap the star on any position in the library and it will
          show up here.
        </Empty>
      ) : (
        <>
          <Button to="/build?from=favourites" variant="primary" className="mb-5 w-full py-4 text-lg">
            Build a workout from these
          </Button>

          <ul className="space-y-2">
            {exercises.map((exercise) => {
              const pose = getPose(exercise.id);
              return (
                <li key={exercise.id}>
                  <Link to={`/library/${exercise.id}`} className="block">
                    <Card className="flex items-center gap-3 py-3 transition-colors hover:border-bone-dim">
                      {pose !== undefined && (
                        <Figure pose={pose} label="" className="h-14 w-20 shrink-0 text-bone-dim" />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="font-medium leading-tight">{exercise.name}</p>
                        <p className="mt-0.5 text-sm text-bone-dim">{describeDose(exercise)}</p>
                      </div>
                      <FavouriteButton id={exercise.id} />
                    </Card>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </Screen>
  );
}
