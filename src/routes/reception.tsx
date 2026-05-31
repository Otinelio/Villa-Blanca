import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Trash2 } from "lucide-react";
import { PinGate } from "@/components/villa/PinGate";
import { useOrders, type OrderStatus } from "@/store/ordersStore";
import { fcfa } from "@/lib/whatsapp";

export const Route = createFileRoute("/reception")({
  head: () => ({
    meta: [
      { title: "Réception · Villa Blanca" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Reception,
});

function Reception() {
  return (
    <PinGate pin="9999" title="Réception Villa Blanca">
      <Dashboard />
    </PinGate>
  );
}

const STATUS: Record<OrderStatus, { label: string; dot: string }> = {
  pending: { label: "En attente", dot: "bg-gold" },
  confirmed: { label: "Confirmée", dot: "bg-sky-500" },
  delivered: { label: "Livrée", dot: "bg-sage" },
  cancelled: { label: "Annulée", dot: "bg-destructive" },
};

function timeAgo(iso: string) {
  const d = (Date.now() - new Date(iso).getTime()) / 60000;
  if (d < 1) return "À l'instant";
  if (d < 60) return `Il y a ${Math.floor(d)} min`;
  return `Il y a ${Math.floor(d / 60)}h`;
}

function chime() {
  if (typeof window === "undefined") return;
  try {
    const ac = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.value = 0.12;
    osc.connect(gain).connect(ac.destination);
    osc.start();
    osc.stop(ac.currentTime + 0.3);
  } catch {}
}

function Dashboard() {
  const orders = useOrders((s) => s.orders);
  const setStatus = useOrders((s) => s.setStatus);
  const remove = useOrders((s) => s.remove);
  const [tick, setTick] = useState(0);
  const lastCount = useRef(orders.length);
  const [pulseId, setPulseId] = useState<string | null>(null);

  useEffect(() => {
    const i = setInterval(() => setTick((t) => t + 1), 5000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (orders.length > lastCount.current) {
      chime();
      setPulseId(orders[0]?.id ?? null);
      setTimeout(() => setPulseId(null), 2400);
    }
    lastCount.current = orders.length;
  }, [orders.length]);

  const today = orders.filter((o) => new Date(o.time).toDateString() === new Date().toDateString());
  const pending = today.filter((o) => o.status === "pending").length;
  const revenue = today.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);

  return (
    <div className="min-h-screen bg-warm-white">
      <header className="border-b border-border bg-charcoal text-warm-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="font-display text-2xl">Réception · Villa Blanca</h1>
            <p className="font-accent text-xs uppercase tracking-widest text-gold">
              Tableau de bord en direct
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <Stat label="Commandes" value={today.length} />
            <Stat label="En attente" value={pending} />
            <Stat label="Revenus" value={fcfa(revenue)} />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        {orders.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border bg-card p-16 text-center text-muted-foreground">
            Aucune commande pour le moment. Les nouvelles arrivent en temps réel.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {orders.map((o) => {
                const st = STATUS[o.status];
                const isPulse = pulseId === o.id;
                return (
                  <motion.div
                    layout
                    key={o.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`rounded-xl border bg-card p-5 shadow-sm ${
                      isPulse ? "border-sage pulse-ring" : "border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                            o.type === "table" ? "bg-sky-100 text-sky-700" : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {o.type === "table" ? `Table ${o.table}` : `Chambre ${o.room}`}
                        </span>
                        <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" /> {timeAgo(o.time)}
                          {o.deliveryWhen && <span> · Livraison {o.deliveryWhen}</span>}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className={`h-2.5 w-2.5 rounded-full ${st.dot}`} />
                        {st.label}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-1 border-t border-border pt-3 text-sm">
                      {o.items.map((i) => (
                        <li key={i.id} className="flex justify-between">
                          <span>{i.name} <span className="text-muted-foreground">×{i.qty}</span></span>
                          <span className="font-accent text-ember">{fcfa(i.price * i.qty)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                      <span className="text-xs text-muted-foreground">Total</span>
                      <span className="font-accent text-lg text-ember">{fcfa(o.total)}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {o.status === "pending" && (
                        <button onClick={() => setStatus(o.id, "confirmed")} className="flex-1 rounded-md bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white">
                          Confirmer
                        </button>
                      )}
                      {o.status !== "delivered" && o.status !== "cancelled" && (
                        <button onClick={() => setStatus(o.id, "delivered")} className="flex-1 rounded-md bg-sage px-3 py-1.5 text-xs font-semibold text-white">
                          <Check className="mr-1 inline h-3 w-3" /> Livré
                        </button>
                      )}
                      <button onClick={() => remove(o.id)} className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
        <p className="mt-8 text-center text-xs text-muted-foreground">Mise à jour automatique · {tick}</p>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="text-right">
      <div className="font-accent text-xl text-gold">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-warm-white/65">{label}</div>
    </div>
  );
}
