import type { Exercise } from './types.ts';

/**
 * Name search over the exercise library.
 *
 * Matching covers `aka` as well as `name`, because the alternative names are
 * what people actually call these: someone hunting the bent-knee calf stretch
 * types "soleus", and someone after thread the needle does not know it is filed
 * under Open Book. Nothing else is searched — matching the `targets` list would
 * turn "hamstring" into half the library, which is what the region chips are
 * for.
 */

/**
 * Fold a string down to bare lowercase words.
 *
 * Accents go (so "vajrasana" survives however it is typed) and punctuation
 * becomes a space, so "90/90" is found by "90 90" and "Bent-Knee" by "bent
 * knee".
 */
export function normalise(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function haystack(exercise: Exercise): string {
  return normalise([exercise.name, ...(exercise.aka ?? [])].join(' '));
}

/** Every word typed must appear somewhere, so word order does not matter. */
export function matchesQuery(exercise: Exercise, query: string): boolean {
  const tokens = normalise(query).split(' ').filter((token) => token !== '');
  if (tokens.length === 0) return true;
  const target = haystack(exercise);
  return tokens.every((token) => target.includes(token));
}

/**
 * Lower is better. A hit on the real name beats a hit on an alias, and a name
 * that starts with what you typed beats one that merely contains it — so typing
 * "shin" puts Shin Box above Shin Box Hip Lift rather than sorting alphabetically
 * and burying the obvious answer.
 */
export function matchRank(exercise: Exercise, query: string): number {
  const q = normalise(query);
  if (q === '') return 0;
  const name = normalise(exercise.name);
  if (name === q) return 0;
  if (name.startsWith(q)) return 1;
  if (name.includes(q)) return 2;
  if ((exercise.aka ?? []).some((alias) => normalise(alias).startsWith(q))) return 3;
  return 4;
}

/** Filter and order a list by a search query. An empty query changes nothing. */
export function searchExercises(exercises: Exercise[], query: string): Exercise[] {
  if (normalise(query) === '') return exercises;
  return exercises
    .filter((exercise) => matchesQuery(exercise, query))
    .sort(
      (a, b) =>
        matchRank(a, query) - matchRank(b, query) || a.name.localeCompare(b.name),
    );
}
