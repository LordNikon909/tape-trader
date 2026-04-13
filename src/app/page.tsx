import { db } from "@/db";
import { tapes } from "@/db/schema";

export default async function Home() {
  // 1. Fetch tapes directly from Postgres using Drizzle
  const allTapes = await db.select().from(tapes);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-50">
      <main className="flex-1 w-full max-w-5xl mx-auto py-16 px-8">
        <header className="mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-4xl font-black tracking-tighter italic uppercase">
            Tape Trader
          </h1>
        </header>

        <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTapes.length > 0 ? (
            allTapes.map((tape) => (
              <div
                key={tape.id}
                className="group p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-sm"
              >
                <div className="aspect-[2/3] relative bg-zinc-100 dark:bg-gray-800 rounded-md mb-4 overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  {tape.image ? (
                    <img
                      src={tape.image}
                      alt={tape.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 italic text-xs">
                      No Cover Art
                    </div>
                  )}
                </div>
                <h2 className="text-lg mb-1">
                  {tape.title} by {tape.creatorName || "Unknown"}
                </h2>
                <div className="flex items-center gap-2">
                  {/* The Genre */}
                  <span>🎹 {tape.genre}</span>

                  {/* The Date with a left border */}
                  <span className="border-l border-gray-200 pl-2 ml-1" suppressHydrationWarning>
                    {tape.createdAt ? new Date(tape.createdAt).toLocaleDateString('en-US', {
                      month: '2-digit',
                      day: '2-digit',
                      year: 'numeric'
                    }) : 'No Date'}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <p className="text-zinc-500">
                The vault is empty. Add your first tape to the DB!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
