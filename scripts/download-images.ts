import { mkdir } from "fs/promises";
import { MENU } from "../src/data/menu";
import { ROOMS } from "../src/data/rooms";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "public", "images");

async function download(url: string, filename: string) {
  const dest = path.join(OUT_DIR, filename);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    await Bun.write(dest, buffer);
    console.log(`✅ Downloaded ${filename}`);
  } catch (err) {
    console.error(`❌ Failed ${filename}:`, err.message);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const tasks: (() => Promise<void>)[] = [];

  const add = (seed: string, w: number, h: number, filename: string) => {
    tasks.push(() => download(`https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`, filename));
  };

  add("pizza-hero", 1920, 1080, "hero-index.jpg");
  add("room-hero", 900, 700, "hero-room.jpg");
  add("events-hero", 1920, 1080, "hero-events.jpg");
  add("menu-hero", 1920, 1080, "hero-menu.jpg");
  add("hotel-hero", 1920, 1080, "hero-hotel.jpg");
  add("gallery-hero", 1920, 1080, "hero-gallery.jpg");

  const QUERIES = {
    Pizzas: ["artisan pizza wood fired close up", "pizza margherita", "pizza dark restaurant", "pizza oven flames"],
    Grillades: ["grilled meat charcoal restaurant", "bbq grill flames", "steak grilled close up", "grilled fish plate"],
    Burgers: ["gourmet burger restaurant dark", "burger smash cheese", "burger fries plate", "burger close up"],
    Hôtel: ["boutique hotel room tropical", "hotel suite cozy", "hotel lobby warm", "hotel pool tropical"],
    Événements: ["restaurant private event decoration", "wedding table setting", "birthday party restaurant", "candlelit dinner"],
  };

  for (const cat of Object.values(QUERIES)) {
    for (const q of cat) {
      const w = 600;
      const h = 500 + Math.floor(Math.random() * 300);
      const filename = `gallery-${encodeURIComponent(q).replace(/%/g, '_')}.jpg`;
      add(q, w, h, filename);
    }
  }

  for (let i = 0; i < 6; i++) {
    const w = 600;
    const h = 500 + ((i * 70) % 250);
    const filename = `event-${i}.jpg`;
    add(`event-${i}`, w, h, filename);
  }
  
  for (const item of [...MENU, ...ROOMS]) {
    const filename = `item-${item.id}.jpg`;
    add(item.id, 800, 600, filename);
  }

  const limit = 10; // increase limit to speed up
  for (let i = 0; i < tasks.length; i += limit) {
    const batch = tasks.slice(i, i + limit);
    await Promise.all(batch.map(fn => fn()));
  }
  console.log("🎉 All downloads finished!");
}
main();
