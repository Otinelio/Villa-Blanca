import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as Lock } from "../_libs/lucide-react.mjs";
function PinGate({
  pin,
  title,
  children
}) {
  const [ok, setOk] = reactExports.useState(false);
  const [v, setV] = reactExports.useState("");
  const [shake, setShake] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState("");
  const submit = (e) => {
    e.preventDefault();
    if (v === pin) {
      setOk(true);
    } else {
      setErr("Code incorrect");
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };
  if (ok) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-charcoal p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: submit,
      className: `w-full max-w-sm rounded-2xl bg-warm-white p-8 shadow-2xl ${shake ? "animate-shake" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-ember/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-6 w-6 text-ember" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-2xl", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-sm text-muted-foreground", children: "Entrez votre code d'accès" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            autoFocus: true,
            inputMode: "numeric",
            value: v,
            onChange: (e) => {
              setV(e.target.value);
              setErr("");
            },
            className: "mt-5 w-full rounded-lg border border-border bg-background px-4 py-3 text-center font-accent text-lg tracking-[0.5em]",
            placeholder: "••••"
          }
        ),
        err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-sm text-destructive", children: err }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "mt-5 w-full rounded-full bg-ember py-3 font-semibold text-warm-white hover:ember-glow",
            children: "Accéder"
          }
        )
      ]
    }
  ) });
}
export {
  PinGate as P
};
