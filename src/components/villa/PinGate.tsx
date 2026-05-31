import { Lock } from "lucide-react";
import { useState, type ReactNode } from "react";

export function PinGate({
  pin,
  title,
  children,
}: {
  pin: string;
  title: string;
  children: ReactNode;
}) {
  const [ok, setOk] = useState(false);
  const [v, setV] = useState("");
  const [shake, setShake] = useState(false);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (v === pin) {
      setOk(true);
    } else {
      setErr("Code incorrect");
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };

  if (ok) return <>{children}</>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal p-6">
      <form
        onSubmit={submit}
        className={`w-full max-w-sm rounded-2xl bg-warm-white p-8 shadow-2xl ${
          shake ? "animate-shake" : ""
        }`}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ember/10">
          <Lock className="h-6 w-6 text-ember" />
        </div>
        <h2 className="text-center font-display text-2xl">{title}</h2>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Entrez votre code d'accès
        </p>
        <input
          type="password"
          autoFocus
          inputMode="numeric"
          value={v}
          onChange={(e) => {
            setV(e.target.value);
            setErr("");
          }}
          className="mt-5 w-full rounded-lg border border-border bg-background px-4 py-3 text-center font-accent text-lg tracking-[0.5em]"
          placeholder="••••"
        />
        {err && <p className="mt-2 text-center text-sm text-destructive">{err}</p>}
        <button
          type="submit"
          className="mt-5 w-full rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow"
        >
          Accéder
        </button>
      </form>
    </div>
  );
}
