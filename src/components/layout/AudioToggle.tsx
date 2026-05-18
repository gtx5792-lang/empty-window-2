"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export function AudioToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.25;
      audio.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="/audio/ambient.mp3"
      />
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={playing ? "إيقاف الصوت" : "تشغيل الصوت"}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-panel text-cream/70 transition-colors hover:text-pizza md:bottom-8 md:right-8"
      >
        {playing ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
