import { Hero } from "@/components/sections/Hero";
import { PopularPizza } from "@/components/sections/PopularPizza";
import { TodayOffers } from "@/components/sections/TodayOffers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Menu } from "@/components/sections/Menu";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <PopularPizza />
      <TodayOffers />
      <Testimonials />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
