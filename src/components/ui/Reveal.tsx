"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  immediate?: boolean;
}

export function Reveal({
  as: Component = "div",
  children,
  className,
  delay = 0,
  stagger = false,
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from(stagger ? element.children : element, {
          y: 28,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay,
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: immediate ? undefined : { trigger: element, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref, dependencies: [delay, stagger, immediate] },
  );

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
