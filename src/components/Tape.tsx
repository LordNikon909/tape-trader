// We can import the type directly from our schema!
import { tapes } from "@/db/schema";

type Tape = typeof tapes.$inferSelect;

export default function TapeCard({ tape }: { tape: Tape }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div>
        {tape.image ? (
          <img
            src={tape.image}
            alt={tape.title}
            style={{
              width: "450px",
              height: "450px",
              objectFit: "cover",
            }}
          />
        ) : (
          <div style={{ width: "450px", height: "450px", border: "1px solid #ccc", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            No Cover Art
          </div>
        )}
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
