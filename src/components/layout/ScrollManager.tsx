"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

export function ScrollManager() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const target = window.location.hash ? document.querySelector(window.location.hash) : null;

      if (target instanceof HTMLElement) {
        lenis.scrollTo(target, { immediate: true, force: true });
      } else {
        lenis.scrollTo(0, { immediate: true, force: true });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, lenis]);

  return null;
}
