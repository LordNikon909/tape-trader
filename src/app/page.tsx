import { db } from "@/db";
import { tapes } from "@/db/schema";
import Tape from "@/components/Tape";
import Image from "next/image";

export default async function Home() {
  const allTapes = await db.select().from(tapes);

  return (
    <main>
      <section className="mt-25 text-center w-fit mx-auto font-light text-3xl relative z-4">
        <h1 className="mb-8">
          <Image
            src="/images/heroText.png"
            alt="Tape Trader"
            width={785}
            height={136}
            style={{ width: '785px', height: 'auto' }}
            priority
          />
        </h1>
        <h2>One New Mixtape. Every Month.</h2>
      </section>

      <section>
        {allTapes.length > 0 ? (
          allTapes.map((tape) => <Tape key={tape.id} tape={tape} />)
        ) : (
          <p>The vault is empty. Add your first tape to the DB!</p>
        )}
      </section>

      <section>
        <h2 className="font-header text-7xl">Recent Tapes</h2>
      </section>

    </main>
  );
}
