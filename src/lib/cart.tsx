import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  key: string;
  productId: string;
  productName: string;
  image: string;
  variantId: string;
  variantName: string;
  unitPrice: number;
  unitSuffix: string;
  minQty: number;
  step: number;
  qty: number;
};

export type Order = {
  number: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  items: CartItem[];
  total: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (item: Omit<CartItem, "key">) => void;
  setQty: (key: string, qty: number) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  lastOrder: Order | null;
  placeOrder: (data: Omit<Order, "number" | "items" | "total">) => Order;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "fortgraf-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [orderSeq, setOrderSeq] = useState(1);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { items?: CartItem[]; seq?: number };
        if (Array.isArray(parsed.items)) setItems(parsed.items);
        if (typeof parsed.seq === "number") setOrderSeq(parsed.seq);
      }
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, seq: orderSeq }));
    } catch {
      /* ignore quota errors */
    }
  }, [items, orderSeq]);

  const value = useMemo<CartContextValue>(() => {
    const total = items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
    return {
      items,
      count: items.reduce((sum, i) => sum + 1, 0),
      total,
      addItem: (item) => {
        const key = `${item.productId}::${item.variantId}`;
        setItems((prev) => {
          const found = prev.find((i) => i.key === key);
          if (found) {
            return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + item.qty } : i));
          }
          return [...prev, { ...item, key }];
        });
      },
      setQty: (key, qty) =>
        setItems((prev) =>
          prev.map((i) => (i.key === key ? { ...i, qty: Math.max(i.minQty, qty) } : i)),
        ),
      removeItem: (key) => setItems((prev) => prev.filter((i) => i.key !== key)),
      clear: () => setItems([]),
      lastOrder,
      placeOrder: (data) => {
        const order: Order = {
          ...data,
          number: String(orderSeq).padStart(4, "0"),
          items,
          total,
        };
        setLastOrder(order);
        setOrderSeq((n) => n + 1);
        setItems([]);
        return order;
      },
    };
  }, [items, lastOrder, orderSeq]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
