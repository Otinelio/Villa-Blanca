import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/villa/Navbar";
import { Footer } from "@/components/villa/Footer";
import { MobileTabBar } from "@/components/villa/MobileTabBar";
import { CartDrawer } from "@/components/villa/CartDrawer";
import { SplashScreen } from "@/components/villa/SplashScreen";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-warm-white"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl">Cette page n'a pas pu se charger</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Une erreur est survenue. Essayez de rafraîchir.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-ember px-4 py-2 text-sm font-semibold text-warm-white"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-4 py-2 text-sm"
          >
            Accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Villa Blanca · Pizza Artisanale, Grillades, Hôtel · Lomé" },
      {
        name: "description",
        content:
          "Villa Blanca — Pizzeria artisanale, grillades au feu de bois, burgers maison et hôtel boutique au coeur de Lomé, Togo.",
      },
      { property: "og:site_name", content: "Villa Blanca" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const standalone =
    path.startsWith("/table/") ||
    path.startsWith("/chambre/") ||
    path.startsWith("/reception") ||
    path.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <SplashScreen />
      {!standalone && <Navbar />}
      <main className={!standalone ? "pb-16 md:pb-0" : ""}>
        <Outlet />
      </main>
      {!standalone && <Footer />}
      {!standalone && <MobileTabBar />}
      <CartDrawer />
    </QueryClientProvider>
  );
}
