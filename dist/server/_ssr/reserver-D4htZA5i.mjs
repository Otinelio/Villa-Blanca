import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageTransition } from "./PageTransition-GNdNW4Ws.mjs";
import { R as ROOMS } from "./rooms-DAvJFAqr.mjs";
import { w as waLink, e as buildTableReservation, d as buildRoomReservation } from "./router-1vZrVOI4.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { p as MessageCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const HEURES = ["11h", "12h30", "14h", "19h", "20h30", "21h30"];
function ReserverPage() {
  const [tab, setTab] = reactExports.useState("table");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { k: "reserver", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal py-24 text-warm-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xs uppercase tracking-[0.4em] text-gold", children: "Réservation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Réservez votre moment" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-warm-white py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center gap-2 rounded-full border border-border bg-card p-1.5", children: ["table", "chambre"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTab(t), className: "relative flex-1 rounded-full px-5 py-2 text-sm font-medium", children: [
        tab === t && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "tab-pill", className: "absolute inset-0 rounded-full bg-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative ${tab === t ? "text-warm-white" : "text-charcoal/70"}`, children: t === "table" ? "Réserver une Table" : "Réserver une Chambre" })
      ] }, t)) }),
      tab === "table" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableForm, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(RoomForm, {})
    ] }) })
  ] });
}
function TableForm() {
  const [f, setF] = reactExports.useState({
    date: "",
    heure: HEURES[3],
    couverts: 2,
    nom: "",
    tel: "",
    notes: ""
  });
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(buildTableReservation(f)), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid gap-4 rounded-xl border border-border bg-card p-7 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Date", type: "date", v: f.date, on: (v) => setF({
      ...f,
      date: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Heure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.heure, onChange: (e) => setF({
        ...f,
        heure: e.target.value
      }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", children: HEURES.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: h }, h)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Couverts", type: "number", v: String(f.couverts), on: (v) => setF({
      ...f,
      couverts: Number(v)
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Nom", v: f.nom, on: (v) => setF({
      ...f,
      nom: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Téléphone", v: f.tel, on: (v) => setF({
      ...f,
      tel: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Demandes spéciales" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: f.notes, onChange: (e) => setF({
        ...f,
        notes: e.target.value
      }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
      " Envoyer via WhatsApp"
    ] })
  ] });
}
function RoomForm() {
  const [f, setF] = reactExports.useState({
    nom: "",
    email: "",
    tel: "",
    type: "Chambre Standard",
    arrivee: "",
    depart: "",
    personnes: 1,
    notes: ""
  });
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(buildRoomReservation(f)), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "grid gap-4 rounded-xl border border-border bg-card p-7 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Nom complet", v: f.nom, on: (v) => setF({
      ...f,
      nom: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Email", type: "email", v: f.email, on: (v) => setF({
      ...f,
      email: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Téléphone", v: f.tel, on: (v) => setF({
      ...f,
      tel: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Type de chambre" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: f.type, onChange: (e) => setF({
        ...f,
        type: e.target.value
      }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", children: ROOMS.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: r.name }, r.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Arrivée", type: "date", v: f.arrivee, on: (v) => setF({
      ...f,
      arrivee: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Départ", type: "date", v: f.depart, on: (v) => setF({
      ...f,
      depart: v
    }), required: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(In, { l: "Personnes", type: "number", v: String(f.personnes), on: (v) => setF({
      ...f,
      personnes: Number(v)
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Demandes spéciales" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, value: f.notes, onChange: (e) => setF({
        ...f,
        notes: e.target.value
      }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
      " Envoyer via WhatsApp"
    ] })
  ] });
}
function In({
  l,
  v,
  on,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: l }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, required, value: v, onChange: (e) => on(e.target.value), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
  ] });
}
export {
  ReserverPage as component
};
