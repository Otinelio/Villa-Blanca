import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MENU, C as CATEGORIES } from "./menu-CS8OkNUP.mjs";
import { f as fcfa } from "./router-1vZrVOI4.mjs";
import { u as useOrders } from "./ordersStore-DtcJp2kV.mjs";
import { d as Check, t as Plus, q as Minus, T as Trash2, w as ShoppingCart } from "../_libs/lucide-react.mjs";
function QrOrderFlow({
  type,
  number,
  title,
  subtitle,
  withDelivery = false
}) {
  const [cat, setCat] = reactExports.useState("pizzas");
  const [lines, setLines] = reactExports.useState([]);
  const [when, setWhen] = reactExports.useState("Maintenant");
  const [sent, setSent] = reactExports.useState(false);
  const addOrder = useOrders((s) => s.add);
  const items = MENU.filter((m) => m.category === cat);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const add = (id) => {
    setLines((xs) => {
      const ex = xs.find((x) => x.id === id);
      if (ex) return xs.map((x) => x.id === id ? { ...x, qty: x.qty + 1 } : x);
      const m = MENU.find((m2) => m2.id === id);
      return [...xs, { id, name: m.name, price: m.price, qty: 1 }];
    });
  };
  const setQty = (id, qty) => setLines((xs) => xs.map((x) => x.id === id ? { ...x, qty } : x).filter((x) => x.qty > 0));
  const remove = (id) => setLines((xs) => xs.filter((x) => x.id !== id));
  const submit = () => {
    if (!lines.length) return;
    addOrder({
      type,
      ...type === "table" ? { table: number } : { room: number },
      items: lines,
      total,
      ...withDelivery ? { deliveryWhen: when } : {}
    });
    setSent(true);
    setLines([]);
  };
  if (sent) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-charcoal p-6 text-warm-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-10 w-10 text-sage" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-3xl", children: "Commande envoyée !" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-warm-white/75", children: type === "table" ? "Notre équipe vous confirme dans quelques instants." : "Votre commande sera livrée dans votre chambre sous 30 minutes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setSent(false),
          className: "mt-8 rounded-full bg-ember px-6 py-3 font-semibold text-warm-white hover:ember-glow",
          children: "Nouvelle commande"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal pb-40 text-warm-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-white/10 bg-charcoal/95 px-6 py-5 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-3xl items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "VILLA BLANCA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs uppercase tracking-widest text-gold", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-3xl text-ember", children: subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-10 mx-auto max-w-3xl overflow-x-auto border-b border-white/5 bg-charcoal/95 px-4 py-3 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCat(c.id),
        className: `whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition ${cat === c.id ? "bg-ember text-warm-white" : "border border-white/15 text-warm-white/70"}`,
        children: c.label
      },
      c.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mx-auto max-w-3xl space-y-3 px-4 py-6", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.image, alt: it.name, loading: "lazy", className: "h-16 w-16 rounded-md object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: it.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-warm-white/65", children: it.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-accent text-sm text-gold", children: fcfa(it.price) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => add(it.id),
          className: "rounded-full bg-ember p-2.5 hover:scale-105",
          "aria-label": "Ajouter",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
        }
      )
    ] }, it.id)) }),
    lines.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 border-t border-white/10 bg-charcoal/98 px-4 py-4 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-3 max-h-40 space-y-2 overflow-y-auto", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: l.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(l.id, l.qty - 1), className: "rounded border border-white/20 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 text-center", children: l.qty }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(l.id, l.qty + 1), className: "rounded border border-white/20 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(l.id), "aria-label": "Retirer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-warm-white/60" }) })
      ] }, l.id)) }),
      withDelivery && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex gap-2", children: ["Maintenant", "+30 min", "+1h"].map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setWhen(w),
          className: `flex-1 rounded-md border px-3 py-2 text-xs ${when === w ? "border-ember bg-ember text-warm-white" : "border-white/20 text-warm-white/70"}`,
          children: w
        },
        w
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-warm-white/70", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-2xl text-gold", children: fcfa(total) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: submit,
          className: "flex w-full items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold hover:ember-glow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-4 w-4" }),
            " Envoyer la Commande"
          ]
        }
      )
    ] }) })
  ] });
}
export {
  QrOrderFlow as Q
};
