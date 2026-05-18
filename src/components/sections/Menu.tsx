"use client";

import { useEffect, useRef } from "react";
import menuData from "@/data/menu.json";
import type { MenuItem } from "@/types";
import { GlassFoodCard } from "@/components/ui/GlassFoodCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { animateSectionReveal } from "@/lib/animations";

const menuItems = (menuData as MenuItem[]).filter(
  (item) => item.category === "menu" || item.category === "popular"
);

export function Menu() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animateSectionReveal("[data-reveal='menu-card']");
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="section-pad relative">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-neon/5 blur-[150px]"
        aria-hidden
      />

      <SectionHeading
        label="المنيو"
        title="اختار بيتزاك"
        subtitle="كل الأصناف مصنوعة بمكونات طازجة يومياً"
      />

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, index) => (
          <div key={item.id} data-reveal="menu-card">
            <GlassFoodCard item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
