import { db } from "@/db";
import { tapes } from "@/db/schema";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import Tape from "@/components/Tape";

export default async function Home() {
  const session = await auth();
  const allTapes = await db.select().from(tapes);

  return (
    <div>
      <Navbar session={session} />

      <main>
        <section>
          <h1>TAPE TRADER</h1>
          <h2>One New Mixtape. Every Month.</h2>
        </section>

        <section>
          {allTapes.length > 0 ? (
            allTapes.map((tape) => (
              <Tape key={tape.id} tape={tape} />
            ))
          ) : (
            <p>The vault is empty. Add your first tape to the DB!</p>
          )}
        </section>
      </main>
    </div>
  );
}
