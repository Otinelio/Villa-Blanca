import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PartyPopper, Briefcase, Heart, Users, MessageCircle, Check } from "lucide-react";
import { PageTransition } from "@/components/villa/PageTransition";
import { SectionReveal } from "@/components/villa/SectionReveal";
import { PACKS } from "@/data/packs";
import { waLink, buildPackInquiry } from "@/lib/whatsapp";

export const Route = createFileRoute("/evenements")({
  head: () => ({
    meta: [
      { title: "Événements & Packs Groupe · Villa Blanca" },
      { name: "description", content: "Anniversaire, séminaire, mariage, groupe d'amis : nos packs sur mesure à Villa Blanca Lomé." },
      { property: "og:title", content: "Événements · Villa Blanca" },
      { property: "og:description", content: "Packs anniversaire, business, mariage et VIP." },
      { property: "og:url", content: "/evenements" },
    ],
    links: [{ rel: "canonical", href: "/evenements" }],
  }),
  component: EventsPage,
});

const ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  party: PartyPopper,
  briefcase: Briefcase,
  heart: Heart,
  users: Users,
};

function EventsPage() {
  const [form, setForm] = useState({
    type: "",
    date: "",
    personnes: 10,
    budget: "",
    notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      waLink(
        buildPackInquiry({
          pack: form.type || "Demande personnalisée",
          date: form.date,
          personnes: form.personnes,
          budget: form.budget,
          notes: form.notes,
        }),
      ),
      "_blank",
    );
  };

  const gallery = Array.from({ length: 6 }).map(
    (_, i) =>
      `/images/event-${i}.jpg`,
  );

  return (
    <PageTransition k="events">
      <section className="relative flex h-[60vh] items-end overflow-hidden">
        <img
          src="/images/hero-events.jpg"
          alt="Événements"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 text-warm-white md:px-8">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-gold">Vos célébrations</span>
          <h1 className="mt-2 font-display text-5xl md:text-7xl">Occasions Spéciales</h1>
        </div>
      </section>

      <section className="bg-warm-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-8">
          {PACKS.map((p, i) => {
            const Icon = ICON[p.icon];
            return (
              <SectionReveal key={p.id} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm ember-glow-hover">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ember/10 text-ember">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-2xl">{p.name}</h3>
                  </div>
                  <p className="mt-3 font-accent text-xs uppercase tracking-widest text-gold">{p.min}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {p.includes.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-charcoal/80">
                        <Check className="mt-0.5 h-4 w-4 text-sage" /> {i}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-accent text-lg text-ember">{p.price}</p>
                  <a
                    href={waLink(`Bonjour Villa Blanca, je suis intéressé(e) par : ${p.name}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-warm-white transition hover:bg-ember"
                  >
                    <MessageCircle className="h-4 w-4" /> {p.cta}
                  </a>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-beige py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h2 className="text-center font-display text-4xl">Sur Mesure</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Décrivez-nous votre projet, on revient vers vous rapidement.
          </p>
          <form onSubmit={submit} className="mt-10 grid gap-4 rounded-xl border border-border bg-card p-7 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium">Type d'événement</label>
              <input value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium">Date souhaitée</label>
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium">Nombre de personnes</label>
              <input type="number" value={form.personnes} onChange={(e) => setForm({ ...form, personnes: Number(e.target.value) })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium">Budget estimé</label>
              <input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium">Demandes particulières</label>
              <textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
            </div>
            <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow">
              <MessageCircle className="h-4 w-4" /> Envoyer ma demande
            </button>
          </form>
        </div>
      </section>

      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center font-display text-4xl">Ils ont fêté chez nous</h2>
          <div className="mt-10 columns-2 gap-4 md:columns-3">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Événement ${i + 1}`}
                loading="lazy"
                className="mb-4 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
