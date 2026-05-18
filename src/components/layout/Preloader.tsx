"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + Math.random() * 18 + 4;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-void"
        >
          {/* Pizza logo animation */}
          <motion.div
            className="relative mb-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="h-28 w-28 rounded-full border-4 border-pizza/30"
              style={{
                borderTopColor: "#ff8c1a",
                borderRightColor: "rgba(255,140,26,0.6)",
              }}
            />
            <motion.span
              className="absolute inset-0 flex items-center justify-center font-cairo text-2xl font-black tracking-widest text-pizza"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              C
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cairo text-4xl font-black tracking-[0.2em] text-cream md:text-5xl"
          >
            CHIKNO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 font-alexandria text-pizza/80"
          >
            تشيكنو
          </motion.p>

          {/* Progress bar */}
          <div className="mt-12 h-0.5 w-48 overflow-hidden rounded-full bg-cream/10 md:w-64">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-pizza to-neon/60"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.span
            className="mt-3 font-ibm text-xs text-cream/40"
            key={Math.floor(progress)}
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
