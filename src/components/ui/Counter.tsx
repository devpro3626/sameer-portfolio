"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const finalText = `${value}${suffix}`;

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      gsap.matchMedia().add(MOTION_OK, () => {
        const state = { current: 0 };
        const render = () => {
          element.textContent = `${Math.round(state.current)}${suffix}`;
        };

        render();
        gsap.to(state, {
          current: value,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          onUpdate: render,
        });

        return () => {
          element.textContent = finalText;
        };
      });
    },
    { scope: ref, dependencies: [value, suffix, finalText] },
  );

  return (
    <span ref={ref} className={className}>
      {finalText}
    </span>
  );
}
