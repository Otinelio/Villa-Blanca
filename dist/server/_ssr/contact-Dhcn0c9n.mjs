import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageTransition } from "./PageTransition-GNdNW4Ws.mjs";
import { S as SITE, w as waLink, b as buildContactMessage } from "./router-1vZrVOI4.mjs";
import { n as MapPin, s as Phone, p as MessageCircle, M as Mail, h as Clock } from "../_libs/lucide-react.mjs";
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
function ContactPage() {
  const [form, setForm] = reactExports.useState({
    nom: "",
    email: "",
    sujet: "Réservation",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(buildContactMessage(form)), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { k: "contact", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-charcoal py-24 text-warm-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xs uppercase tracking-[0.4em] text-gold", children: "On vous écoute" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Contact" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-warm-white py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "Venez nous voir" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-ember" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: SITE.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-ember" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: SITE.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5 text-ember" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "WhatsApp : ",
              SITE.phone
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-ember" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: SITE.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-ember" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: SITE.hours })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: waLink("Bonjour Villa Blanca, je souhaite..."), target: "_blank", rel: "noreferrer", className: "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-warm-white hover:ember-glow md:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }),
          " Nous écrire sur WhatsApp"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Carte Villa Blanca", src: "https://www.openstreetmap.org/export/embed.html?bbox=1.18%2C6.10%2C1.27%2C6.18&layer=mapnik", className: "h-[400px] w-full", loading: "lazy" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-beige py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl px-6 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-3xl", children: "Envoyez-nous un message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-8 grid gap-4 rounded-xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Nom", value: form.nom, onChange: (v) => setForm({
          ...form,
          nom: v
        }), required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", type: "email", value: form.email, onChange: (v) => setForm({
          ...form,
          email: v
        }), required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Sujet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.sujet, onChange: (e) => setForm({
            ...form,
            sujet: e.target.value
          }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Réservation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Événement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Question" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Autre" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, required: true, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow", children: "Envoyer" })
      ] })
    ] }) })
  ] });
}
function Input({
  label,
  value,
  onChange,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1 block text-xs font-medium", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, required, value, onChange: (e) => onChange(e.target.value), className: "w-full rounded-md border border-border bg-background px-3 py-2 text-sm" })
  ] });
}
export {
  ContactPage as component
};
