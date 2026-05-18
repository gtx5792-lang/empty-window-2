"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, MenuItem } from "@/types";
import { calculateCartTotals } from "@/lib/utils";

interface FlyAnimation {
  id: string;
  image: string;
  from: DOMRect;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  itemCount: number;
  flyAnimation: FlyAnimation | null;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: MenuItem, sourceRect?: DOMRect) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearFlyAnimation: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [flyAnimation, setFlyAnimation] = useState<FlyAnimation | null>(null);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const { deliveryFee, tax, total } = useMemo(
    () => calculateCartTotals(subtotal),
    [subtotal]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const addItem = useCallback((item: MenuItem, sourceRect?: DOMRect) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    if (sourceRect) {
      setFlyAnimation({
        id: `${item.id}-${Date.now()}`,
        image: item.image,
        from: sourceRect,
      });
      setTimeout(() => setFlyAnimation(null), 900);
    }
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, []);

  const value: CartContextValue = {
    items,
    isOpen,
    subtotal,
    deliveryFee,
    tax,
    total,
    itemCount,
    flyAnimation,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen((o) => !o),
    addItem,
    removeItem,
    updateQuantity,
    clearFlyAnimation: () => setFlyAnimation(null),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
