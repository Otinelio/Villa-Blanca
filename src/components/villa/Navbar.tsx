import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/store/cartStore";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/hotel", label: "Hôtel" },
  { to: "/evenements", label: "Événements" },
  { to: "/gallery", label: "Galerie" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const cartCount = useCart((s) => s.count());
  const setCartOpen = useCart((s) => s.setOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur border-b border-gold/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="group flex flex-col">
          <span className="font-display text-2xl font-bold tracking-wide text-warm-white">
            VILLA BLANCA
          </span>
          <span className="mt-0.5 h-[2px] w-12 bg-ember transition-all group-hover:w-24" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => {
            const active =
              l.to === "/" ? path === "/" : path.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative font-body text-sm font-medium text-warm-white/90 transition-colors hover:text-warm-white"
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-ember"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded-full p-2 text-warm-white hover:bg-white/10"
            aria-label="Panier"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ember text-[10px] font-bold text-warm-white">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            to="/reserver"
            className="hidden rounded-full bg-ember px-5 py-2.5 font-body text-sm font-semibold text-warm-white transition-all hover:scale-105 hover:ember-glow md:inline-block"
          >
            Réserver une Table
          </Link>

          <button
            className="rounded-md p-2 text-warm-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-charcoal/98 border-t border-gold/30 lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="border-b border-white/5 py-4 font-body text-base text-warm-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/reserver"
                className="mt-4 rounded-full bg-ember py-3 text-center font-semibold text-warm-white"
              >
                Réserver une Table
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
