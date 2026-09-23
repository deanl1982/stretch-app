import { describe, expect, it } from 'vitest';
import { FOOT, SHIN, THIGH, TORSO, UPPER_ARM } from './build.ts';
import { lerpAngle, poseAt, restPose, stanceAt, type Motion } from './motion.ts';
import type { Point } from './types.ts';

const dist = (a: Point, b: Point): number => Math.hypot(a[0] - b[0], a[1] - b[1]);

const rock: Motion = {
  frames: [
    { torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0 },
    { torso: 120, thigh: 60, shin: 320, upperArm: 45, forearm: 90 },
  ],
};

describe('lerpAngle', () => {
  it('goes the short way round the circle', () => {
    expect(lerpAngle(350, 10, 0.5)).toBeCloseTo(0, 5);
    expect(lerpAngle(10, 350, 0.5)).toBeCloseTo(0, 5);
    expect(lerpAngle(0, 90, 0.5)).toBeCloseTo(45, 5);
  });

  it('lands exactly on its endpoints', () => {
    expect(lerpAngle(350, 10, 0)).toBeCloseTo(350, 5);
    expect(lerpAngle(350, 10, 1)).toBeCloseTo(10, 5);
  });
});

describe('poseAt', () => {
  it('keeps every limb its true length at every point in between', () => {
    // The whole reason angles are interpolated rather than joint positions: lerping the
    // coordinates would make each limb shortest exactly halfway through the movement.
    for (let step = 0; step <= 40; step += 1) {
      const p = poseAt(rock, step / 40);
      const at = `progress ${(step / 40).toFixed(3)}`;
      expect(dist(p.pelvis, p.neck), at).toBeCloseTo(TORSO, 0);
      expect(dist(p.pelvis, p.knee), at).toBeCloseTo(THIGH, 0);
      expect(dist(p.knee, p.ankle), at).toBeCloseTo(SHIN, 0);
      expect(dist(p.ankle, p.toe), at).toBeCloseTo(FOOT, 0);
      expect(dist(p.neck, p.elbow), at).toBeCloseTo(UPPER_ARM, 0);
    }
  });

  it('rests on the first frame, and reaches the last halfway through a ping-pong', () => {
    expect(stanceAt(rock, 0).torso).toBeCloseTo(180, 5);
    expect(stanceAt(rock, 0.5).torso).toBeCloseTo(120, 5);
    expect(stanceAt(rock, 1).torso).toBeCloseTo(180, 5);
    expect(restPose(rock)).toEqual(poseAt(rock, 0));
  });

  it('comes back to where it started, so a loop does not jump', () => {
    expect(poseAt(rock, 0.999).pelvis[1]).toBeCloseTo(poseAt(rock, 0).pelvis[1], 0);
  });

  it('wraps progress, so a clock can hand it any elapsed time', () => {
    expect(stanceAt(rock, 2.25).torso).toBeCloseTo(stanceAt(rock, 0.25).torso, 5);
    expect(stanceAt(rock, -0.75).torso).toBeCloseTo(stanceAt(rock, 0.25).torso, 5);
  });

  it('runs a travelling cycle round rather than back on itself', () => {
    const walk: Motion = {
      loop: 'cycle',
      frames: [
        { torso: 180, thigh: 20, shin: 340, upperArm: 0, forearm: 0 },
        { torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0 },
        { torso: 180, thigh: 340, shin: 20, upperArm: 0, forearm: 0 },
      ],
    };
    // A ping-pong would retrace the middle frame; a cycle keeps going and wraps to the first.
    expect(stanceAt(walk, 1 / 3).thigh).toBeCloseTo(0, 5);
    expect(stanceAt(walk, 2 / 3).thigh).toBeCloseTo(340, 5);
    expect(stanceAt(walk, 0).thigh).toBeCloseTo(20, 5);
  });

  it('carries the things that are not angles straight through', () => {
    const withExtras: Motion = {
      frames: [
        { torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0, view: 'front', highlight: ['thigh'] },
        { torso: 150, thigh: 30, shin: 0, upperArm: 0, forearm: 0, view: 'front', highlight: ['thigh'] },
      ],
    };
    const mid = poseAt(withExtras, 0.25);
    expect(mid.view).toBe('front');
    expect(mid.highlight).toEqual(['thigh']);
  });

  it('lifts the whole figure off the floor, which is how a jump leaves the ground', () => {
    const jump: Motion = {
      frames: [
        { torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0, lift: 0 },
        { torso: 180, thigh: 0, shin: 0, upperArm: 0, forearm: 0, lift: 20 },
      ],
    };
    expect(poseAt(jump, 0).toe[1] - poseAt(jump, 0.5).toe[1]).toBeCloseTo(20, 0);
  });
});
