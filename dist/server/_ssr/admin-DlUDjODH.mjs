import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { P as PinGate } from "./PinGate-CwfO5Otb.mjs";
import { u as useOrders } from "./ordersStore-DtcJp2kV.mjs";
import { M as MENU } from "./menu-CS8OkNUP.mjs";
import { R as ROOMS } from "./rooms-DAvJFAqr.mjs";
import { P as PACKS } from "./packs-D_DO5PhB.mjs";
import { f as fcfa } from "./router-1vZrVOI4.mjs";
import { L as LayoutDashboard, y as UtensilsCrossed, a as Building2, b as CalendarDays, P as Package, I as Image, Q as QrCode, u as Settings } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const NAV = [{
  id: "dash",
  label: "Dashboard",
  Icon: LayoutDashboard
}, {
  id: "menu",
  label: "Menu",
  Icon: UtensilsCrossed
}, {
  id: "hotel",
  label: "Hôtel",
  Icon: Building2
}, {
  id: "reservations",
  label: "Réservations",
  Icon: CalendarDays
}, {
  id: "packs",
  label: "Packs Groupe",
  Icon: Package
}, {
  id: "gallery",
  label: "Galerie",
  Icon: Image
}, {
  id: "qrcodes",
  label: "Codes QR",
  Icon: QrCode
}, {
  id: "settings",
  label: "Paramètres",
  Icon: Settings
}];
function Admin() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PinGate, { pin: "9999", title: "Admin Villa Blanca", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shell, {}) });
}
function Shell() {
  const [tab, setTab] = reactExports.useState("dash");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen bg-warm-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-60 shrink-0 border-r border-border bg-charcoal text-warm-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/10 px-5 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: "VILLA BLANCA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-[10px] uppercase tracking-widest text-gold", children: "Admin" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "p-3", children: NAV.map(({
        id,
        label,
        Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(id), className: `mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition ${tab === id ? "bg-ember text-warm-white" : "text-warm-white/70 hover:bg-white/5"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
        " ",
        label
      ] }, id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-x-auto p-8", children: [
      tab === "dash" && /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardView, {}),
      tab === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsx(MenuView, {}),
      tab === "hotel" && /* @__PURE__ */ jsxRuntimeExports.jsx(HotelView, {}),
      tab === "reservations" && /* @__PURE__ */ jsxRuntimeExports.jsx(ReservationsView, {}),
      tab === "packs" && /* @__PURE__ */ jsxRuntimeExports.jsx(PacksView, {}),
      tab === "gallery" && /* @__PURE__ */ jsxRuntimeExports.jsx(Placeholder, { title: "Galerie", desc: "Gérez les photos affichées sur le site." }),
      tab === "qrcodes" && /* @__PURE__ */ jsxRuntimeExports.jsx(QRCodesView, {}),
      tab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsx(Placeholder, { title: "Paramètres", desc: "Configuration générale du site." })
    ] })
  ] });
}
function DashboardView() {
  const orders = useOrders((s) => s.orders);
  const today = orders.filter((o) => new Date(o.time).toDateString() === (/* @__PURE__ */ new Date()).toDateString());
  const rev = today.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);
  const stats = [{
    l: "Réservations aujourd'hui",
    v: today.filter((o) => o.type === "table").length
  }, {
    l: "Commandes du jour",
    v: today.length
  }, {
    l: "Revenus FCFA",
    v: fcfa(rev)
  }, {
    l: "Taux occupation hôtel",
    v: "78%"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: s.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-accent text-2xl text-ember", children: s.v })
    ] }, s.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-10 font-display text-xl", children: "Commandes récentes" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 overflow-hidden rounded-xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-beige text-left text-xs uppercase tracking-wider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "N°" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Statut" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        orders.slice(0, 10).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 capitalize", children: o.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: o.table || o.room }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-accent text-ember", children: fcfa(o.total) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 capitalize", children: o.status })
        ] }, o.id)),
        orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "px-4 py-10 text-center text-muted-foreground", children: "Aucune commande" }) })
      ] })
    ] }) })
  ] });
}
function MenuView() {
  const [items, setItems] = reactExports.useState(() => MENU.map((m) => ({
    ...m,
    sold_out: false
  })));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Menu" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Gérez la disponibilité et les prix." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden rounded-xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-beige text-left text-xs uppercase tracking-wider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Article" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Catégorie" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Prix" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Statut" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-medium", children: it.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 capitalize", children: it.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: it.price, onChange: (e) => {
          const v = Number(e.target.value);
          setItems((xs) => xs.map((x, k) => k === i ? {
            ...x,
            price: v
          } : x));
        }, className: "w-24 rounded border border-border bg-background px-2 py-1 text-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setItems((xs) => xs.map((x, k) => k === i ? {
          ...x,
          sold_out: !x.sold_out
        } : x)), className: `rounded-full px-3 py-1 text-xs font-semibold ${it.sold_out ? "bg-destructive text-white" : "bg-sage text-white"}`, children: it.sold_out ? "Épuisé" : "Disponible" }) })
      ] }, it.id)) })
    ] }) })
  ] });
}
function HotelView() {
  const [rows, setRows] = reactExports.useState(() => Array.from({
    length: 12
  }).map((_, i) => ({
    n: i + 101,
    type: ROOMS[i % 3].name,
    status: i % 3 === 0 ? "Occupée" : "Disponible",
    guest: ""
  })));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Chambres" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl", children: [
          "Chambre ",
          r.n
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${r.status === "Disponible" ? "bg-sage/15 text-sage" : r.status === "Occupée" ? "bg-ember/15 text-ember" : "bg-gold/20 text-gold"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }),
          " ",
          r.status
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: r.type }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Nom client", value: r.guest, onChange: (e) => setRows((xs) => xs.map((x, k) => k === i ? {
        ...x,
        guest: e.target.value
      } : x)), className: "mt-3 w-full rounded border border-border bg-background px-2 py-1 text-sm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-1", children: ["Disponible", "Occupée", "Maintenance"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRows((xs) => xs.map((x, k) => k === i ? {
        ...x,
        status: s
      } : x)), className: `flex-1 rounded border px-2 py-1 text-[10px] ${r.status === s ? "border-ember bg-ember text-warm-white" : "border-border"}`, children: s }, s)) })
    ] }, r.n)) })
  ] });
}
function ReservationsView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Réservations" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Toutes les réservations restaurant, hôtel et événements." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-2", children: [{
      l: "Restaurant",
      c: "bg-ember"
    }, {
      l: "Hôtel",
      c: "bg-gold"
    }, {
      l: "Événement",
      c: "bg-sage"
    }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${x.c}` }),
      " ",
      x.l
    ] }, x.l)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground", children: "Calendrier des réservations — données reçues via WhatsApp et saisies manuellement." })
  ] });
}
function PacksView() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Packs & Événements" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 md:grid-cols-2", children: PACKS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "rounded border border-border bg-background px-2 py-1 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "En discussion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Confirmé" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Annulé" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: p.price })
    ] }, p.id)) })
  ] });
}
function Placeholder({
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl border border-dashed border-border bg-card p-16 text-center text-muted-foreground", children: "Section en cours de configuration." })
  ] });
}
function QRCodesView() {
  const [tables] = reactExports.useState(() => Array.from({
    length: 15
  }, (_, i) => i + 1));
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl", children: "Codes QR Tables" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Scannez ces codes pour ouvrir directement le menu de commande pour la table spécifique." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: tables.map((t) => {
      const url = `${baseUrl}/table/${t}`;
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&color=2E2A27&bgcolor=FFFFFF`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-gold", children: [
          "Table ",
          t
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-hidden rounded-lg border-[6px] border-white bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: qrUrl, alt: `QR Code Table ${t}`, className: "h-36 w-36", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[10px] text-muted-foreground break-all", children: url }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex w-full gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => window.open(url, "_blank"), className: "flex-1 rounded bg-ember py-2 text-xs font-semibold text-white transition hover:bg-ember/90", children: "Ouvrir" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            const link = document.createElement("a");
            link.href = qrUrl;
            link.download = `QR_Table_${t}.png`;
            link.target = "_blank";
            link.click();
          }, className: "flex-1 rounded border border-border bg-transparent py-2 text-xs font-semibold transition hover:bg-black/5", children: "Télécharger" })
        ] })
      ] }, t);
    }) })
  ] });
}
export {
  Admin as component
};
