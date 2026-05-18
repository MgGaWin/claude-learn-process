import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { StageIntro } from './scenes/StageIntro';
import { Scene0Cogitating } from './scenes/Scene0Cogitating';
import { Scene1Meaning } from './scenes/Scene1Meaning';
import { Scene2Cards } from './scenes/Scene2Cards';
import './styles/global.css';

// 音频时长（帧数 @30fps）
const CH1_0 = 116;  // 3.84s — 阶段介绍
const CH1_1 = 485;  // 16.16s — Scene 0 配音
const CH1_2 = 298;  // 9.92s — Scene 1 配音
const CH1_3 = 572;  // 19.04s — Scene 2 配音

const SCENE0_START = CH1_0;                    // 116
const SCENE1_START = SCENE0_START + CH1_1;     // 601
const SCENE2_START = SCENE1_START + CH1_2;     // 899
const TOTAL_FRAMES = SCENE2_START + CH1_3;     // 1471

export { TOTAL_FRAMES };

export const Chapter1: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* 阶段介绍：ch1-0 */}
      <Sequence from={0} durationInFrames={CH1_0} name="阶段介绍">
        <Audio src={staticFile('audio/ch1-0.wav')} />
        <StageIntro num="01" title="思考中" en="Cogitating / Thinking" />
      </Sequence>

      {/* Scene 0: 终端 Cogitating + ch1-1 */}
      <Sequence from={SCENE0_START} durationInFrames={CH1_1} name="Cogitating终端">
        <Audio src={staticFile('audio/ch1-1.wav')} />
        <Scene0Cogitating />
      </Sequence>

      {/* Scene 1: 词义解释 + ch1-2 */}
      <Sequence from={SCENE1_START} durationInFrames={CH1_2} name="词义解释">
        <Audio src={staticFile('audio/ch1-2.wav')} />
        <Scene1Meaning />
      </Sequence>

      {/* Scene 2: 状态词卡片 + ch1-3 */}
      <Sequence from={SCENE2_START} durationInFrames={CH1_3} name="状态词卡片">
        <Audio src={staticFile('audio/ch1-3.wav')} />
        <Scene2Cards />
      </Sequence>
    </AbsoluteFill>
  );
};
