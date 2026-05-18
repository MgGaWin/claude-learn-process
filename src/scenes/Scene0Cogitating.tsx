import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { Terminal, TerminalLine } from '../components/Terminal';
import { AnthropicArt } from '../components/AnthropicArt';

export const Scene0Cogitating: React.FC = () => {
  const frame = useCurrentFrame();

  // 旋转星星动画
  const rotation = interpolate(frame, [0, 300], [0, 1080], {
    extrapolateRight: 'clamp',
  });
  const spinnerOpacity = interpolate(frame, [40, 55], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: '#FAF9F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* 背景有机 blob */}
      <AnthropicArt variant={4} />

      {/* 终端 */}
      <Terminal width={800} title="claude">
        <TerminalLine delay={5}>
          <span style={{ color: '#D97757', fontWeight: 600 }}>{'>'}</span>
          <span style={{ color: '#8b8b85' }}>$</span>
          <span style={{ color: '#f0f0f0' }}>帮我看看 main.py 有什么问题</span>
        </TerminalLine>

        {/* 旋转星星 + Cogitating */}
        <TerminalLine delay={30} style={{ opacity: spinnerOpacity }}>
          <span style={{
            display: 'inline-block',
            color: '#D97757',
            fontSize: 20,
            transform: `rotate(${rotation}deg)`,
          }}>
            ✻
          </span>
          <span style={{ color: '#D97757', fontWeight: 500 }}>Cogitating...</span>
          <span style={{ color: '#666', fontSize: 18 }}>(3s)</span>
        </TerminalLine>
      </Terminal>
    </AbsoluteFill>
  );
};
