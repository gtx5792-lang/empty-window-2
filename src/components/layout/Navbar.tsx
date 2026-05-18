"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
const links = [
  { href: "#popular", label: "الأكثر طلباً" },
  { href: "#offers", label: "العروض" },
  { href: "#menu", label: "المنيو" },
  { href: "#about", label: "قصتنا" },
  { href: "#contact", label: "تواصل" },
];

export function Navbar() {
  const { itemCount, toggleCart } = useCart();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-10"
    >
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 md:px-8">
        <a
          href="#hero"
          className="font-cairo text-lg font-black tracking-widest text-cream md:text-xl"
        >
          CHIKNO
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-alexandria text-sm text-cream/70 transition-colors hover:text-pizza"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative rounded-full border border-cream/15 bg-cream/5 px-4 py-2 font-ibm text-sm text-cream transition-colors hover:border-pizza/40"
          >
            السلة
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pizza text-xs font-bold text-void"
              >
                {itemCount}
              </motion.span>
            )}
          </motion.button>
        </motion.div>
      </nav>
    </motion.header>
  );
}
