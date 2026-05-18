import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { AnthropicArt } from '../components/AnthropicArt';

const cards = [
  { en: 'Cogitating', zh: '深度思考中', active: true },
  { en: 'Thinking', zh: '思维运转', active: false },
  { en: 'Pondering', zh: '沉思琢磨', active: false },
  { en: 'Brewing', zh: '酝酿发酵', active: false },
  { en: 'Processing', zh: '处理分析', active: false },
];

export const Scene2Cards: React.FC = () => {
  const frame = useCurrentFrame();

  // 标题淡入
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ background: '#FAF9F5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 48 }}>
      <AnthropicArt variant={4} />

      {/* 标题 */}
      <span style={{
        position: 'relative',
        zIndex: 1,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 16,
        color: '#B0AEA5',
        letterSpacing: '0.15em',
        textTransform: 'uppercase' as const,
        opacity: titleOpacity,
      }}>
        Claude 的思考状态词
      </span>

      {/* 卡片网格 */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        gap: 24,
      }}>
        {cards.map((card, i) => {
          const delay = 10 + i * 12;
          const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          });
          const scale = interpolate(frame, [delay, delay + 20], [0.85, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.out(Easing.cubic),
          });

          return (
            <div
              key={card.en}
              style={{
                width: 200,
                padding: '24px 16px',
                background: card.active ? '#fff' : '#F3F1EC',
                border: card.active ? '2px solid #D97757' : '1px solid #E0DDD6',
                borderRadius: 12,
                textAlign: 'center' as const,
                opacity,
                transform: `scale(${scale})`,
                boxShadow: card.active
                  ? '0 0 0 1px #D97757, 0 8px 32px rgba(217,119,87,0.10)'
                  : 'none',
              }}
            >
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 28,
                fontWeight: 600,
                color: card.active ? '#D97757' : '#141413',
                marginBottom: 8,
              }}>
                {card.en}
              </p>
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: 16,
                color: '#B0AEA5',
              }}>
                {card.zh}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
