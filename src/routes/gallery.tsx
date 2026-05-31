import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/villa/PageTransition";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galerie · Villa Blanca Lomé" },
      { name: "description", content: "Plongez dans l'univers Villa Blanca : pizzas, grillades, burgers, hôtel et événements." },
      { property: "og:title", content: "Galerie · Villa Blanca" },
      { property: "og:description", content: "Photos de notre restaurant et hôtel." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const FILTERS = ["Tout", "Pizzas", "Grillades", "Burgers", "Hôtel", "Événements"] as const;
type Filter = (typeof FILTERS)[number];

const QUERIES: Record<Filter, string[]> = {
  Tout: [],
  Pizzas: ["artisan pizza wood fired close up", "pizza margherita", "pizza dark restaurant", "pizza oven flames"],
  Grillades: ["grilled meat charcoal restaurant", "bbq grill flames", "steak grilled close up", "grilled fish plate"],
  Burgers: ["gourmet burger restaurant dark", "burger smash cheese", "burger fries plate", "burger close up"],
  Hôtel: ["boutique hotel room tropical", "hotel suite cozy", "hotel lobby warm", "hotel pool tropical"],
  Événements: ["restaurant private event decoration", "wedding table setting", "birthday party restaurant", "candlelit dinner"],
};

interface Photo { src: string; cat: Filter }

const PHOTOS: Photo[] = (Object.keys(QUERIES) as Filter[])
  .filter((c) => c !== "Tout")
  .flatMap((c) =>
    QUERIES[c].map((q) => ({
      cat: c,
      src: `/images/gallery-${encodeURIComponent(q).replace(/%/g, '_')}.jpg`,
    })),
  );

function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("Tout");
  const [idx, setIdx] = useState<number | null>(null);
  const photos = filter === "Tout" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  const close = () => setIdx(null);
  const prev = () => setIdx((i) => (i === null ? null : (i + photos.length - 1) % photos.length));
  const next = () => setIdx((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <PageTransition k="gallery">
      <section className="relative flex h-[55vh] items-end overflow-hidden">
        <img
          src="/images/hero-gallery.jpg"
          alt="Ambiance Villa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 text-warm-white md:px-8">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-gold">Galerie</span>
          <h1 className="mt-2 font-display text-5xl md:text-7xl">Notre Univers</h1>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 border-b border-border bg-warm-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-4 md:px-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                filter === f ? "bg-ember text-warm-white" : "border border-border text-charcoal/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-warm-white py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="mb-4 block w-full overflow-hidden rounded-xl"
              >
                <img
                  src={p.src}
                  alt={p.cat}
                  loading="lazy"
                  className="w-full object-cover transition hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
            onClick={close}
          >
            <button className="absolute right-4 top-4 text-warm-white" onClick={close} aria-label="Fermer">
              <X className="h-7 w-7" />
            </button>
            <button
              className="absolute left-4 text-warm-white"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Précédent"
            >
              <ChevronLeft className="h-9 w-9" />
            </button>
            <img
              src={photos[idx].src}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 text-warm-white"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Suivant"
              style={{ top: "50%" }}
            >
              <ChevronRight className="h-9 w-9" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
