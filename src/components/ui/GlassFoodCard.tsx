"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { MenuItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

interface GlassFoodCardProps {
  item: MenuItem;
  index?: number;
}

export function GlassFoodCard({ item, index = 0 }: GlassFoodCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const handleAdd = () => {
    const rect = cardRef.current?.getBoundingClientRect();
    addItem(item, rect);
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <motion.div
        className="glass-panel relative overflow-hidden rounded-3xl p-1 transition-all duration-500 group-hover:shadow-glow group-hover:border-pizza/30"
        whileHover={{ scale: 1.02 }}
      >
        {/* Glow on hover */}
        <motion.div
          className="pointer-events-none absolute -inset-1 rounded-3xl bg-pizza/0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:bg-pizza/20 group-hover:opacity-100"
          aria-hidden
        />

        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={item.image}
            alt={item.nameAr}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:saturate-125"
            loading="lazy"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent"
            aria-hidden
          />
          {item.badge && (
            <span className="absolute right-4 top-4 rounded-full bg-pizza/90 px-3 py-1 font-ibm text-xs font-bold text-void">
              {item.badge}
            </span>
          )}
        </motion.div>

        <motion.div className="relative p-5 md:p-6">
          <h3 className="font-cairo text-xl font-bold text-cream md:text-2xl">
            {item.nameAr}
          </h3>
          <p className="mt-2 font-alexandria text-sm leading-relaxed text-cream/55 line-clamp-2">
            {item.descriptionAr}
          </p>
          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="font-cairo text-2xl font-bold text-pizza drop-shadow-[0_0_12px_rgba(255,140,26,0.5)]">
              {formatPrice(item.price)}
            </span>
            <motion.button
              onClick={handleAdd}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className={cn(
                "rounded-full border border-pizza/40 bg-pizza/10 px-5 py-2.5",
                "font-ibm text-sm font-semibold text-pizza",
                "transition-all duration-300 hover:bg-pizza hover:text-void hover:shadow-glow-sm"
              )}
            >
              أضف للسلة
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
