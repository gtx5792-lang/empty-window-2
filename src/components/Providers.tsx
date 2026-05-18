"use client";

import { useState, type ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Preloader } from "@/components/layout/Preloader";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { FlyToCart } from "@/components/cart/FlyToCart";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { AudioToggle } from "@/components/layout/AudioToggle";
import { PwaRegister } from "@/components/layout/PwaRegister";

export function Providers({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <CartProvider>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <SmoothScroll>
        <div
          className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <NoiseOverlay />
          <Navbar />
          {children}
          <CartDrawer />
          <FlyToCart />
          <WhatsAppButton />
          <AudioToggle />
          <PwaRegister />
        </div>
      </SmoothScroll>
    </CartProvider>
  );
}
