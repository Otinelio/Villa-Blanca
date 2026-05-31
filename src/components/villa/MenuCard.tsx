import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/store/cartStore";
import { fcfa } from "@/lib/whatsapp";

const BADGE_COLOR: Record<string, string> = {
  Bestseller: "bg-ember text-warm-white",
  "Chef's Choice": "bg-gold text-charcoal",
  Nouveau: "bg-sage text-warm-white",
};

export function MenuCard({ item }: { item: MenuItem }) {
  const add = useCart((s) => s.add);
  const setOpen = useCart((s) => s.setOpen);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm ember-glow-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
              BADGE_COLOR[item.badge] ?? "bg-ember text-warm-white"
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-accent text-lg font-bold uppercase">{item.name}</h3>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-accent text-xl text-ember">{fcfa(item.price)}</span>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              add({ id: item.id, name: item.name, price: item.price, image: item.image });
              setOpen(true);
            }}
            className="flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-warm-white transition hover:bg-ember"
          >
            <Plus className="h-3.5 w-3.5" /> Ajouter
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
