import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageTransition } from "./PageTransition-GNdNW4Ws.mjs";
import { S as SectionReveal } from "./SectionReveal-B73Cc7kh.mjs";
import { P as PACKS } from "./packs-D_DO5PhB.mjs";
import { w as waLink, c as buildPackInquiry } from "./router-1vZrVOI4.mjs";
import { U as Users, H as Heart, B as Briefcase, r as PartyPopper, d as Check, p as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
const ICON = {
  party: PartyPopper,
  briefcase: Briefcase,
  heart: Heart,
  users: Users
};
function EventsPage() {
  const [form, setForm] = reactExports.useState({
    type: "",
    date: "",
    personnes: 10,
    budget: "",
    notes: ""
  });
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(buildPackInquiry({
      pack: form.type || "Demande personnalisée",
      date: form.date,
      personnes: form.personnes,
      budget: form.budget,
      notes: form.notes
    })), "_blank");
  };
  const gallery = Array.from({
    length: 6
  }).map((_, i) => `/images/event-${i}.jpg`);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { k: "events", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[60vh] items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/hero-events.jpg", alt: "Événements", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 hero-overlay" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 text-warm-white md:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xs uppercase tracking-[0.4em] text-gold", children: "Vos célébrations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-7xl", children: "Occasions Spéciales" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-warm-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-8", children: PACKS.map((p, i) => {
      const Icon = ICON[p.icon];
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SectionReveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm ember-glow-hover", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-ember/10 text-ember", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: p.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-accent text-xs uppercase tracking-widest text-gold", children: p.min }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-1.5 text-sm", children: p.includes.map((i2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-charcoal/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 text-sage" }),
          " ",
          i2
        ] }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-accent text-lg text-ember", children: p.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink(`Bonjour Villa Blanca, je suis intéressé(e) par : ${p.name}`), target: "_blank", rel: "noreferrer", className: "mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-warm-white transition hover:bg-ember", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " ",
          p.cta
        ] })
      ] }) }, p.id);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-4xl", children: "Sur Mesure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-muted-foreground", children: "Décrivez-nous votre projet, on revient vers vous rapidement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-10 grid gap-4 rounded-xl border border-border bg-card p-7 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Type d'événement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.type, onChange: (e) => setForm({
            ...form,
            type: e.target.value
          }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Date souhaitée" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: form.date, onChange: (e) => setForm({
            ...form,
            date: e.target.value
          }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Nombre de personnes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: form.personnes, onChange: (e) => setForm({
            ...form,
            personnes: Number(e.target.value)
          }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Budget estimé" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: form.budget, onChange: (e) => setForm({
            ...form,
            budget: e.target.value
          }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Demandes particulières" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, value: form.notes, onChange: (e) => setForm({
            ...form,
            notes: e.target.value
          }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " Envoyer ma demande"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-warm-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-4xl", children: "Ils ont fêté chez nous" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 columns-2 gap-4 md:columns-3", children: gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `Événement ${i + 1}`, loading: "lazy", className: "mb-4 w-full rounded-xl object-cover" }, i)) })
    ] }) })
  ] });
}
export {
  EventsPage as component
};
