import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { PageTransition } from "@/components/villa/PageTransition";
import { SITE } from "@/lib/config";
import { buildContactMessage, waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Villa Blanca Lomé" },
      { name: "description", content: "Contactez Villa Blanca à Lomé, Togo. Téléphone, WhatsApp, adresse et horaires." },
      { property: "og:title", content: "Contact · Villa Blanca" },
      { property: "og:description", content: "Nous joindre à Lomé, Togo." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "Réservation", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(buildContactMessage(form)), "_blank");
  };

  return (
    <PageTransition k="contact">
      <section className="bg-charcoal py-24 text-warm-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-gold">On vous écoute</span>
          <h1 className="mt-2 font-display text-5xl md:text-6xl">Contact</h1>
        </div>
      </section>

      <section className="bg-warm-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="font-display text-3xl">Venez nous voir</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-ember" /> <span>{SITE.address}</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 text-ember" /> <span>{SITE.phone}</span></li>
              <li className="flex gap-3"><MessageCircle className="h-5 w-5 text-ember" /> <span>WhatsApp : {SITE.phone}</span></li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-ember" /> <span>{SITE.email}</span></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 text-ember" /> <span>{SITE.hours}</span></li>
            </ul>
            <a
              href={waLink("Bonjour Villa Blanca, je souhaite...")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-warm-white hover:ember-glow md:w-auto"
            >
              <MessageCircle className="h-5 w-5" /> Nous écrire sur WhatsApp
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Carte Villa Blanca"
              src="https://www.openstreetmap.org/export/embed.html?bbox=1.18%2C6.10%2C1.27%2C6.18&layer=mapnik"
              className="h-[400px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-beige py-16">
        <div className="mx-auto max-w-2xl px-6 md:px-8">
          <h2 className="text-center font-display text-3xl">Envoyez-nous un message</h2>
          <form onSubmit={submit} className="mt-8 grid gap-4 rounded-xl border border-border bg-card p-7">
            <Input label="Nom" value={form.nom} onChange={(v) => setForm({ ...form, nom: v })} required />
            <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            <div>
              <label className="mb-1 block text-xs font-medium">Sujet</label>
              <select
                value={form.sujet}
                onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              >
                <option>Réservation</option>
                <option>Événement</option>
                <option>Question</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
            </div>
            <button className="rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </PageTransition>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium">{label}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
    </div>
  );
}
