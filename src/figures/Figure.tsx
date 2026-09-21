import type { JSX } from 'react';
import {
  GROUND_Y,
  HEAD_RADIUS,
  HIP_HALF_WIDTH,
  SHOULDER_HALF_WIDTH,
  VIEW_HEIGHT,
  VIEW_WIDTH,
  type Point,
  type Pose,
  type PropShape,
  type Segment,
} from './types.ts';

/**
 * Renders a pose.
 *
 * Everything uses currentColor and a CSS custom property for the accent, so the figure
 * themes itself for free and needs no separate light/dark artwork.
 */

interface FigureProps {
  pose: Pose;
  /**
   * Accessible description. Pass an empty string where the figure merely repeats
   * adjacent text — it is then hidden from assistive tech rather than announced as
   * an unlabelled image.
   */
  label: string;
  className?: string;
}

const xy = (p: Point) => `${p[0]},${p[1]}`;

function renderProp(prop: PropShape, index: number): JSX.Element | null {
  const [x, y] = prop.at;
  const stroke = 'var(--figure-prop, currentColor)';
  const common = {
    fill: 'none',
    stroke,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    opacity: 0.95,
  };

  switch (prop.kind) {
    case 'block':
    case 'step':
      return (
        <rect
          key={index}
          x={x}
          y={y}
          width={prop.width ?? 26}
          height={prop.height ?? 14}
          rx={2}
          {...common}
        />
      );
    case 'cushion':
      return (
        <rect
          key={index}
          x={x}
          y={y}
          width={prop.width ?? 24}
          height={prop.height ?? 10}
          rx={5}
          {...common}
        />
      );
    case 'wedge':
      return (
        <polygon
          key={index}
          points={`${x},${y + (prop.height ?? 12)} ${x + (prop.width ?? 24)},${y + (prop.height ?? 12)} ${x + (prop.width ?? 24)},${y}`}
          {...common}
        />
      );
    case 'roller':
      return <circle key={index} cx={x} cy={y} r={prop.width ?? 9} {...common} />;
    case 'chair':
      // Seat, back, and two legs.
      return (
        <g key={index} {...common}>
          <path d={`M ${x} ${y} h ${prop.width ?? 40}`} />
          <path d={`M ${x} ${y} v -${prop.height ?? 34}`} />
          <path d={`M ${x + 3} ${y} v ${GROUND_Y - y}`} />
          <path d={`M ${x + (prop.width ?? 40) - 3} ${y} v ${GROUND_Y - y}`} />
        </g>
      );
    case 'wall':
    case 'dowel':
    case 'floorLine': {
      const to = prop.to ?? [x, y];
      return <path key={index} d={`M ${x} ${y} L ${to[0]} ${to[1]}`} {...common} />;
    }
    default:
      return null;
  }
}

