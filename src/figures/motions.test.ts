import { describe, expect, it } from 'vitest';
import { EXERCISES } from '../content/exercises.ts';
import { FOOT, FOREARM, SHIN, THIGH, TORSO, UPPER_ARM } from './build.ts';
import { MOTIONS } from './motions/index.ts';
import { poseAt } from './motion.ts';
import { HEAD_RADIUS, VIEW_HEIGHT, VIEW_WIDTH, type Point } from './types.ts';

const dist = (a: Point, b: Point): number => Math.hypot(a[0] - b[0], a[1] - b[1]);
const SAMPLES = 24;
const ids = Object.keys(MOTIONS);

describe('the movements', () => {
  it('are all for exercises that exist', () => {
    const known = new Set(EXERCISES.map((exercise) => exercise.id));
    expect(ids.filter((id) => !known.has(id))).toEqual([]);
  });

  it('keep every limb its true length at every point in every cycle', () => {
    for (const id of ids) {
      for (let step = 0; step < SAMPLES; step += 1) {
        const p = poseAt(MOTIONS[id]!, step / SAMPLES);
        const at = `${id} at ${step}/${SAMPLES}`;
        expect(dist(p.pelvis, p.neck), at).toBeCloseTo(TORSO, 0);
        expect(dist(p.pelvis, p.knee), at).toBeCloseTo(THIGH, 0);
        expect(dist(p.knee, p.ankle), at).toBeCloseTo(SHIN, 0);
        expect(dist(p.ankle, p.toe), at).toBeCloseTo(FOOT, 0);
        expect(dist(p.neck, p.elbow), at).toBeCloseTo(UPPER_ARM, 0);
        expect(dist(p.elbow, p.hand), at).toBeCloseTo(FOREARM, 0);
      }
    }
  });

  it('stay inside the frame all the way round', () => {
    // A still figure is checked once. A moving one can swing a limb out of view partway through,
    // which nobody would notice until it shipped.
    const outside: string[] = [];
    for (const id of ids) {
      for (let step = 0; step < SAMPLES; step += 1) {
        const p = poseAt(MOTIONS[id]!, step / SAMPLES);
        const points: [string, Point | undefined][] = [
          ['neck', p.neck], ['pelvis', p.pelvis], ['elbow', p.elbow], ['hand', p.hand],
          ['knee', p.knee], ['ankle', p.ankle], ['toe', p.toe],
          ['farElbow', p.farElbow], ['farHand', p.farHand],
          ['farKnee', p.farKnee], ['farAnkle', p.farAnkle], ['farToe', p.farToe],
        ];
        for (const [name, point] of points) {
          if (point === undefined) continue;
          if (point[0] < 2 || point[0] > VIEW_WIDTH - 2 || point[1] < 2 || point[1] > VIEW_HEIGHT - 2) {
            outside.push(`${id}.${name} at ${step}/${SAMPLES}: ${point.join(',')}`);
          }
        }
        const [hx, hy] = p.head;
        if (hx - HEAD_RADIUS < 0 || hx + HEAD_RADIUS > VIEW_WIDTH || hy - HEAD_RADIUS < 0 || hy + HEAD_RADIUS > VIEW_HEIGHT) {
          outside.push(`${id}.head at ${step}/${SAMPLES}: ${hx},${hy}`);
        }
      }
    }
    expect(outside.slice(0, 8)).toEqual([]);
  });

  it('do not jump when they loop, or when the figure stops moving', () => {
    for (const id of ids) {
      const start = poseAt(MOTIONS[id]!, 0);
      const end = poseAt(MOTIONS[id]!, 0.999);
      // A hand travels furthest, so it is the honest thing to measure the seam on.
      expect(dist(start.hand, end.hand), `${id} loop seam`).toBeLessThan(6);
    }
  });
});
