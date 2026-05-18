import { Composition } from 'remotion';
import { Chapter1, TOTAL_FRAMES } from './Chapter1';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Chapter1"
        component={Chapter1}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
