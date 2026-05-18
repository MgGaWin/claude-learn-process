import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { AnthropicArt } from '../components/AnthropicArt';

export const Scene1Meaning: React.FC = () => {
  const frame = useCurrentFrame();

  // 英文词淡入
  const enOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const enX = interpolate(frame, [0, 20], [-40, 0], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // 箭头淡入
  const arrowOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 中文词淡入
  const zhOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const zhX = interpolate(frame, [35, 55], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  // 注释淡入
  const noteOpacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const note2Opacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: '#FAF9F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AnthropicArt variant={4} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40,
      }}>
        {/* 主词 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 96,
            fontWeight: 700,
            color: '#141413',
            letterSpacing: '-0.02em',
            opacity: enOpacity,
            transform: `translateX(${enX}px)`,
          }}>
            Cogitating
          </span>

          <span style={{
            fontSize: 56,
            color: '#D97757',
            opacity: arrowOpacity,
          }}>
            →
          </span>

          <span style={{
            fontFamily: "'Lora', serif",
            fontSize: 72,
            fontWeight: 600,
            color: '#D97757',
            opacity: zhOpacity,
            transform: `translateX(${zhX}px)`,
          }}>
            琢磨深思
          </span>
        </div>

        {/* 注释 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: 26,
            color: '#B0AEA5',
            opacity: noteOpacity,
          }}>
            比普通的 <strong style={{ color: '#141413', fontWeight: 600 }}>Thinking</strong> 更俏皮
          </p>
          <p style={{
            fontFamily: "'Lora', serif",
            fontSize: 26,
            color: '#B0AEA5',
            opacity: note2Opacity,
          }}>
            括号里的数字是已思考秒数
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
