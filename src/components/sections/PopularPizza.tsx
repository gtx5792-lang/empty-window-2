"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import menuData from "@/data/menu.json";
import type { MenuItem } from "@/types";
import { GlassFoodCard } from "@/components/ui/GlassFoodCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { animateSectionReveal } from "@/lib/animations";

const popularItems = (menuData as MenuItem[]).filter((item) => item.isPopular);

export function PopularPizza() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    animateSectionReveal("[data-reveal='popular']", { y: 60 });
  }, []);

  return (
    <section
      id="popular"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-pizza/10 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden
      />

      <SectionHeading
        label="الأكثر طلباً"
        title="البيتزا اللي بتتكلم عن نفسها"
        subtitle="اختيارات عملائنا المفضّلة — كل قضمة قصة"
      />

      <div
        data-reveal="popular"
        className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {popularItems.map((item, index) => (
          <GlassFoodCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
