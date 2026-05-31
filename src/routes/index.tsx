import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ChevronDown,
  UtensilsCrossed,
  Flame,
  Sandwich,
  Building2,
  PartyPopper,
  Briefcase,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react";
import { PageTransition } from "@/components/villa/PageTransition";
import { EmberParticles } from "@/components/villa/EmberParticles";
import { SectionReveal } from "@/components/villa/SectionReveal";
import { AnimatedCounter } from "@/components/villa/AnimatedCounter";
import { WavyDivider } from "@/components/villa/WavyDivider";
import { MenuCard } from "@/components/villa/MenuCard";
import { MENU, FEATURED_IDS } from "@/data/menu";
import { TESTIMONIALS } from "@/data/testimonials";
import { waLink } from "@/lib/whatsapp";
import { SITE } from "@/lib/config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Villa Blanca · Pizza Artisanale, Grillades & Hôtel à Lomé" },
      {
        name: "description",
        content:
          "Pizzeria artisanale au feu de bois, grillades, burgers maison et hôtel boutique au coeur de Lomé, Togo.",
      },
      { property: "og:title", content: "Villa Blanca · Lomé, Togo" },
      { property: "og:description", content: "Pizza, grillades, burgers et hôtel à Lomé." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HIGHLIGHTS = [
  { Icon: UtensilsCrossed, label: "Pizzas Artisanales" },
  { Icon: Flame, label: "Grillades & Viandes" },
  { Icon: Sandwich, label: "Burgers Maison" },
  { Icon: Building2, label: "Hôtel & Séjour" },
];

const PACK_TEASERS = [
  {
    Icon: PartyPopper,
    title: "Pack Anniversaire",
    text: "Salle décorée, gâteau personnalisé, menu spécial 3 plats.",
  },
  {
    Icon: Briefcase,
    title: "Pack Business",
    text: "Salle de réunion, déjeuner buffet, équipement complet.",
  },
  {
    Icon: Heart,
    title: "Pack Mariage / Événement",
    text: "Salle privatisée, décoration florale, menu gastronomique.",
  },
];

function Home() {
  const featured = FEATURED_IDS.map((id) => MENU.find((m) => m.id === id)!);

  return (
    <PageTransition k="home">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src="/images/hero-index.jpg"
          alt="Pizza artisanale sortant du four à bois"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <EmberParticles />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center text-warm-white"
        >
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-gold">
            Lomé · Togo
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            Villa Blanca
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-warm-white/85 md:text-lg">
            Pizza Artisanale · Grillades · Burgers · Hôtel
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="rounded-full bg-ember px-7 py-3 font-semibold text-warm-white transition hover:scale-105 hover:ember-glow"
            >
              Voir le Menu
            </Link>
            <Link
              to="/reserver"
              className="rounded-full border-2 border-warm-white px-7 py-3 font-semibold text-warm-white transition hover:bg-warm-white hover:text-charcoal"
            >
              Réserver
            </Link>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-8 z-10 text-warm-white/70"
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="border-b border-border bg-beige">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-8 md:grid-cols-4 md:px-8">
          {HIGHLIGHTS.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
              <Icon className="h-8 w-8 text-ember" />
              <span className="font-accent text-sm uppercase tracking-wider text-charcoal">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
                Notre carte
              </span>
              <h2 className="mt-2 font-display text-4xl md:text-5xl">Nos Incontournables</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Les plats qui font revenir nos clients.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <SectionReveal key={item.id} delay={i * 0.08}>
                <MenuCard item={item} />
              </SectionReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-accent text-sm uppercase tracking-widest text-ember"
            >
              Voir toute la carte <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PACKS GROUPE */}
      <section className="relative bg-charcoal py-24 text-warm-white noise-overlay">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionReveal>
            <div className="text-center">
              <span className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
                Pour vous accompagner
              </span>
              <h2 className="mt-2 font-display text-4xl text-warm-white md:text-5xl">
                Occasions Spéciales & Packs Groupe
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PACK_TEASERS.map(({ Icon, title, text }, i) => (
              <SectionReveal key={title} delay={i * 0.1}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-gold/60">
                  <Icon className="h-9 w-9 text-gold" />
                  <h3 className="mt-4 font-display text-2xl text-warm-white">{title}</h3>
                  <p className="mt-2 text-sm text-warm-white/70">{text}</p>
                  <a
                    href={waLink(`Bonjour Villa Blanca, je suis intéressé(e) par : ${title}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ember"
                  >
                    Nous Contacter <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            {[
              { n: 500, s: "+", l: "Groupes Accueillis" },
              { n: 10, s: "+", l: "Ans d'Expérience" },
              { n: 48, s: "/50", l: "Satisfaction Clients" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-5xl text-gold md:text-6xl">
                  <AnimatedCounter to={s.n} suffix={s.s} />
                </div>
                <p className="mt-2 font-accent text-xs uppercase tracking-[0.3em] text-warm-white/70">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionReveal>
            <h2 className="text-center font-display text-4xl md:text-5xl">
              Ils en parlent mieux que nous
            </h2>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-border bg-card p-7 shadow-sm">
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/85">"{t.text}"</p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOTEL TEASER */}
      <WavyDivider color="var(--charcoal)" />
      <section className="bg-charcoal py-20 text-warm-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-8">
          <SectionReveal>
            <span className="font-accent text-xs uppercase tracking-[0.3em] text-gold">
              Hôtel boutique
            </span>
            <h2 className="mt-2 font-display text-4xl text-warm-white md:text-5xl">
              Séjournez chez nous
            </h2>
            <p className="mt-4 text-warm-white/75">
              Des chambres confortables au coeur de {SITE.city}, avec accès direct à notre
              restaurant et pizzeria. L'adresse idéale pour vos voyages d'affaires comme vos
              escapades.
            </p>
            <Link
              to="/hotel"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-warm-white hover:ember-glow"
            >
              Découvrir l'Hôtel <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/hero-room.jpg"
                alt="Chambre Villa Blanca"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
