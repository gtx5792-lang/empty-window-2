"use client";

import { motion } from "framer-motion";
import { fadeUpReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUpReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "mb-14 md:mb-20",
        align === "center" ? "text-center" : "text-right",
        className
      )}
    >
      <span className="mb-3 inline-block font-ibm text-xs uppercase tracking-[0.3em] text-pizza">
        {label}
      </span>
      <h2 className="font-cairo text-3xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-xl font-alexandria text-base text-cream/60 md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
