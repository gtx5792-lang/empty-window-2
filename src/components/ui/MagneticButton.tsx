"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";
import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from "react";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  function MagneticButton(
    { children, variant = "primary", className, onMouseMove, onMouseLeave, ...props },
    forwardedRef
  ) {
    const { ref: magneticRef, onMouseMove: magneticMove, onMouseLeave: magneticLeave } =
      useMagnetic(0.25);

    const variants = {
      primary:
        "btn-shimmer text-void font-bold shadow-glow hover:shadow-[0_0_60px_rgba(255,140,26,0.5)]",
      ghost: "text-cream/80 hover:text-cream bg-transparent",
      outline:
        "border border-cream/20 text-cream hover:border-pizza/50 hover:text-pizza",
    };

    return (
      <motion.button
        ref={(node) => {
          (magneticRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        onMouseMove={(e) => {
          magneticMove(e);
          onMouseMove?.(e);
        }}
        onMouseLeave={(e) => {
          magneticLeave();
          onMouseLeave?.(e);
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm md:text-base transition-shadow duration-500",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
