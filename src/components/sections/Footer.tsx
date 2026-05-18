"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-cream/5 px-5 py-12 md:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row"
      >
        <div className="text-center md:text-right">
          <p className="font-cairo text-2xl font-black tracking-widest text-cream">
            CHIKNO
          </p>
          <p className="mt-1 font-alexandria text-sm text-cream/40">
            بيتزا تستاهل الجوع © {new Date().getFullYear()}
          </p>
        </div>

        <nav className="flex gap-6 font-alexandria text-sm text-cream/50">
          <a href="#menu" className="transition-colors hover:text-pizza">
            المنيو
          </a>
          <a href="#about" className="transition-colors hover:text-pizza">
            قصتنا
          </a>
          <a href="#contact" className="transition-colors hover:text-pizza">
            تواصل
          </a>
        </nav>

        <motion.p
          className="font-ibm text-xs text-cream/30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          صُنع بشغف
        </motion.p>
      </motion.div>
    </footer>
  );
}
