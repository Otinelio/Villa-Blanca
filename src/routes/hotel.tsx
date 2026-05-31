import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Wifi,
  Car,
  Coffee,
  UtensilsCrossed,
  Shield,
  Wind,
  QrCode,
  MessageCircle,
} from "lucide-react";
import { PageTransition } from "@/components/villa/PageTransition";
import { SectionReveal } from "@/components/villa/SectionReveal";
import { ROOMS } from "@/data/rooms";
import { fcfa, waLink, buildRoomReservation } from "@/lib/whatsapp";

export const Route = createFileRoute("/hotel")({
  head: () => ({
    meta: [
      { title: "Hôtel · Villa Blanca Lomé" },
      { name: "description", content: "Chambres confortables au coeur de Lomé. WiFi, parking, restaurant. Réservez votre séjour Villa Blanca." },
      { property: "og:title", content: "Hôtel Villa Blanca · Lomé" },
      { property: "og:description", content: "Hôtel boutique avec restaurant à Lomé." },
      { property: "og:url", content: "/hotel" },
    ],
    links: [{ rel: "canonical", href: "/hotel" }],
  }),
  component: HotelPage,
});

const AMENITIES = [
  { Icon: Wifi, label: "WiFi Gratuit" },
  { Icon: Car, label: "Parking Sécurisé" },
  { Icon: Coffee, label: "Petit-déjeuner" },
  { Icon: UtensilsCrossed, label: "Restaurant & Bar" },
  { Icon: Shield, label: "Sécurité 24h" },
  { Icon: Wind, label: "Climatisation" },
];

function HotelPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    tel: "",
    type: "Chambre Standard",
    arrivee: "",
    depart: "",
    personnes: 1,
    notes: "",
  });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(buildRoomReservation(form)), "_blank");
  };

  return (
    <PageTransition k="hotel">
      <section className="relative flex h-[70vh] items-end overflow-hidden">
        <img
          src="/images/hero-hotel.jpg"
          alt="Hôtel Villa Blanca"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 text-warm-white md:px-8">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-gold">
            Hôtel boutique
          </span>
          <h1 className="mt-2 font-display text-5xl md:text-7xl">Votre Maison à Lomé</h1>
          <p className="mt-3 max-w-xl text-warm-white/80">
            Confort, calme et hospitalité — à deux pas de notre restaurant.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionReveal>
            <h2 className="text-center font-display text-4xl md:text-5xl">Nos Chambres</h2>
          </SectionReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ROOMS.map((r, i) => (
              <SectionReveal key={r.id} delay={i * 0.1}>
                <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm ember-glow-hover">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img src={r.image} alt={r.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl">{r.name}</h3>
                    <ul className="mt-3 flex-1 space-y-1.5 text-sm">
                      {r.amenities.map((a) => (
                        <li key={a} className="flex items-center gap-2 text-charcoal/80">
                          <Check className="h-4 w-4 text-sage" /> {a}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">À partir de</p>
                        <p className="font-accent text-xl text-ember">{fcfa(r.price)}<span className="text-xs text-muted-foreground"> /nuit</span></p>
                      </div>
                      <a
                        href="#reserver"
                        className="rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-warm-white hover:bg-ember"
                      >
                        Réserver
                      </a>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-center font-display text-3xl">Équipements & Services</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-6">
            {AMENITIES.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="mt-3 text-xs font-medium uppercase tracking-wider text-charcoal/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reserver" className="bg-warm-white py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h2 className="text-center font-display text-4xl">Réservez votre Chambre</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Confirmez votre séjour via WhatsApp en quelques secondes.
          </p>
          <form onSubmit={submit} className="mt-10 grid gap-4 rounded-xl border border-border bg-card p-7 md:grid-cols-2">
            <Input label="Nom complet" value={form.nom} onChange={(v) => setForm({ ...form, nom: v })} required />
            <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            <Input label="Téléphone" value={form.tel} onChange={(v) => setForm({ ...form, tel: v })} required />
            <div>
              <label className="mb-1 block text-xs font-medium text-charcoal/80">Type de chambre</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                {ROOMS.map((r) => <option key={r.id}>{r.name}</option>)}
              </select>
            </div>
            <Input label="Arrivée" type="date" value={form.arrivee} onChange={(v) => setForm({ ...form, arrivee: v })} required />
            <Input label="Départ" type="date" value={form.depart} onChange={(v) => setForm({ ...form, depart: v })} required />
            <Input label="Personnes" type="number" value={String(form.personnes)} onChange={(v) => setForm({ ...form, personnes: Number(v) })} />
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-charcoal/80">Demandes spéciales</label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow">
              <MessageCircle className="h-4 w-4" /> Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-warm-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2 md:px-8">
          <div>
            <span className="font-accent text-xs uppercase tracking-[0.3em] text-gold">Service en chambre</span>
            <h2 className="mt-2 font-display text-4xl text-warm-white">Commandez sans bouger</h2>
            <p className="mt-3 text-warm-white/75">
              Scannez le QR code dans votre chambre pour commander directement depuis votre lit.
              Livraison en chambre sous 30 minutes.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-gold/40 bg-white/[0.04]">
              <QrCode className="h-28 w-28 text-gold" />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-charcoal/80">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
      />
    </div>
  );
}
