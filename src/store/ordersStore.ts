import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OrderStatus = "pending" | "confirmed" | "delivered" | "cancelled";
export type OrderType = "table" | "room";

export interface OrderItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}

export interface Order {
  id: string;
  type: OrderType;
  table?: string;
  room?: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  time: string;
  deliveryWhen?: string;
}

interface OrdersState {
  orders: Order[];
  add: (o: Omit<Order, "id" | "status" | "time">) => string;
  setStatus: (id: string, status: OrderStatus) => void;
  remove: (id: string) => void;
}

export const useOrders = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      add: (o) => {
        const id =
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? crypto.randomUUID()
            : Math.random().toString(36).slice(2);
        set((s) => ({
          orders: [
            { ...o, id, status: "pending", time: new Date().toISOString() },
            ...s.orders,
          ],
        }));
        return id;
      },
      setStatus: (id, status) =>
        set((s) => ({
          orders: s.orders.map((o) => (o.id === id ? { ...o, status } : o)),
        })),
      remove: (id) =>
        set((s) => ({ orders: s.orders.filter((o) => o.id !== id) })),
    }),
    { name: "vb-orders" },
  ),
);