export function Figure({ pose, label, className }: FigureProps): JSX.Element {
  const accent = 'var(--figure-accent, currentColor)';

  // Near limbs and the spine use `highlight`; the front view's second limbs use `farHighlight`.
  const line = (segment: Segment, highlighted: readonly Segment[] | undefined) => {
    const on = highlighted?.includes(segment) ?? false;
    return {
    stroke: on ? accent : 'currentColor',
    strokeWidth: on ? 7 : 5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
    };
  };

  const farLine = {
    stroke: 'currentColor',
    strokeWidth: 5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
    opacity: 0.3,
  };

  const front = pose.view === 'front';
  const at = (p: Point, dx: number): Point => [p[0] + dx, p[1]];
  // Where each limb hangs from. Side view: one shoulder and one hip. Front view: a pair.
  const hipNear = front ? at(pose.pelvis, -HIP_HALF_WIDTH) : pose.pelvis;
  const hipFar = front ? at(pose.pelvis, HIP_HALF_WIDTH) : pose.pelvis;
  const shoulderNear = front ? at(pose.neck, -SHOULDER_HALF_WIDTH) : pose.neck;
  const shoulderFar = front ? at(pose.neck, SHOULDER_HALF_WIDTH) : pose.neck;

  const farArm =
    pose.farElbow !== undefined && pose.farHand !== undefined
      ? `${xy(shoulderFar)} ${xy(pose.farElbow)} ${xy(pose.farHand)}`
      : null;

  const farLeg =
    pose.farKnee !== undefined && pose.farAnkle !== undefined
      ? `${xy(hipFar)} ${xy(pose.farKnee)} ${xy(pose.farAnkle)}${
          pose.farToe === undefined ? '' : ` ${xy(pose.farToe)}`
        }`
      : null;

  return (
    <svg
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      className={className}
      // Decorative when it only restates the name beside it.
      {...(label === ''
        ? { 'aria-hidden': true as const, focusable: false as const }
        : { role: 'img' as const, 'aria-label': label })}
      xmlns="http://www.w3.org/2000/svg"
    >
      {(pose.ground ?? true) && (
        <path
          d={`M 8 ${GROUND_Y + 8} H ${VIEW_WIDTH - 8}`}
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.25}
        />
      )}

      {pose.props?.map(renderProp)}

      {/* Side view: the far limbs sit faded behind the body. */}
      {!front && farLeg !== null && <polyline points={farLeg} {...farLine} />}
      {!front && farArm !== null && <polyline points={farArm} {...farLine} />}

      {/*
        Limbs are drawn segment by segment rather than as one polyline, so a pose
        can highlight a shin or a foot on its own. Shared endpoints and round caps
        mean the joins are invisible. Ten ankle and foot poses highlight segments
        that a single leg polyline could never match.
      */}
      <polyline points={`${xy(pose.pelvis)} ${xy(pose.neck)}`} {...line('spine', pose.highlight)} />

      <polyline points={`${xy(hipNear)} ${xy(pose.knee)}`} {...line('thigh', pose.highlight)} />
      <polyline points={`${xy(pose.knee)} ${xy(pose.ankle)}`} {...line('shin', pose.highlight)} />
      <polyline points={`${xy(pose.ankle)} ${xy(pose.toe)}`} {...line('foot', pose.highlight)} />

      <polyline points={`${xy(shoulderNear)} ${xy(pose.elbow)}`} {...line('upperArm', pose.highlight)} />
      <polyline points={`${xy(pose.elbow)} ${xy(pose.hand)}`} {...line('forearm', pose.highlight)} />

      {/*
        Front view only: the pelvis and shoulder bars, and the second leg and arm, which are
        real limbs here rather than a faded shadow, highlighted through `farHighlight`.
      */}
      {front && (
        <>
          <polyline points={`${xy(hipNear)} ${xy(hipFar)}`} {...line('spine', pose.highlight)} />
          <polyline points={`${xy(shoulderNear)} ${xy(shoulderFar)}`} {...line('spine', pose.highlight)} />
          {pose.farKnee !== undefined && pose.farAnkle !== undefined && (
            <>
              <polyline points={`${xy(hipFar)} ${xy(pose.farKnee)}`} {...line('thigh', pose.farHighlight)} />
              <polyline points={`${xy(pose.farKnee)} ${xy(pose.farAnkle)}`} {...line('shin', pose.farHighlight)} />
              {pose.farToe !== undefined && (
                <polyline points={`${xy(pose.farAnkle)} ${xy(pose.farToe)}`} {...line('foot', pose.farHighlight)} />
              )}
            </>
          )}
          {pose.farElbow !== undefined && pose.farHand !== undefined && (
            <>
              <polyline points={`${xy(shoulderFar)} ${xy(pose.farElbow)}`} {...line('upperArm', pose.farHighlight)} />
              <polyline points={`${xy(pose.farElbow)} ${xy(pose.farHand)}`} {...line('forearm', pose.farHighlight)} />
            </>
          )}
        </>
      )}

      {/* Neck. Without this the head floats free in any lying-down pose. */}
      <polyline points={`${xy(pose.neck)} ${xy(pose.head)}`} {...line('neck', pose.highlight)} />

      <circle
        cx={pose.head[0]}
        cy={pose.head[1]}
        r={HEAD_RADIUS}
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}
