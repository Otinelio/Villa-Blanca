import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Building2,
  CalendarDays,
  Package,
  Image as ImageIcon,
  Settings,
  QrCode,
} from "lucide-react";
import { PinGate } from "@/components/villa/PinGate";
import { useOrders } from "@/store/ordersStore";
import { MENU } from "@/data/menu";
import { ROOMS } from "@/data/rooms";
import { PACKS } from "@/data/packs";
import { fcfa } from "@/lib/whatsapp";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin · Villa Blanca" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

const NAV = [
  { id: "dash", label: "Dashboard", Icon: LayoutDashboard },
  { id: "menu", label: "Menu", Icon: UtensilsCrossed },
  { id: "hotel", label: "Hôtel", Icon: Building2 },
  { id: "reservations", label: "Réservations", Icon: CalendarDays },
  { id: "packs", label: "Packs Groupe", Icon: Package },
  { id: "gallery", label: "Galerie", Icon: ImageIcon },
  { id: "qrcodes", label: "Codes QR", Icon: QrCode },
  { id: "settings", label: "Paramètres", Icon: Settings },
] as const;

type Tab = (typeof NAV)[number]["id"];

function Admin() {
  return (
    <PinGate pin="9999" title="Admin Villa Blanca">
      <Shell />
    </PinGate>
  );
}

