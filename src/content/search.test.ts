import { describe, expect, it } from 'vitest';
import { EXERCISES, getExercise } from './exercises.ts';
import { matchesQuery, normalise, searchExercises } from './search.ts';

const find = (query: string): string[] =>
  searchExercises(EXERCISES, query).map((exercise) => exercise.id);

describe('normalise', () => {
  it('folds case, accents and punctuation', () => {
    expect(normalise('Bent-Knee Calf Stretch')).toBe('bent knee calf stretch');
    expect(normalise('90/90')).toBe('90 90');
    expect(normalise('  Vajrāsana ')).toBe('vajrasana');
  });
});

describe('matchesQuery', () => {
  const shinBox = getExercise('shin-box');

  it('matches an empty query against everything', () => {
    expect(EXERCISES.every((e) => matchesQuery(e, '   '))).toBe(true);
  });

  it('ignores the order of what was typed', () => {
    expect(shinBox).toBeDefined();
    if (shinBox === undefined) return;
    expect(matchesQuery(shinBox, 'box shin')).toBe(true);
    expect(matchesQuery(shinBox, 'shin box')).toBe(true);
  });

  it('requires every word, not just one', () => {
    expect(shinBox).toBeDefined();
    if (shinBox === undefined) return;
    expect(matchesQuery(shinBox, 'shin kettlebell')).toBe(false);
  });
});

describe('searching the real library', () => {
  it('finds a position by its alternative name', () => {
    // Nobody hunting this one types "Bent-Knee Calf Stretch".
    expect(find('soleus')).toContain('soleus-calf-stretch');
    expect(find('wall hinge')).toContain('dowel-hinge');
    expect(find('prying squat')).toContain('deep-squat-hold');
    expect(find('windscreen')).toContain('hip-swivels');
    expect(find('vajrasana')).toContain('seiza');
  });

  it('does not send an alias to a different exercise', () => {
    // "Thread the needle" is a hands-and-knees move, not Open Book's side-lying rotation; and
    // the plain half-kneeling lunge is its own entry, not an alias of the couch stretch.
    expect(find('thread the needle')).not.toContain('open-book');
    expect(find('half-kneeling hip flexor')).not.toContain('couch-stretch');
  });

  it('gives no name or alias to two exercises', () => {
    const owner = new Map<string, string>();
    const clashes: string[] = [];
    for (const exercise of EXERCISES) {
      for (const label of [exercise.name, ...(exercise.aka ?? [])]) {
        const key = normalise(label);
        const other = owner.get(key);
        if (other !== undefined && other !== exercise.id) {
          clashes.push(`"${label}" is on both ${other} and ${exercise.id}`);
        }
        owner.set(key, exercise.id);
      }
    }
    expect(clashes).toEqual([]);
  });

  it('survives punctuation typed either way', () => {
    expect(find('90/90')).toEqual(find('90 90'));
    expect(find('90/90').length).toBeGreaterThan(0);
  });

  it('puts the obvious answer first', () => {
    expect(find('shin box')[0]).toBe('shin-box');
    expect(find('seiza')[0]).toBe('seiza');
  });

  it('returns nothing for a word in no name or alias', () => {
    expect(find('trampoline')).toEqual([]);
  });

  it('leaves the list untouched when nothing is typed', () => {
    expect(searchExercises(EXERCISES, '')).toEqual(EXERCISES);
  });

  it('every exercise is findable by typing its own name', () => {
    for (const exercise of EXERCISES) {
      expect(find(exercise.name), exercise.id).toContain(exercise.id);
    }
  });
});
