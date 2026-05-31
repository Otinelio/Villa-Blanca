import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageTransition } from "./PageTransition-GNdNW4Ws.mjs";
import { M as MenuCard } from "./MenuCard-BmTql6Wr.mjs";
import { M as MENU, C as CATEGORIES } from "./menu-CS8OkNUP.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "./router-1vZrVOI4.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zustand.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function MenuPage() {
  const [cat, setCat] = reactExports.useState("pizzas");
  const items = MENU.filter((m) => m.category === cat);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { k: "menu", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[55vh] items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/hero-menu.jpg", alt: "Ingrédients de cuisine", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 text-warm-white md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xs uppercase tracking-[0.4em] text-gold", children: "La carte" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-7xl", children: "Notre Carte" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-[68px] z-30 border-b border-border bg-warm-white/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 md:px-8", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCat(c.id), className: `relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition ${cat === c.id ? "text-warm-white" : "text-charcoal/70 hover:text-charcoal"}`, children: [
      cat === c.id && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "cat-pill", className: "absolute inset-0 rounded-full bg-ember", transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: c.label })
    ] }, c.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-warm-white py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.35
    }, className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item: it }, it.id)) }, cat) }) })
  ] });
}
export {
  MenuPage as component
};
