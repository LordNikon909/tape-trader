import { db } from "@/db";
import { tapes } from "@/db/schema";
import Tape from "@/components/Tape";
import Image from "next/image";

export default async function Home() {
  const allTapes = await db.select().from(tapes);

  return (
    <main>
      <section className="mt-10 text-center w-fit mx-auto font-light text-3xl">
        <h1 className="mb-8">
          <Image
            src="/images/heroText.png"
            alt="Tape Trader"
            width={785}
            height={136}
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
    </main>
  );
}
