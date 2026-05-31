import { Link, useRouterState } from "@tanstack/react-router";
import { Home, UtensilsCrossed, CalendarCheck, Building2, Phone } from "lucide-react";

const TABS = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/menu", label: "Menu", Icon: UtensilsCrossed },
  { to: "/reserver", label: "Réserver", Icon: CalendarCheck },
  { to: "/hotel", label: "Hôtel", Icon: Building2 },
  { to: "/contact", label: "Contact", Icon: Phone },
];

export function MobileTabBar() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-warm-white/95 backdrop-blur md:hidden">
      <ul className="grid grid-cols-5">
        {TABS.map(({ to, label, Icon }) => {
          const active = to === "/" ? path === "/" : path.startsWith(to);
          return (
            <li key={to}>
              <Link
                to={to}
                className={`flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium ${
                  active ? "text-ember" : "text-charcoal/70"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
