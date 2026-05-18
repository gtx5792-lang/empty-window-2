"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { fadeUpReveal } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <SectionHeading
        label="تواصل معنا"
        title="جاهزين نسمع منك"
        subtitle="احجز طاولة، اطلب توصيل، أو اسأل عن أي حاجة"
      />

      <motion.form
        variants={fadeUpReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()}
        className="mx-auto max-w-2xl glass-panel rounded-3xl p-8 md:p-12"
      >
        <motion.div className="grid gap-6 md:grid-cols-2">
          <motion.div>
            <label className="mb-2 block font-ibm text-sm text-cream/50">
              الاسم
            </label>
            <input
              type="text"
              placeholder="اسمك"
              className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 font-alexandria text-cream placeholder:text-cream/30 focus:border-pizza/50 focus:outline-none focus:ring-1 focus:ring-pizza/30"
            />
          </motion.div>
          <motion.div>
            <label className="mb-2 block font-ibm text-sm text-cream/50">
              رقم الموبايل
            </label>
            <input
              type="tel"
              placeholder="01xxxxxxxxx"
              className="w-full rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 font-alexandria text-cream placeholder:text-cream/30 focus:border-pizza/50 focus:outline-none focus:ring-1 focus:ring-pizza/30"
            />
          </motion.div>
        </motion.div>
        <motion.div className="mt-6">
          <label className="mb-2 block font-ibm text-sm text-cream/50">
            رسالتك
          </label>
          <textarea
            rows={4}
            placeholder="اكتب رسالتك هنا..."
            className="w-full resize-none rounded-xl border border-cream/10 bg-cream/5 px-4 py-3 font-alexandria text-cream placeholder:text-cream/30 focus:border-pizza/50 focus:outline-none focus:ring-1 focus:ring-pizza/30"
          />
        </motion.div>
        <MagneticButton type="submit" className="mt-8 w-full md:w-auto">
          أرسل الرسالة
        </MagneticButton>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-8 text-center font-alexandria text-cream/50"
      >
        <div>
          <p className="text-pizza font-ibm text-xs uppercase tracking-widest">العنوان</p>
          <p className="mt-1 text-cream/80">القاهرة، مصر</p>
        </div>
        <div>
          <p className="text-pizza font-ibm text-xs uppercase tracking-widest">الهاتف</p>
          <p className="mt-1 text-cream/80" dir="ltr">
            +20 100 000 0000
          </p>
        </div>
        <div>
          <p className="text-pizza font-ibm text-xs uppercase tracking-widest">ساعات العمل</p>
          <p className="mt-1 text-cream/80">١٢ ظ — ٢ ص</p>
        </div>
      </motion.div>
    </section>
  );
}
