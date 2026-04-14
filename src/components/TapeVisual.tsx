import Spline from '@splinetool/react-spline/next';

interface TapeVisualProps {
  sceneId: string;
}

export default function TapeVisual({ sceneId }: { sceneId: string }) {
  return (
    <div style={{ position: 'relative', width: '600px', height: '600px', }}>
      <Spline
        scene={`https://prod.spline.design/${sceneId}/scene.splinecode`}
      />
    </div>
  );
}
