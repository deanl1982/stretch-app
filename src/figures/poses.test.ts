import { describe, expect, it } from 'vitest';
import { EXERCISES } from '../content/exercises.ts';
import { POSES } from './poses.ts';
import { HEAD_RADIUS, VIEW_HEIGHT, VIEW_WIDTH, type Point } from './types.ts';

describe('the figure library', () => {
  it('has a figure for every exercise', () => {
    const missing = EXERCISES.filter((exercise) => POSES[exercise.id] === undefined).map((e) => e.id);
    expect(missing).toEqual([]);
  });

  it('has no figure for an exercise that no longer exists', () => {
    // A merged-away exercise leaves its figure behind unless someone removes it.
    const known = new Set(EXERCISES.map((exercise) => exercise.id));
    const orphans = Object.keys(POSES).filter((id) => !known.has(id));
    expect(orphans).toEqual([]);
  });

  it('keeps every figure inside the frame, with room for the stroke', () => {
    const outside: string[] = [];
    for (const [id, pose] of Object.entries(POSES)) {
      const points: [string, Point | undefined][] = [
        ['neck', pose.neck], ['pelvis', pose.pelvis], ['elbow', pose.elbow], ['hand', pose.hand],
        ['knee', pose.knee], ['ankle', pose.ankle], ['toe', pose.toe],
        ['farElbow', pose.farElbow], ['farHand', pose.farHand],
        ['farKnee', pose.farKnee], ['farAnkle', pose.farAnkle], ['farToe', pose.farToe],
      ];
      for (const [name, point] of points) {
        if (point === undefined) continue;
        if (point[0] < 3 || point[0] > VIEW_WIDTH - 3 || point[1] < 3 || point[1] > VIEW_HEIGHT - 3) {
          outside.push(`${id}.${name} at ${point.join(',')}`);
        }
      }
      const [hx, hy] = pose.head;
      if (hx - HEAD_RADIUS < 0 || hx + HEAD_RADIUS > VIEW_WIDTH || hy - HEAD_RADIUS < 0 || hy + HEAD_RADIUS > VIEW_HEIGHT) {
        outside.push(`${id}.head at ${hx},${hy}`);
      }
    }
    expect(outside).toEqual([]);
  });
});
