import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsapPlugins() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export const fadeUpReveal = {
  hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export function animateSectionReveal(
  selector: string,
  options?: { start?: string; y?: number }
) {
  registerGsapPlugins();
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: options?.y ?? 80,
      filter: "blur(16px)",
      scale: 0.96,
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: elements[0]?.parentElement ?? elements[0],
        start: options?.start ?? "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

export function animateParallax(
  element: HTMLElement | null,
  speed = 0.3
) {
  if (!element) return () => {};
  registerGsapPlugins();

  const tween = gsap.to(element, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  return () => tween.kill();
}
