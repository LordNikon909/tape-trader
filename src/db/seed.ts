import { db } from "./index";
import { tapes } from "./schema";

const sampleTapes = [
  {
    title: "As the Sun Goes Down",
    genre: "Chillout",
    creatorName: "Pools On Roofs",
    splineId: "NhHvSm6MpASc3AFx",
    audioUrl: "https://pub-bf0039172edc48cc92824fe445a6934b.r2.dev/mix-test-01.mp3",
    duration: 2698,
    timeline: [
      { time: 0, title: "Model", artist: "Balanescu Quartet" },
      { time: 204, title: "Storm", artist: "Rare Silk" },
      { time: 496, title: "When First I Love", artist: "Martin Denny" },
      { time: 636, title: "Impasto", artist: "Sven Wunder" },
      { time: 822, title: "Remind Me", artist: "Patrice Rushen" },
      { time: 1126, title: "Heaven and Hell Is on Earth", artist: "20th Century Steel Band" },
      { time: 1414, title: "Midnight Sun", artist: "Lionel Hampton" },
      { time: 1610, title: "Ghetto Organ", artist: "Jackie Mittoo" },
      { time: 1864, title: "IZ-US", artist: "Aphex Twin" },
      { time: 2032, title: "I Want To Know - Pt. 2", artist: "Adriano Celentano" },
      { time: 2436, title: "Washington - edt vrs", artist: "Lucio Dalla" }
    ]
  },
  {
    title: "Playstation Junglist Vol. 1",
    genre: "Jungle",
    creatorName: "Neon Dreams",
    splineId: "OR9ljVlwo4P5xcWi",
    audioUrl: "https://soundhelix.com",
    duration: 420,
    timeline: [
      { time: 0, title: "Nightcall", artist: "Kavinsky" },
      { time: 180, title: "Turbo Killer", artist: "Carpenter Brut" }
    ]
  },
  {
    title: "90s Rave Toonz",
    genre: "Rave",
    creatorName: "My Selector",
    splineId: "J2fPs0uCNHXUKBIX",
    audioUrl: "https://soundhelix.com",
    duration: 300,
    timeline: [{ time: 0, title: "Rainy Night", artist: "Lofi Guy" }]
  }
];

async function seed() {
  console.log("🗑️ Cleaning database...");
  try {
    await db.delete(tapes);
    console.log("✅ Database cleared.");

    console.log("🌱 Seeding fresh catalog...");
    await db.insert(tapes).values(sampleTapes);
    console.log("✅ Ready to play.");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  }
  process.exit(0);
}

seed();
