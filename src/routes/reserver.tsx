import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { PageTransition } from "@/components/villa/PageTransition";
import { ROOMS } from "@/data/rooms";
import { buildRoomReservation, buildTableReservation, waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/reserver")({
  head: () => ({
    meta: [
      { title: "Réserver · Villa Blanca Lomé" },
      { name: "description", content: "Réservez une table au restaurant ou une chambre à l'hôtel Villa Blanca, Lomé." },
      { property: "og:title", content: "Réserver · Villa Blanca" },
      { property: "og:description", content: "Réservation table & chambre." },
      { property: "og:url", content: "/reserver" },
    ],
    links: [{ rel: "canonical", href: "/reserver" }],
  }),
  component: ReserverPage,
});

const HEURES = ["11h", "12h30", "14h", "19h", "20h30", "21h30"];

function ReserverPage() {
  const [tab, setTab] = useState<"table" | "chambre">("table");

  return (
    <PageTransition k="reserver">
      <section className="bg-charcoal py-24 text-warm-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <span className="font-accent text-xs uppercase tracking-[0.4em] text-gold">Réservation</span>
          <h1 className="mt-2 font-display text-5xl md:text-6xl">Réservez votre moment</h1>
        </div>
      </section>

      <section className="bg-warm-white py-14">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <div className="mb-8 flex justify-center gap-2 rounded-full border border-border bg-card p-1.5">
            {(["table", "chambre"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative flex-1 rounded-full px-5 py-2 text-sm font-medium"
              >
                {tab === t && (
                  <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-ember" />
                )}
                <span className={`relative ${tab === t ? "text-warm-white" : "text-charcoal/70"}`}>
                  {t === "table" ? "Réserver une Table" : "Réserver une Chambre"}
                </span>
              </button>
            ))}
          </div>

          {tab === "table" ? <TableForm /> : <RoomForm />}
        </div>
      </section>
    </PageTransition>
  );
}

function TableForm() {
  const [f, setF] = useState({ date: "", heure: HEURES[3], couverts: 2, nom: "", tel: "", notes: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(buildTableReservation(f)), "_blank");
  };
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-xl border border-border bg-card p-7 md:grid-cols-2">
      <In l="Date" type="date" v={f.date} on={(v) => setF({ ...f, date: v })} required />
      <div>
        <label className="mb-1 block text-xs font-medium">Heure</label>
        <select value={f.heure} onChange={(e) => setF({ ...f, heure: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
          {HEURES.map((h) => <option key={h}>{h}</option>)}
        </select>
      </div>
      <In l="Couverts" type="number" v={String(f.couverts)} on={(v) => setF({ ...f, couverts: Number(v) })} />
      <In l="Nom" v={f.nom} on={(v) => setF({ ...f, nom: v })} required />
      <In l="Téléphone" v={f.tel} on={(v) => setF({ ...f, tel: v })} required />
      <div className="md:col-span-2">
        <label className="mb-1 block text-xs font-medium">Demandes spéciales</label>
        <textarea rows={3} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
      </div>
      <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow">
        <MessageCircle className="h-4 w-4" /> Envoyer via WhatsApp
      </button>
    </form>
  );
}

function RoomForm() {
  const [f, setF] = useState({ nom: "", email: "", tel: "", type: "Chambre Standard", arrivee: "", depart: "", personnes: 1, notes: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(buildRoomReservation(f)), "_blank");
  };
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-xl border border-border bg-card p-7 md:grid-cols-2">
      <In l="Nom complet" v={f.nom} on={(v) => setF({ ...f, nom: v })} required />
      <In l="Email" type="email" v={f.email} on={(v) => setF({ ...f, email: v })} required />
      <In l="Téléphone" v={f.tel} on={(v) => setF({ ...f, tel: v })} required />
      <div>
        <label className="mb-1 block text-xs font-medium">Type de chambre</label>
        <select value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
          {ROOMS.map((r) => <option key={r.id}>{r.name}</option>)}
        </select>
      </div>
      <In l="Arrivée" type="date" v={f.arrivee} on={(v) => setF({ ...f, arrivee: v })} required />
      <In l="Départ" type="date" v={f.depart} on={(v) => setF({ ...f, depart: v })} required />
      <In l="Personnes" type="number" v={String(f.personnes)} on={(v) => setF({ ...f, personnes: Number(v) })} />
      <div className="md:col-span-2">
        <label className="mb-1 block text-xs font-medium">Demandes spéciales</label>
        <textarea rows={3} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
      </div>
      <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow">
        <MessageCircle className="h-4 w-4" /> Envoyer via WhatsApp
      </button>
    </form>
  );
}

function In({ l, v, on, type = "text", required }: { l: string; v: string; on: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium">{l}</label>
      <input type={type} required={required} value={v} onChange={(e) => on(e.target.value)} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm" />
    </div>
  );
}
