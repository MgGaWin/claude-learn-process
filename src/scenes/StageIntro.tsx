import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';

interface StageIntroProps {
  num: string;
  title: string;
  en: string;
}

export const StageIntro: React.FC<StageIntroProps> = ({ num, title, en }) => {
  const frame = useCurrentFrame();

  const labelOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const numOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const numScale = interpolate(frame, [10, 25], [0.8, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const dividerOpacity = interpolate(frame, [25, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleOpacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const enOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{
      background: '#FAF9F5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
    }}>
      {/* STAGE 标签 */}
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 14,
        letterSpacing: '0.2em',
        color: '#B0AEA5',
        textTransform: 'uppercase' as const,
        opacity: labelOpacity,
      }}>
        STAGE
      </span>

      {/* 编号 */}
      <span style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 120,
        fontWeight: 700,
        color: '#D97757',
        lineHeight: 1,
        opacity: numOpacity,
        transform: `scale(${numScale})`,
      }}>
        {num}
      </span>

      {/* 分隔线 */}
      <div style={{
        width: 48,
        height: 3,
        background: '#D97757',
        borderRadius: 2,
        opacity: dividerOpacity,
      }} />

      {/* 标题 */}
      <span style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 56,
        fontWeight: 700,
        color: '#141413',
        letterSpacing: '-0.02em',
        opacity: titleOpacity,
      }}>
        {title}
      </span>

      {/* 英文副标题 */}
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 18,
        color: '#B0AEA5',
        letterSpacing: '0.05em',
        opacity: enOpacity,
      }}>
        {en}
      </span>
    </AbsoluteFill>
  );
};
