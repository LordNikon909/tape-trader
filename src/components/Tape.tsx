import { tapes } from "@/db/schema";
import TapeVisual from "./TapeVisual";

type Tape = typeof tapes.$inferSelect;

export default function Tape({ tape }: { tape: Tape }) {
  const visualSize = "600px"; // TODO -- Make this a prop later

  return (
    <div className="text-center w-fit mx-auto text-xl -mt-23">
      <a className="mix" href="#">
        <TapeVisual
          // TODO -- remove hardcoding later
          sceneId="evLFn9Iv4hygE4oE"
          width={visualSize}
          height={visualSize}
        />

        <div
          className="hover-container top-0 z-1 absolute"
          style={{ width: visualSize, height: visualSize }}
        >
          <div className="hovicon effect-3 sub-b"></div>
        </div>
      </a>
      <div className="-mt-20 relative z-3">
        <h2 className="uppercase mb-4">
          <b>{tape.title}</b> by {tape.creatorName || "Unknown"}
        </h2>
        <div>
          <span>🎹 {tape.genre}</span>
          <span
            suppressHydrationWarning
            style={{
              marginLeft: "10px",
              paddingLeft: "10px",
              borderLeft: "1px solid #ccc",
            }}
          >
            {tape.createdAt
              ? new Date(tape.createdAt).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })
              : "No Date"}
          </span>
        </div>
      </div>
    </div>
  );
}
