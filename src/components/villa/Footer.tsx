import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-display text-2xl font-bold">VILLA BLANCA</h3>
          <p className="mt-3 max-w-xs text-sm text-warm-white/70">{SITE.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-ember hover:text-ember"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/15 p-2.5 transition-colors hover:border-ember hover:text-ember"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-warm-white/80">
            <li><Link to="/" className="hover:text-ember">Home</Link></li>
            <li><Link to="/menu" className="hover:text-ember">Menu</Link></li>
            <li><Link to="/hotel" className="hover:text-ember">Hôtel</Link></li>
            <li><Link to="/evenements" className="hover:text-ember">Événements</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-warm-white/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-ember" /> {SITE.address}</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-ember" /> {SITE.phone}</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-ember" /> {SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-warm-white/50">
        © 2025 Villa Blanca · Lomé, Togo. Tous droits réservés.
      </div>
    </footer>
  );
}
