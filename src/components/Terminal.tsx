import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
  width?: number;
}

export const Terminal: React.FC<TerminalProps> = ({ children, title, width = 800 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const translateY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        width,
        background: '#1a1a19',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 24px 80px rgba(0,0,0,0.15)',
        opacity,
        transform: `translateY(${translateY}px)`,
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      }}
    >
      {/* Title bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 20px',
        background: '#242423',
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#FEBC2E' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
        {title && (
          <span style={{ marginLeft: 12, fontSize: 13, color: '#666', fontFamily: "'JetBrains Mono', monospace" }}>
            {title}
          </span>
        )}
      </div>
      {/* Body */}
      <div style={{ padding: '18px 28px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {children}
      </div>
    </div>
  );
};

export const TerminalLine: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const translateY = interpolate(frame, [delay, delay + 15], [15, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div style={{
      fontSize: 24,
      lineHeight: 1.6,
      color: '#c8c8c8',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      opacity,
      transform: `translateY(${translateY}px)`,
      ...style,
    }}>
      {children}
    </div>
  );
};
