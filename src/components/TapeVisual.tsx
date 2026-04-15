import Spline from "@splinetool/react-spline/next";

interface TapeVisualProps {
  sceneId: string;
  width: string;
  height: string;
}

export default function TapeVisual({
  sceneId,
  width,
  height,
}: TapeVisualProps) {
  return (
    <div className="z-5 relative" style={{ width, height }}>
      <Spline
        scene={`https://prod.spline.design/${sceneId}/scene.splinecode`}
      />
    </div>
  );
}
