import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PinGate } from "./PinGate-CwfO5Otb.mjs";
import { u as useOrders } from "./ordersStore-DtcJp2kV.mjs";
import { f as fcfa } from "./router-1vZrVOI4.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { h as Clock, d as Check, T as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/zustand.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Reception() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PinGate, { pin: "9999", title: "Réception Villa Blanca", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, {}) });
}
const STATUS = {
  pending: {
    label: "En attente",
    dot: "bg-gold"
  },
  confirmed: {
    label: "Confirmée",
    dot: "bg-sky-500"
  },
  delivered: {
    label: "Livrée",
    dot: "bg-sage"
  },
  cancelled: {
    label: "Annulée",
    dot: "bg-destructive"
  }
};
function timeAgo(iso) {
  const d = (Date.now() - new Date(iso).getTime()) / 6e4;
  if (d < 1) return "À l'instant";
  if (d < 60) return `Il y a ${Math.floor(d)} min`;
  return `Il y a ${Math.floor(d / 60)}h`;
}
function chime() {
  if (typeof window === "undefined") return;
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.value = 0.12;
    osc.connect(gain).connect(ac.destination);
    osc.start();
    osc.stop(ac.currentTime + 0.3);
  } catch {
  }
}
function Dashboard() {
  const orders = useOrders((s) => s.orders);
  const setStatus = useOrders((s) => s.setStatus);
  const remove = useOrders((s) => s.remove);
  const [tick, setTick] = reactExports.useState(0);
  const lastCount = reactExports.useRef(orders.length);
  const [pulseId, setPulseId] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 5e3);
    return () => clearInterval(i);
  }, []);
  reactExports.useEffect(() => {
    if (orders.length > lastCount.current) {
      chime();
      setPulseId(orders[0]?.id ?? null);
      setTimeout(() => setPulseId(null), 2400);
    }
    lastCount.current = orders.length;
  }, [orders.length]);
  const today = orders.filter((o) => new Date(o.time).toDateString() === (/* @__PURE__ */ new Date()).toDateString());
  const pending = today.filter((o) => o.status === "pending").length;
  const revenue = today.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-warm-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border bg-charcoal text-warm-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "Réception · Villa Blanca" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs uppercase tracking-widest text-gold", children: "Tableau de bord en direct" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Commandes", value: today.length }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "En attente", value: pending }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { label: "Revenus", value: fcfa(revenue) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-6 py-8", children: [
      orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-dashed border-border bg-card p-16 text-center text-muted-foreground", children: "Aucune commande pour le moment. Les nouvelles arrivent en temps réel." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: orders.map((o) => {
        const st = STATUS[o.status];
        const isPulse = pulseId === o.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          scale: 0.95
        }, className: `rounded-xl border bg-card p-5 shadow-sm ${isPulse ? "border-sage pulse-ring" : "border-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block rounded-full px-3 py-1 text-xs font-bold ${o.type === "table" ? "bg-sky-100 text-sky-700" : "bg-purple-100 text-purple-700"}`, children: o.type === "table" ? `Table ${o.table}` : `Chambre ${o.room}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center gap-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
                " ",
                timeAgo(o.time),
                o.deliveryWhen && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  " · Livraison ",
                  o.deliveryWhen
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-full ${st.dot}` }),
              st.label
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1 border-t border-border pt-3 text-sm", children: o.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              i.name,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                "×",
                i.qty
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-ember", children: fcfa(i.price * i.qty) })
          ] }, i.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between border-t border-border pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-lg text-ember", children: fcfa(o.total) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
            o.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus(o.id, "confirmed"), className: "flex-1 rounded-md bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white", children: "Confirmer" }),
            o.status !== "delivered" && o.status !== "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setStatus(o.id, "delivered"), className: "flex-1 rounded-md bg-sage px-3 py-1.5 text-xs font-semibold text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mr-1 inline h-3 w-3" }),
              " Livré"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(o.id), className: "rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }) })
          ] })
        ] }, o.id);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-xs text-muted-foreground", children: [
        "Mise à jour automatique · ",
        tick
      ] })
    ] })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-xl text-gold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-warm-white/65", children: label })
  ] });
}
export {
  Reception as component
};
