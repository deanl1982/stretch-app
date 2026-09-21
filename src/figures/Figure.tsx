import type { JSX } from 'react';
import {
  GROUND_Y,
  HEAD_RADIUS,
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
  const on = (segment: Segment) => pose.highlight?.includes(segment) ?? false;
  const accent = 'var(--figure-accent, currentColor)';

  const line = (segment: Segment) => ({
    stroke: on(segment) ? accent : 'currentColor',
    strokeWidth: on(segment) ? 7 : 5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  });

  const farLine = {
    stroke: 'currentColor',
    strokeWidth: 5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
    opacity: 0.3,
  };

  const farArm =
    pose.farElbow !== undefined && pose.farHand !== undefined
      ? `${xy(pose.neck)} ${xy(pose.farElbow)} ${xy(pose.farHand)}`
      : null;

  const farLeg =
    pose.farKnee !== undefined && pose.farAnkle !== undefined
      ? `${xy(pose.pelvis)} ${xy(pose.farKnee)} ${xy(pose.farAnkle)}${
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

      {/* Far limbs sit behind the body. */}
      {farLeg !== null && <polyline points={farLeg} {...farLine} />}
      {farArm !== null && <polyline points={farArm} {...farLine} />}

      {/*
        Limbs are drawn segment by segment rather than as one polyline, so a pose
        can highlight a shin or a foot on its own. Shared endpoints and round caps
        mean the joins are invisible. Ten ankle and foot poses highlight segments
        that a single leg polyline could never match.
      */}
      <polyline points={`${xy(pose.pelvis)} ${xy(pose.neck)}`} {...line('spine')} />

      <polyline points={`${xy(pose.pelvis)} ${xy(pose.knee)}`} {...line('thigh')} />
      <polyline points={`${xy(pose.knee)} ${xy(pose.ankle)}`} {...line('shin')} />
      <polyline points={`${xy(pose.ankle)} ${xy(pose.toe)}`} {...line('foot')} />

      <polyline points={`${xy(pose.neck)} ${xy(pose.elbow)}`} {...line('upperArm')} />
      <polyline points={`${xy(pose.elbow)} ${xy(pose.hand)}`} {...line('forearm')} />

      {/* Neck. Without this the head floats free in any lying-down pose. */}
      <polyline points={`${xy(pose.neck)} ${xy(pose.head)}`} {...line('neck')} />

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
