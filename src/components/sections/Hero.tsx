"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCart } from "@/context/CartContext";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3491878/3491878-hd_1920_1080_25fps.mp4";

const titleVariants = {
  hidden: { opacity: 0, y: 80, filter: "blur(20px)", scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.15,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { openCart } = useCart();

  useEffect(() => {
    const video = videoRef.current;
    const parallax = parallaxRef.current;
    if (!video || !parallax) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(parallax, {
        y: scrollY * 0.35,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Video background with slow zoom */}
      <motion.div
        ref={parallaxRef}
        className="absolute inset-0 scale-110"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1.15 }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80"
          className="hero-video-zoom absolute inset-0 h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay + vignette */}
      <div className="absolute inset-0 bg-void/65" aria-hidden />
      <div className="vignette absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" aria-hidden />

      {/* Light leak */}
      <div className="light-leak pointer-events-none absolute inset-0 overflow-hidden opacity-60" aria-hidden />

      <FloatingParticles count={30} />

      {/* Open status — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute right-5 top-28 z-20 flex items-center gap-2 md:right-10 md:top-32"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon shadow-neon" />
        </span>
        <span className="font-alexandria text-sm text-cream/90">مفتوح الآن</span>
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <motion.span
          custom={0}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-2 font-alexandria text-lg text-pizza md:text-xl"
        >
          تشيكنو
        </motion.span>

        <motion.h1
          custom={1}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-cairo text-[clamp(4rem,15vw,10rem)] font-black leading-none tracking-[0.08em] text-cream"
          style={{
            textShadow: "0 0 80px rgba(255,140,26,0.3), 0 4px 40px rgba(0,0,0,0.8)",
          }}
        >
          CHIKNO
        </motion.h1>

        <motion.p
          custom={2}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-md font-alexandria text-xl text-cream/80 md:text-2xl"
        >
          بيتزا تستاهل الجوع
        </motion.p>

        <motion.div
          custom={3}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton onClick={openCart}>
            اطلب دلوقتي ←
          </MagneticButton>
          <MagneticButton
            variant="ghost"
            onClick={() =>
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
            }
            className="underline-offset-4 hover:underline"
          >
            شوف المنيو
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-ibm text-[10px] uppercase tracking-[0.4em] text-cream/40">
          scroll
        </span>
        <div className="flex h-12 w-6 items-start justify-center rounded-full border border-cream/20 p-1.5">
          <motion.div
            className="scroll-line h-2 w-1 rounded-full bg-pizza"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
