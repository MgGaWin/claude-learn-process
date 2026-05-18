import React from 'react';

interface BlobConfig {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  grad: string;
}

const variants: Record<number, BlobConfig[]> = {
  4: [
    { cx: 25, cy: 70, rx: 30, ry: 25, grad: 'warm' },
    { cx: 75, cy: 30, rx: 25, ry: 22, grad: 'cool' },
  ],
  5: [
    { cx: 20, cy: 25, rx: 28, ry: 24, grad: 'cool' },
    { cx: 78, cy: 72, rx: 26, ry: 28, grad: 'warm' },
  ],
};

const gradients: Record<string, { offset0: string; offset50: string; opacity0: number; opacity50: number }> = {
  warm: { offset0: '#E87A35', offset50: '#D97757', opacity0: 0.5, opacity50: 0.25 },
  cool: { offset0: '#6A9BCC', offset50: '#6A9BCC', opacity0: 0.35, opacity50: 0.15 },
};

export const AnthropicArt: React.FC<{ variant?: number }> = ({ variant = 4 }) => {
  const config = variants[variant] || variants[4];

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`noise-${variant}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves={3} seed={variant * 7} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={12} xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
        {Object.entries(gradients).map(([name, g]) => (
          <radialGradient key={name} id={`grad-${name}-${variant}`} cx="40%" cy="40%">
            <stop offset="0%" stopColor={g.offset0} stopOpacity={g.opacity0} />
            <stop offset="50%" stopColor={g.offset50} stopOpacity={g.opacity50} />
            <stop offset="100%" stopColor="#FAF9F5" stopOpacity={0} />
          </radialGradient>
        ))}
      </defs>
      {config.map((b, i) => (
        <ellipse
          key={i}
          cx={b.cx}
          cy={b.cy}
          rx={b.rx}
          ry={b.ry}
          fill={`url(#grad-${b.grad}-${variant})`}
          filter={`url(#noise-${variant})`}
        />
      ))}
    </svg>
  );
};
