"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUpReveal } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <SectionHeading
        label="قصتنا"
        title="من الفرن للقلب"
        align="start"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={fadeUpReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
            whileInView={{ scale: [0.95, 1] }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80"
              alt="صانع بيتزا في تشيكنو"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-6 glass-panel rounded-2xl px-6 py-4"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="font-cairo text-3xl font-black text-pizza">+10</span>
            <p className="font-alexandria text-sm text-cream/60">سنوات من الشغف</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="font-alexandria text-lg leading-loose text-cream/75 md:text-xl">
            تشيكنو مش مجرد مطعم بيتزا — إحنا بنصنع تجربة سينمائية في كل قضمة.
            من أول عجينة بتتعجن بالإيد، لحد ما البيتزا توصلك سخنة ومحمّرة بالشغف.
          </p>
          <p className="font-alexandria text-lg leading-loose text-cream/55">
            بنؤمن إن الأكل لازم يحرك المشاعر زي ما السينما بتعمل. عشان كده كل تفصيلة
            في موقعنا وتجربتنا مصممة تخليك تحس بالفخامة قبل ما تاخد أول لقمة.
          </p>
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {["عجينة 48 ساعة", "مكونات طازجة", "فرن حجري"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-pizza/30 bg-pizza/10 px-5 py-2 font-ibm text-sm text-pizza"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
