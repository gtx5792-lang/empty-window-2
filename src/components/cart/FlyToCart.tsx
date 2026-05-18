"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function FlyToCart() {
  const { flyAnimation } = useCart();

  if (!flyAnimation) return null;

  const { from, image } = flyAnimation;
  const cartX = typeof window !== "undefined" ? window.innerWidth - 80 : 0;
  const cartY = 40;

  return (
    <AnimatePresence>
      <motion.div
        key={flyAnimation.id}
        className="pointer-events-none fixed z-[9999] h-16 w-16 overflow-hidden rounded-full border-2 border-pizza shadow-glow"
        initial={{
          left: from.left + from.width / 2 - 32,
          top: from.top + from.height / 2 - 32,
          scale: 1,
          opacity: 1,
        }}
        animate={{
          left: cartX - 32,
          top: cartY,
          scale: 0.3,
          opacity: 0,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image src={image} alt="" fill className="object-cover" sizes="64px" />
      </motion.div>
    </AnimatePresence>
  );
}
