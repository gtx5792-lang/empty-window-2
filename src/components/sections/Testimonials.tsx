"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import testimonialsData from "@/data/testimonials.json";
import type { Testimonial } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUpReveal, staggerContainer } from "@/lib/animations";

const testimonials = testimonialsData as Testimonial[];

export function Testimonials() {
  return (
    <section className="section-pad relative">
      <SectionHeading
        label="آراء العملاء"
        title="الناس بتتكلم"
        subtitle="تجارب حقيقية من عشاق تشيكنو"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {testimonials.map((t) => (
          <motion.blockquote
            key={t.id}
            variants={fadeUpReveal}
            whileHover={{ y: -6 }}
            drag="x"
            dragConstraints={{ left: -40, right: 40 }}
            dragElastic={0.2}
            className="glass-panel relative min-w-[85vw] shrink-0 snap-center rounded-3xl p-8 md:min-w-0"
          >
            <motion.div
              className="mb-4 flex gap-1 text-pizza"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </motion.div>
            <p className="font-alexandria text-lg leading-relaxed text-cream/80">
              &ldquo;{t.quoteAr}&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <motion.div
                className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-pizza/30"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={t.avatar}
                  alt={t.nameAr}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </motion.div>
              <cite className="font-cairo font-semibold not-italic text-cream">
                {t.nameAr}
              </cite>
            </footer>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  );
}