function Shell() {
  const [tab, setTab] = useState<Tab>("dash");

  return (
    <div className="flex min-h-screen bg-warm-white">
      <aside className="w-60 shrink-0 border-r border-border bg-charcoal text-warm-white">
        <div className="border-b border-white/10 px-5 py-5">
          <p className="font-display text-lg">VILLA BLANCA</p>
          <p className="font-accent text-[10px] uppercase tracking-widest text-gold">Admin</p>
        </div>
        <nav className="p-3">
          {NAV.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`mb-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition ${
                tab === id ? "bg-ember text-warm-white" : "text-warm-white/70 hover:bg-white/5"
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-x-auto p-8">
        {tab === "dash" && <DashboardView />}
        {tab === "menu" && <MenuView />}
        {tab === "hotel" && <HotelView />}
        {tab === "reservations" && <ReservationsView />}
        {tab === "packs" && <PacksView />}
        {tab === "gallery" && <Placeholder title="Galerie" desc="Gérez les photos affichées sur le site." />}
        {tab === "qrcodes" && <QRCodesView />}
        {tab === "settings" && <Placeholder title="Paramètres" desc="Configuration générale du site." />}
      </main>
    </div>
  );
}

function DashboardView() {
  const orders = useOrders((s) => s.orders);
  const today = orders.filter((o) => new Date(o.time).toDateString() === new Date().toDateString());
  const rev = today.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);
  const stats = [
    { l: "Réservations aujourd'hui", v: today.filter((o) => o.type === "table").length },
    { l: "Commandes du jour", v: today.length },
    { l: "Revenus FCFA", v: fcfa(rev) },
    { l: "Taux occupation hôtel", v: "78%" },
  ];
  return (
    <div>
      <h1 className="font-display text-3xl">Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            <p className="mt-2 font-accent text-2xl text-ember">{s.v}</p>
          </div>
        ))}
      </div>
      <h2 className="mt-10 font-display text-xl">Commandes récentes</h2>
      <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-beige text-left text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">N°</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 10).map((o) => (
              <tr key={o.id} className="border-t border-border">
                <td className="px-4 py-2 capitalize">{o.type}</td>
                <td className="px-4 py-2">{o.table || o.room}</td>
                <td className="px-4 py-2 font-accent text-ember">{fcfa(o.total)}</td>
                <td className="px-4 py-2 capitalize">{o.status}</td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-10 text-center text-muted-foreground">Aucune commande</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MenuView() {
  const [items, setItems] = useState(() =>
    MENU.map((m) => ({ ...m, sold_out: false })),
  );
  return (
    <div>
      <h1 className="font-display text-3xl">Menu</h1>
      <p className="mt-1 text-sm text-muted-foreground">Gérez la disponibilité et les prix.</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-beige text-left text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3">Article</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Prix</th>
              <th className="px-4 py-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={it.id} className="border-t border-border">
                <td className="px-4 py-2 font-medium">{it.name}</td>
                <td className="px-4 py-2 capitalize">{it.category}</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    value={it.price}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setItems((xs) => xs.map((x, k) => (k === i ? { ...x, price: v } : x)));
                    }}
                    className="w-24 rounded border border-border bg-background px-2 py-1 text-sm"
                  />
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setItems((xs) => xs.map((x, k) => (k === i ? { ...x, sold_out: !x.sold_out } : x)))}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      it.sold_out ? "bg-destructive text-white" : "bg-sage text-white"
                    }`}
                  >
                    {it.sold_out ? "Épuisé" : "Disponible"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HotelView() {
  const [rows, setRows] = useState(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      n: i + 101,
      type: ROOMS[i % 3].name,
      status: (i % 3 === 0 ? "Occupée" : "Disponible") as "Disponible" | "Occupée" | "Maintenance",
      guest: "",
    })),
  );

  return (
    <div>
      <h1 className="font-display text-3xl">Chambres</h1>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r, i) => (
          <div key={r.n} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl">Chambre {r.n}</span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  r.status === "Disponible" ? "bg-sage/15 text-sage" :
                  r.status === "Occupée" ? "bg-ember/15 text-ember" : "bg-gold/20 text-gold"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" /> {r.status}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">{r.type}</p>
            <input
              placeholder="Nom client"
              value={r.guest}
              onChange={(e) => setRows((xs) => xs.map((x, k) => (k === i ? { ...x, guest: e.target.value } : x)))}
              className="mt-3 w-full rounded border border-border bg-background px-2 py-1 text-sm"
            />
            <div className="mt-3 flex gap-1">
              {(["Disponible", "Occupée", "Maintenance"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setRows((xs) => xs.map((x, k) => (k === i ? { ...x, status: s } : x)))}
                  className={`flex-1 rounded border px-2 py-1 text-[10px] ${
                    r.status === s ? "border-ember bg-ember text-warm-white" : "border-border"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReservationsView() {
  return (
    <div>
      <h1 className="font-display text-3xl">Réservations</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Toutes les réservations restaurant, hôtel et événements.
      </p>
      <div className="mt-6 flex gap-2">
        {[
          { l: "Restaurant", c: "bg-ember" },
          { l: "Hôtel", c: "bg-gold" },
          { l: "Événement", c: "bg-sage" },
        ].map((x) => (
          <span key={x.l} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs">
            <span className={`h-2 w-2 rounded-full ${x.c}`} /> {x.l}
          </span>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
        Calendrier des réservations — données reçues via WhatsApp et saisies manuellement.
      </div>
    </div>
  );
}

function PacksView() {
  return (
    <div>
      <h1 className="font-display text-3xl">Packs & Événements</h1>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {PACKS.map((p) => (
          <div key={p.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl">{p.name}</h3>
              <select className="rounded border border-border bg-background px-2 py-1 text-xs">
                <option>En discussion</option>
                <option>Confirmé</option>
                <option>Annulé</option>
              </select>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Placeholder({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h1 className="font-display text-3xl">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-6 rounded-xl border border-dashed border-border bg-card p-16 text-center text-muted-foreground">
        Section en cours de configuration.
      </div>
    </div>
  );
}

function QRCodesView() {
  const [tables] = useState(() => Array.from({ length: 15 }, (_, i) => i + 1));
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div>
      <h1 className="font-display text-3xl">Codes QR Tables</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Scannez ces codes pour ouvrir directement le menu de commande pour la table spécifique.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tables.map((t) => {
          const url = `${baseUrl}/table/${t}`;
          const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}&color=2E2A27&bgcolor=FFFFFF`;
          return (
            <div key={t} className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <h2 className="font-display text-xl font-bold text-gold">Table {t}</h2>
              <div className="mt-4 overflow-hidden rounded-lg border-[6px] border-white bg-white shadow-sm">
                <img src={qrUrl} alt={`QR Code Table ${t}`} className="h-36 w-36" loading="lazy" />
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground break-all">{url}</p>
              <div className="mt-4 flex w-full gap-2">
                <button 
                  onClick={() => window.open(url, "_blank")}
                  className="flex-1 rounded bg-ember py-2 text-xs font-semibold text-white transition hover:bg-ember/90"
                >
                  Ouvrir
                </button>
                <button 
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = qrUrl;
                    link.download = `QR_Table_${t}.png`;
                    link.target = "_blank";
                    link.click();
                  }}
                  className="flex-1 rounded border border-border bg-transparent py-2 text-xs font-semibold transition hover:bg-black/5"
                >
                  Télécharger
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
