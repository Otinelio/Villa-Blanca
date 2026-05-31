import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cartStore";
import { buildOrderMessage, fcfa, waLink } from "@/lib/whatsapp";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();
  const [name, setName] = useState("");
  const [mode, setMode] = useState<"Livraison" | "Sur place">("Sur place");

  const submit = () => {
    if (!items.length) return;
    const msg = buildOrderMessage({
      lines: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
      total: total(),
      mode,
      name,
    });
    window.open(waLink(msg), "_blank");
    clear();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/60"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-warm-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h3 className="font-display text-xl">Votre Commande</h3>
              <button onClick={() => setOpen(false)} aria-label="Fermer">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="py-12 text-center text-sm text-muted-foreground">
                  Votre panier est vide.
                </p>
              ) : (
                <ul className="space-y-4">
                  {items.map((i) => (
                    <li key={i.id} className="flex gap-3 rounded-lg border border-border bg-card p-3">
                      {i.image && (
                        <img
                          src={i.image}
                          alt={i.name}
                          loading="lazy"
                          className="h-16 w-16 rounded object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">{i.name}</p>
                        <p className="font-accent text-sm text-ember">{fcfa(i.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            className="rounded border border-border p-1"
                            onClick={() => setQty(i.id, i.qty - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{i.qty}</span>
                          <button
                            className="rounded border border-border p-1"
                            onClick={() => setQty(i.id, i.qty + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            className="ml-auto text-muted-foreground hover:text-destructive"
                            onClick={() => remove(i.id)}
                            aria-label="Retirer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border bg-card px-6 py-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total</span>
                  <span className="font-accent text-2xl text-ember">{fcfa(total())}</span>
                </div>
                <input
                  className="mb-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                  placeholder="Votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="mb-3 flex gap-2">
                  {(["Sur place", "Livraison"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`flex-1 rounded-md border px-3 py-2 text-sm transition ${
                        mode === m
                          ? "border-ember bg-ember text-warm-white"
                          : "border-border bg-background"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                <button
                  onClick={submit}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-ember px-5 py-3 font-semibold text-warm-white transition hover:ember-glow"
                >
                  <MessageCircle className="h-4 w-4" /> Commander via WhatsApp
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
