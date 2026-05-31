import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, d as useRouterState, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as create, p as persist } from "../_libs/zustand.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { w as ShoppingCart, X, o as Menu, l as Instagram, F as Facebook, n as MapPin, s as Phone, h as Clock, k as House, y as UtensilsCrossed, C as CalendarCheck, a as Building2, q as Minus, t as Plus, T as Trash2, p as MessageCircle } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-eciNzFE8.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const useCart = create()(
  persist(
    (set, get) => ({
      items: [],
      open: false,
      setOpen: (v) => set({ open: v }),
      add: (item) => set((s) => {
        const existing = s.items.find((i) => i.id === item.id);
        if (existing) {
          return {
            items: s.items.map(
              (i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i
            )
          };
        }
        return { items: [...s.items, { ...item, qty: 1 }] };
      }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) => set((s) => ({
        items: s.items.map((i) => i.id === id ? { ...i, qty } : i).filter((i) => i.qty > 0)
      })),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((s, i) => s + i.price * i.qty, 0),
      count: () => get().items.reduce((s, i) => s + i.qty, 0)
    }),
    { name: "vb-cart" }
  )
);
const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/hotel", label: "Hôtel" },
  { to: "/evenements", label: "Événements" },
  { to: "/gallery", label: "Galerie" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const cartCount = useCart((s) => s.count());
  const setCartOpen = useCart((s) => s.setOpen);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => setOpen(false), [path]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-charcoal/95 backdrop-blur border-b border-gold/40" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold tracking-wide text-warm-white", children: "VILLA BLANCA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 h-[2px] w-12 bg-ember transition-all group-hover:w-24" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 lg:flex", children: LINKS.map((l) => {
            const active = l.to === "/" ? path === "/" : path.startsWith(l.to);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: l.to,
                className: "relative font-body text-sm font-medium text-warm-white/90 transition-colors hover:text-warm-white",
                children: [
                  l.label,
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      layoutId: "nav-active",
                      className: "absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-ember"
                    }
                  )
                ]
              },
              l.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setCartOpen(true),
                className: "relative rounded-full p-2 text-warm-white hover:bg-white/10",
                "aria-label": "Panier",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5" }),
                  cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ember text-[10px] font-bold text-warm-white", children: cartCount })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/reserver",
                className: "hidden rounded-full bg-ember px-5 py-2.5 font-body text-sm font-semibold text-warm-white transition-all hover:scale-105 hover:ember-glow md:inline-block",
                children: "Réserver une Table"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "rounded-md p-2 text-warm-white lg:hidden",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.25 },
            className: "overflow-hidden bg-charcoal/98 border-t border-gold/30 lg:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-6 py-6", children: [
              LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "border-b border-white/5 py-4 font-body text-base text-warm-white",
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/reserver",
                  className: "mt-4 rounded-full bg-ember py-3 text-center font-semibold text-warm-white",
                  children: "Réserver une Table"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
const SITE = {
  tagline: "Pizza Artisanale | Grillades | Burgers · Lomé, Togo",
  city: "Lomé, Togo",
  address: "Quartier Centre, Lomé, Togo",
  phone: "+228 XX XX XX XX",
  whatsapp: "228XXXXXXXX",
  // replace before deploy
  hours: "Lun–Dim : 11h00 – 23h00",
  email: "contact@villablanca.tg",
  instagram: "https://instagram.com/villablanca",
  facebook: "https://facebook.com/villablanca"
};
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-charcoal text-warm-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold", children: "VILLA BLANCA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xs text-sm text-warm-white/70", children: SITE.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: SITE.instagram,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Instagram",
              className: "rounded-full border border-white/15 p-2.5 transition-colors hover:border-ember hover:text-ember",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: SITE.facebook,
              target: "_blank",
              rel: "noreferrer",
              "aria-label": "Facebook",
              className: "rounded-full border border-white/15 p-2.5 transition-colors hover:border-ember hover:text-ember",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold uppercase tracking-widest text-gold", children: "Navigation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-warm-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-ember", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", className: "hover:text-ember", children: "Menu" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/hotel", className: "hover:text-ember", children: "Hôtel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/evenements", className: "hover:text-ember", children: "Événements" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-ember", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold uppercase tracking-widest text-gold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-warm-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 text-ember" }),
            " ",
            SITE.address
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 text-ember" }),
            " ",
            SITE.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mt-0.5 h-4 w-4 text-ember" }),
            " ",
            SITE.hours
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 py-5 text-center text-xs text-warm-white/50", children: "© 2025 Villa Blanca · Lomé, Togo. Tous droits réservés." })
  ] });
}
const TABS = [
  { to: "/", label: "Home", Icon: House },
  { to: "/menu", label: "Menu", Icon: UtensilsCrossed },
  { to: "/reserver", label: "Réserver", Icon: CalendarCheck },
  { to: "/hotel", label: "Hôtel", Icon: Building2 },
  { to: "/contact", label: "Contact", Icon: Phone }
];
function MobileTabBar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-warm-white/95 backdrop-blur md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-5", children: TABS.map(({ to, label, Icon }) => {
    const active = to === "/" ? path === "/" : path.startsWith(to);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to,
        className: `flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium ${active ? "text-ember" : "text-charcoal/70"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
          label
        ]
      }
    ) }, to);
  }) }) });
}
function waLink(text) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
function fcfa(n) {
  return new Intl.NumberFormat("fr-FR").format(n) + " FCFA";
}
function buildOrderMessage(opts) {
  return [
    "Bonjour Villa Blanca,",
    "",
    "Nouvelle commande :",
    ...opts.lines.map((l) => `${l.name} x${l.qty} — ${fcfa(l.price * l.qty)}`),
    "",
    `Total : ${fcfa(opts.total)}`,
    `Type : ${opts.mode}`,
    `Nom : ${opts.name || "—"}`
  ].join("\n");
}
function buildTableReservation(d) {
  return [
    "Bonjour Villa Blanca,",
    "",
    "Réservation de table :",
    `Date : ${d.date}`,
    `Heure : ${d.heure}`,
    `Couverts : ${d.couverts}`,
    `Nom : ${d.nom}`,
    `Téléphone : ${d.tel}`,
    d.notes ? `Notes : ${d.notes}` : ""
  ].filter(Boolean).join("\n");
}
function buildRoomReservation(d) {
  return [
    "Bonjour Villa Blanca,",
    "",
    "Réservation de chambre :",
    `Type : ${d.type}`,
    `Arrivée : ${d.arrivee}`,
    `Départ : ${d.depart}`,
    `Personnes : ${d.personnes}`,
    `Nom : ${d.nom}`,
    `Email : ${d.email}`,
    `Téléphone : ${d.tel}`,
    d.notes ? `Notes : ${d.notes}` : ""
  ].filter(Boolean).join("\n");
}
function buildPackInquiry(d) {
  return [
    "Bonjour Villa Blanca,",
    "",
    `Demande : ${d.pack}`,
    d.date ? `Date souhaitée : ${d.date}` : "",
    d.personnes ? `Nombre de personnes : ${d.personnes}` : "",
    d.budget ? `Budget estimé : ${d.budget}` : "",
    d.notes ? `Demandes particulières : ${d.notes}` : ""
  ].filter(Boolean).join("\n");
}
function buildContactMessage(d) {
  return [
    "Bonjour Villa Blanca,",
    "",
    `Sujet : ${d.sujet}`,
    `Nom : ${d.nom}`,
    `Email : ${d.email}`,
    "",
    d.message
  ].join("\n");
}
function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();
  const [name, setName] = reactExports.useState("");
  const [mode, setMode] = reactExports.useState("Sur place");
  const submit = () => {
    if (!items.length) return;
    const msg = buildOrderMessage({
      lines: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
      total: total(),
      mode,
      name
    });
    window.open(waLink(msg), "_blank");
    clear();
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[60] bg-charcoal/60",
        onClick: () => setOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.aside,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "tween", duration: 0.3 },
        className: "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-warm-white shadow-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-6 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: "Votre Commande" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), "aria-label": "Fermer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-6 py-4", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-12 text-center text-sm text-muted-foreground", children: "Votre panier est vide." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 rounded-lg border border-border bg-card p-3", children: [
            i.image && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: i.image,
                alt: i.name,
                loading: "lazy",
                className: "h-16 w-16 rounded object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: i.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-sm text-ember", children: fcfa(i.price) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "rounded border border-border p-1",
                    onClick: () => setQty(i.id, i.qty - 1),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-center text-sm", children: i.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "rounded border border-border p-1",
                    onClick: () => setQty(i.id, i.qty + 1),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "ml-auto text-muted-foreground hover:text-destructive",
                    onClick: () => remove(i.id),
                    "aria-label": "Retirer",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] })
          ] }, i.id)) }) }),
          items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-card px-6 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-2xl text-ember", children: fcfa(total()) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "mb-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm",
                placeholder: "Votre nom",
                value: name,
                onChange: (e) => setName(e.target.value)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex gap-2", children: ["Sur place", "Livraison"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setMode(m),
                className: `flex-1 rounded-md border px-3 py-2 text-sm transition ${mode === m ? "border-ember bg-ember text-warm-white" : "border-border bg-background"}`,
                children: m
              },
              m
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: submit,
                className: "flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 font-semibold text-warm-white transition hover:ember-glow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                  " Commander via WhatsApp"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function SplashScreen() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, scale: 1.05 },
      transition: { duration: 0.8, ease: "easeInOut" },
      className: "fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-charcoal",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 1, delay: 0.2, ease: "easeOut" },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl font-bold tracking-widest text-gold md:text-7xl", children: [
              "VILLA",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "BLANCA"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 1 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-accent text-xs tracking-[0.4em] text-warm-white/70 uppercase", children: "Lomé, Togo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-4 h-[1px] w-12 bg-gold/50" })
                ]
              }
            )
          ]
        }
      )
    }
  ) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl font-bold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl", children: "Page introuvable" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Cette page n'existe pas ou a été déplacée." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-block rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-warm-white",
        children: "Retour à l'accueil"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-xl", children: "Cette page n'a pas pu se charger" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Une erreur est survenue. Essayez de rafraîchir." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "rounded-full bg-ember px-4 py-2 text-sm font-semibold text-warm-white",
          children: "Réessayer"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "rounded-full border border-border px-4 py-2 text-sm",
          children: "Accueil"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Villa Blanca · Pizza Artisanale, Grillades, Hôtel · Lomé" },
      {
        name: "description",
        content: "Villa Blanca — Pizzeria artisanale, grillades au feu de bois, burgers maison et hôtel boutique au coeur de Lomé, Togo."
      },
      { property: "og:site_name", content: "Villa Blanca" },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const standalone = path.startsWith("/table/") || path.startsWith("/chambre/") || path.startsWith("/reception") || path.startsWith("/admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, {}),
    !standalone && /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: !standalone ? "pb-16 md:pb-0" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    !standalone && /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    !standalone && /* @__PURE__ */ jsxRuntimeExports.jsx(MobileTabBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
  ] });
}
const $$splitComponentImporter$a = () => import("./reserver-D4htZA5i.mjs");
const Route$a = createFileRoute("/reserver")({
  head: () => ({
    meta: [{
      title: "Réserver · Villa Blanca Lomé"
    }, {
      name: "description",
      content: "Réservez une table au restaurant ou une chambre à l'hôtel Villa Blanca, Lomé."
    }, {
      property: "og:title",
      content: "Réserver · Villa Blanca"
    }, {
      property: "og:description",
      content: "Réservation table & chambre."
    }, {
      property: "og:url",
      content: "/reserver"
    }],
    links: [{
      rel: "canonical",
      href: "/reserver"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./reception-CknhJSV8.mjs");
const Route$9 = createFileRoute("/reception")({
  head: () => ({
    meta: [{
      title: "Réception · Villa Blanca"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./menu-DScIhYVJ.mjs");
const Route$8 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Notre Carte · Villa Blanca Lomé"
    }, {
      name: "description",
      content: "Pizzas artisanales, grillades, burgers, accompagnements, boissons et desserts. La carte complète Villa Blanca."
    }, {
      property: "og:title",
      content: "Notre Carte · Villa Blanca"
    }, {
      property: "og:description",
      content: "Pizzas, grillades, burgers et plus."
    }, {
      property: "og:url",
      content: "/menu"
    }],
    links: [{
      rel: "canonical",
      href: "/menu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./hotel-CSbivnSX.mjs");
const Route$7 = createFileRoute("/hotel")({
  head: () => ({
    meta: [{
      title: "Hôtel · Villa Blanca Lomé"
    }, {
      name: "description",
      content: "Chambres confortables au coeur de Lomé. WiFi, parking, restaurant. Réservez votre séjour Villa Blanca."
    }, {
      property: "og:title",
      content: "Hôtel Villa Blanca · Lomé"
    }, {
      property: "og:description",
      content: "Hôtel boutique avec restaurant à Lomé."
    }, {
      property: "og:url",
      content: "/hotel"
    }],
    links: [{
      rel: "canonical",
      href: "/hotel"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./gallery-C2jOrOM6.mjs");
const Route$6 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Galerie · Villa Blanca Lomé"
    }, {
      name: "description",
      content: "Plongez dans l'univers Villa Blanca : pizzas, grillades, burgers, hôtel et événements."
    }, {
      property: "og:title",
      content: "Galerie · Villa Blanca"
    }, {
      property: "og:description",
      content: "Photos de notre restaurant et hôtel."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./evenements-BArXCoJK.mjs");
const Route$5 = createFileRoute("/evenements")({
  head: () => ({
    meta: [{
      title: "Événements & Packs Groupe · Villa Blanca"
    }, {
      name: "description",
      content: "Anniversaire, séminaire, mariage, groupe d'amis : nos packs sur mesure à Villa Blanca Lomé."
    }, {
      property: "og:title",
      content: "Événements · Villa Blanca"
    }, {
      property: "og:description",
      content: "Packs anniversaire, business, mariage et VIP."
    }, {
      property: "og:url",
      content: "/evenements"
    }],
    links: [{
      rel: "canonical",
      href: "/evenements"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-Dhcn0c9n.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact · Villa Blanca Lomé"
    }, {
      name: "description",
      content: "Contactez Villa Blanca à Lomé, Togo. Téléphone, WhatsApp, adresse et horaires."
    }, {
      property: "og:title",
      content: "Contact · Villa Blanca"
    }, {
      property: "og:description",
      content: "Nous joindre à Lomé, Togo."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin-DlUDjODH.mjs");
const Route$3 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin · Villa Blanca"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BoguEIdH.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Villa Blanca · Pizza Artisanale, Grillades & Hôtel à Lomé"
    }, {
      name: "description",
      content: "Pizzeria artisanale au feu de bois, grillades, burgers maison et hôtel boutique au coeur de Lomé, Togo."
    }, {
      property: "og:title",
      content: "Villa Blanca · Lomé, Togo"
    }, {
      property: "og:description",
      content: "Pizza, grillades, burgers et hôtel à Lomé."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./table._tableNumber-CTeww9Yi.mjs");
const Route$1 = createFileRoute("/table/$tableNumber")({
  head: () => ({
    meta: [{
      title: "Commande Table · Villa Blanca"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./chambre._roomNumber-BdVLYlhB.mjs");
const Route = createFileRoute("/chambre/$roomNumber")({
  head: () => ({
    meta: [{
      title: "Room Service · Villa Blanca"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ReserverRoute = Route$a.update({
  id: "/reserver",
  path: "/reserver",
  getParentRoute: () => Route$b
});
const ReceptionRoute = Route$9.update({
  id: "/reception",
  path: "/reception",
  getParentRoute: () => Route$b
});
const MenuRoute = Route$8.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$b
});
const HotelRoute = Route$7.update({
  id: "/hotel",
  path: "/hotel",
  getParentRoute: () => Route$b
});
const GalleryRoute = Route$6.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$b
});
const EvenementsRoute = Route$5.update({
  id: "/evenements",
  path: "/evenements",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const AdminRoute = Route$3.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const TableTableNumberRoute = Route$1.update({
  id: "/table/$tableNumber",
  path: "/table/$tableNumber",
  getParentRoute: () => Route$b
});
const ChambreRoomNumberRoute = Route.update({
  id: "/chambre/$roomNumber",
  path: "/chambre/$roomNumber",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  ContactRoute,
  EvenementsRoute,
  GalleryRoute,
  HotelRoute,
  MenuRoute,
  ReceptionRoute,
  ReserverRoute,
  ChambreRoomNumberRoute,
  TableTableNumberRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  SITE as S,
  Route as a,
  buildContactMessage as b,
  buildPackInquiry as c,
  buildRoomReservation as d,
  buildTableReservation as e,
  fcfa as f,
  router as r,
  useCart as u,
  waLink as w
};
