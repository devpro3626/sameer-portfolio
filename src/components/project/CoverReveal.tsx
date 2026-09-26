"use client";

import { useRef, type ReactNode } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

export function CoverReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          ref.current,
          { scale: 0.9, y: 30 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top bottom", end: "center center", scrub: true },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="origin-top">
      {children}
    </div>
  );
}
