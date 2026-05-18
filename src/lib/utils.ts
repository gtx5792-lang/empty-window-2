import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `${amount.toLocaleString("ar-EG")} ج.م`;
}

export const DELIVERY_FEE = 15;
export const TAX_RATE = 0.14;

export function calculateCartTotals(subtotal: number) {
  const deliveryFee = subtotal > 0 ? DELIVERY_FEE : 0;
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + deliveryFee + tax;
  return { deliveryFee, tax, total };
}
