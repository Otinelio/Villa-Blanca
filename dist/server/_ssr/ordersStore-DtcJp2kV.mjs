import { c as create, p as persist } from "../_libs/zustand.mjs";
const useOrders = create()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const id = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : Math.random().toString(36).slice(2);
        set((s) => ({
          orders: [
            { ...o, id, status: "pending", time: (/* @__PURE__ */ new Date()).toISOString() },
            ...s.orders
          ]
        }));
        return id;
      },
      setStatus: (id, status) => set((s) => ({
        orders: s.orders.map((o) => o.id === id ? { ...o, status } : o)
      })),
      remove: (id) => set((s) => ({ orders: s.orders.filter((o) => o.id !== id) }))
    }),
    { name: "vb-orders" }
  )
);
export {
  useOrders as u
};
