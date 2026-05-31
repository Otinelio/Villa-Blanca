import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useCart, f as fcfa } from "./router-1vZrVOI4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { t as Plus } from "../_libs/lucide-react.mjs";
const BADGE_COLOR = {
  Bestseller: "bg-ember text-warm-white",
  "Chef's Choice": "bg-gold text-charcoal",
  Nouveau: "bg-sage text-warm-white"
};
function MenuCard({ item }) {
  const add = useCart((s) => s.add);
  const setOpen = useCart((s) => s.setOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      whileHover: { y: -4 },
      transition: { duration: 0.25 },
      className: "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm ember-glow-hover",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.image,
              alt: item.name,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            }
          ),
          item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${BADGE_COLOR[item.badge] ?? "bg-ember text-warm-white"}`,
              children: item.badge
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-accent text-lg font-bold uppercase", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 flex-1 text-sm text-muted-foreground", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xl text-ember", children: fcfa(item.price) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                whileTap: { scale: 0.92 },
                onClick: () => {
                  add({ id: item.id, name: item.name, price: item.price, image: item.image });
                  setOpen(true);
                },
                className: "flex items-center gap-1.5 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-warm-white transition hover:bg-ember",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }),
                  " Ajouter"
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  MenuCard as M
};
