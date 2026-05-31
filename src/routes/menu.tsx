import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/villa/PageTransition";
import { MenuCard } from "@/components/villa/MenuCard";
import { MENU, CATEGORIES, type MenuCategory } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Notre Carte · Villa Blanca Lomé" },
      { name: "description", content: "Pizzas artisanales, grillades, burgers, accompagnements, boissons et desserts. La carte complète Villa Blanca." },
      { property: "og:title", content: "Notre Carte · Villa Blanca" },
      { property: "og:description", content: "Pizzas, grillades, burgers et plus." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState<MenuCategory>("pizzas");
  const items = MENU.filter((m) => m.category === cat);

  return (
    <PageTransition k="menu">
      <section className="relative flex h-[55vh] items-end overflow-hidden">
        <img
          src="/images/hero-menu.jpg"
          alt="Ingrédients de cuisine"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 text-warm-white md:px-8">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-gold">
            La carte
          </span>
          <h1 className="mt-2 font-display text-5xl md:text-7xl">Notre Carte</h1>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 border-b border-border bg-warm-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 md:px-8">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition ${
                cat === c.id ? "text-warm-white" : "text-charcoal/70 hover:text-charcoal"
              }`}
            >
              {cat === c.id && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full bg-ember"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative">{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      <section className="bg-warm-white py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((it) => (
              <MenuCard key={it.id} item={it} />
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
