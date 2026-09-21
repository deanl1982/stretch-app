import { describe, expect, it } from 'vitest';
import { FOOT, SHIN, THIGH, TORSO, pose } from './build.ts';
import { HIP_HALF_WIDTH } from './types.ts';

const dist = (a: readonly [number, number], b: readonly [number, number]): number =>
  Math.hypot(a[0] - b[0], a[1] - b[1]);

describe('pose()', () => {
  const standing = pose({ torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0 });

  it('keeps every limb its fixed length, whatever the angles', () => {
    const bent = pose({ torso: 120, thigh: 100, shin: 20, foot: 60, upperArm: 45, forearm: 130 });
    expect(dist(bent.pelvis, bent.neck)).toBeCloseTo(TORSO, 0);
    expect(dist(bent.pelvis, bent.knee)).toBeCloseTo(THIGH, 0);
    expect(dist(bent.knee, bent.ankle)).toBeCloseTo(SHIN, 0);
    expect(dist(bent.ankle, bent.toe)).toBeCloseTo(FOOT, 0);
  });

  it('draws a standing figure upright, head above neck above pelvis above feet', () => {
    expect(standing.head[1]).toBeLessThan(standing.neck[1]);
    expect(standing.neck[1]).toBeLessThan(standing.pelvis[1]);
    expect(standing.pelvis[1]).toBeLessThan(standing.ankle[1]);
    expect(standing.head[0]).toBeCloseTo(standing.pelvis[0], 0);
  });

  it('rests standing feet on the floor and centres the figure', () => {
    expect(Math.max(standing.ankle[1], standing.toe[1])).toBeCloseTo(130, 0);
    expect(standing.pelvis[0]).toBeGreaterThan(90);
    expect(standing.pelvis[0]).toBeLessThan(110);
  });

  it('rests a lying figure on its trunk rather than floating or sinking', () => {
    const lying = pose({ torso: 270, thigh: 90, shin: 90, upperArm: 90, forearm: 90 });
    expect(lying.pelvis[1]).toBeCloseTo(121, 0);
    // Head to the left of the pelvis: the figure faces right.
    expect(lying.head[0]).toBeLessThan(lying.pelvis[0]);
  });

  it('keeps a folded-over head clear of the floor line', () => {
    const folded = pose({ torso: 20, thigh: 0, shin: 0, upperArm: 10, forearm: 0 });
    expect(folded.head[1] + 9).toBeLessThanOrEqual(134.5);
  });

  it('lifts the whole figure for a raised seat', () => {
    const flat = pose({ torso: 180, thigh: 90, shin: 180, upperArm: 0, forearm: 0 });
    const raised = pose({ torso: 180, thigh: 90, shin: 180, upperArm: 0, forearm: 0, lift: 10 });
    expect(flat.pelvis[1] - raised.pelvis[1]).toBeCloseTo(10, 0);
  });

  it('hands props the grounded joints, not the raw ones', () => {
    const withProp = pose({
      torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0,
      props: (j) => [{ kind: 'block', at: [j.toe[0], j.toe[1]] }],
    });
    expect(withProp.props?.[0]?.at).toEqual(withProp.toe);
  });

  it('only adds far limbs when given the pair', () => {
    expect(standing.farKnee).toBeUndefined();
    const withFar = pose({ torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0, farThigh: 40, farShin: 0 });
    expect(withFar.farKnee).toBeDefined();
    expect(withFar.farAnkle).toBeDefined();
  });
});

describe('pose() in the front view', () => {
  const stance = { view: 'front' as const, torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0, farThigh: 0, farShin: 0 };
  const front = pose(stance);

  it('marks the pose as a front view, and leaves side poses unmarked', () => {
    expect(front.view).toBe('front');
    expect(pose({ torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0 }).view).toBeUndefined();
  });

  it('hangs the two legs from either side of the pelvis', () => {
    expect(front.pelvis[0] - (front.knee[0] ?? 0)).toBeCloseTo(HIP_HALF_WIDTH, 0);
    expect((front.farKnee?.[0] ?? 0) - front.pelvis[0]).toBeCloseTo(HIP_HALF_WIDTH, 0);
  });

  it('still keeps every limb its fixed length, measured from its own hip', () => {
    const wide = pose({ ...stance, thigh: 250, shin: 10, farThigh: 110, farShin: 350 });
    const hipLeft: [number, number] = [wide.pelvis[0] - HIP_HALF_WIDTH, wide.pelvis[1]];
    const hipRight: [number, number] = [wide.pelvis[0] + HIP_HALF_WIDTH, wide.pelvis[1]];
    expect(dist(hipLeft, wide.knee)).toBeCloseTo(THIGH, 0);
    expect(dist(hipRight, wide.farKnee ?? hipRight)).toBeCloseTo(THIGH, 0);
    expect(dist(wide.knee, wide.ankle)).toBeCloseTo(SHIN, 0);
  });

  it('leans the trunk sideways when the torso bearing moves off vertical', () => {
    // 195 leans towards the left edge of the image, 165 towards the right.
    const towardsLeft = pose({ ...stance, torso: 195 });
    const towardsRight = pose({ ...stance, torso: 165 });
    expect(towardsLeft.neck[0]).toBeLessThan(towardsLeft.pelvis[0]);
    expect(towardsRight.neck[0]).toBeGreaterThan(towardsRight.pelvis[0]);
  });
});

