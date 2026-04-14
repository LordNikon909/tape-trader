import { tapes } from "@/db/schema";
import TapeVisual from "./TapeVisual";

type Tape = typeof tapes.$inferSelect;

export default function Tape({ tape }: { tape: Tape }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div>
        <TapeVisual sceneId="VF2a1FdyNybFj6w6" />
      </div>

      <h2>
        <b>{tape.title}</b> by {tape.creatorName || "Unknown"}
      </h2>

      <div>
        <span>🎹 {tape.genre}</span>
        <span suppressHydrationWarning style={{ marginLeft: "10px", paddingLeft: "10px", borderLeft: "1px solid #ccc" }}>
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
  );
}
