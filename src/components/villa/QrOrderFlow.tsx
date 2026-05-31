import { useState } from "react";
import { Plus, Minus, Trash2, Check, ShoppingCart } from "lucide-react";
import { MENU, CATEGORIES, type MenuCategory } from "@/data/menu";
import { fcfa } from "@/lib/whatsapp";
import { useOrders, type OrderType } from "@/store/ordersStore";

interface Line { id: string; name: string; price: number; qty: number }

export function QrOrderFlow({
  type,
  number,
  title,
  subtitle,
  withDelivery = false,
}: {
  type: OrderType;
  number: string;
  title: string;
  subtitle: string;
  withDelivery?: boolean;
}) {
  const [cat, setCat] = useState<MenuCategory>("pizzas");
  const [lines, setLines] = useState<Line[]>([]);
  const [when, setWhen] = useState("Maintenant");
  const [sent, setSent] = useState(false);
  const addOrder = useOrders((s) => s.add);

  const items = MENU.filter((m) => m.category === cat);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

  const add = (id: string) => {
    setLines((xs) => {
      const ex = xs.find((x) => x.id === id);
      if (ex) return xs.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x));
      const m = MENU.find((m) => m.id === id)!;
      return [...xs, { id, name: m.name, price: m.price, qty: 1 }];
    });
  };

  const setQty = (id: string, qty: number) =>
    setLines((xs) => xs.map((x) => (x.id === id ? { ...x, qty } : x)).filter((x) => x.qty > 0));

  const remove = (id: string) => setLines((xs) => xs.filter((x) => x.id !== id));

  const submit = () => {
    if (!lines.length) return;
    addOrder({
      type,
      ...(type === "table" ? { table: number } : { room: number }),
      items: lines,
      total,
      ...(withDelivery ? { deliveryWhen: when } : {}),
    });
    setSent(true);
    setLines([]);
  };

  if (sent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-charcoal p-6 text-warm-white">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sage/20">
            <Check className="h-10 w-10 text-sage" />
          </div>
          <h1 className="mt-6 font-display text-3xl">Commande envoyée !</h1>
          <p className="mt-3 text-warm-white/75">
            {type === "table"
              ? "Notre équipe vous confirme dans quelques instants."
              : "Votre commande sera livrée dans votre chambre sous 30 minutes."}
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-8 rounded-full bg-ember px-6 py-3 font-semibold text-warm-white hover:ember-glow"
          >
            Nouvelle commande
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal pb-40 text-warm-white">
      <header className="border-b border-white/10 bg-charcoal/95 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div>
            <h1 className="font-display text-2xl">VILLA BLANCA</h1>
            <p className="font-accent text-xs uppercase tracking-widest text-gold">{title}</p>
          </div>
          <span className="font-accent text-3xl text-ember">{subtitle}</span>
        </div>
      </header>

      <div className="sticky top-0 z-10 mx-auto max-w-3xl overflow-x-auto border-b border-white/5 bg-charcoal/95 px-4 py-3 backdrop-blur">
        <div className="flex gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition ${
                cat === c.id ? "bg-ember text-warm-white" : "border border-white/15 text-warm-white/70"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="mx-auto max-w-3xl space-y-3 px-4 py-6">
        {items.map((it) => (
          <li key={it.id} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <img src={it.image} alt={it.name} loading="lazy" className="h-16 w-16 rounded-md object-cover" />
            <div className="flex-1">
              <p className="font-semibold">{it.name}</p>
              <p className="text-xs text-warm-white/65">{it.description}</p>
              <p className="mt-1 font-accent text-sm text-gold">{fcfa(it.price)}</p>
            </div>
            <button
              onClick={() => add(it.id)}
              className="rounded-full bg-ember p-2.5 hover:scale-105"
              aria-label="Ajouter"
            >
              <Plus className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      {lines.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-charcoal/98 px-4 py-4 backdrop-blur">
          <div className="mx-auto max-w-3xl">
            <ul className="mb-3 max-h-40 space-y-2 overflow-y-auto">
              {lines.map((l) => (
                <li key={l.id} className="flex items-center gap-2 text-sm">
                  <span className="flex-1">{l.name}</span>
                  <button onClick={() => setQty(l.id, l.qty - 1)} className="rounded border border-white/20 p-1">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-5 text-center">{l.qty}</span>
                  <button onClick={() => setQty(l.id, l.qty + 1)} className="rounded border border-white/20 p-1">
                    <Plus className="h-3 w-3" />
                  </button>
                  <button onClick={() => remove(l.id)} aria-label="Retirer">
                    <Trash2 className="h-4 w-4 text-warm-white/60" />
                  </button>
                </li>
              ))}
            </ul>
            {withDelivery && (
              <div className="mb-3 flex gap-2">
                {["Maintenant", "+30 min", "+1h"].map((w) => (
                  <button
                    key={w}
                    onClick={() => setWhen(w)}
                    className={`flex-1 rounded-md border px-3 py-2 text-xs ${
                      when === w ? "border-ember bg-ember text-warm-white" : "border-white/20 text-warm-white/70"
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            )}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-warm-white/70">Total</span>
              <span className="font-accent text-2xl text-gold">{fcfa(total)}</span>
            </div>
            <button
              onClick={submit}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ember py-3 font-semibold hover:ember-glow"
            >
              <ShoppingCart className="h-4 w-4" /> Envoyer la Commande
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
