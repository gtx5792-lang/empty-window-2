"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import menuData from "@/data/menu.json";
import type { MenuItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { fadeUpReveal, staggerContainer } from "@/lib/animations";

const offers = (menuData as MenuItem[]).filter((item) => item.isOffer);

export function TodayOffers() {
  const { addItem } = useCart();

  return (
    <section id="offers" className="section-pad relative overflow-hidden bg-void">
      <div className="absolute inset-0 bg-light-leak opacity-30" aria-hidden />

      <SectionHeading
        label="عروض اليوم"
        title="وفر أكتر، استمتع أكتر"
        subtitle="عروض حصرية لفترة محدودة"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"
      >
        {offers.map((offer) => (
          <motion.article
            key={offer.id}
            variants={fadeUpReveal}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="glass-panel relative flex flex-col md:flex-row">
              <motion.div
                className="relative aspect-video md:aspect-auto md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={offer.image}
                  alt={offer.nameAr}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-void/80 to-transparent md:bg-gradient-to-t" />
                {offer.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-neon/90 px-4 py-1.5 font-ibm text-xs font-bold text-void">
                    {offer.badge}
                  </span>
                )}
              </motion.div>

              <div className="flex flex-1 flex-col justify-center p-8">
                <h3 className="font-cairo text-2xl font-bold text-cream md:text-3xl">
                  {offer.nameAr}
                </h3>
                <p className="mt-3 font-alexandria text-cream/60">
                  {offer.descriptionAr}
                </p>
                <motion.p
                  className="mt-6 font-cairo text-4xl font-black text-pizza"
                  animate={{ textShadow: ["0 0 20px rgba(255,140,26,0.3)", "0 0 40px rgba(255,140,26,0.6)", "0 0 20px rgba(255,140,26,0.3)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {formatPrice(offer.price)}
                </motion.p>
                <MagneticButton
                  className="mt-6 w-fit"
                  onClick={() => addItem(offer)}
                >
                  اطلب العرض
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
