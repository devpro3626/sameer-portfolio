"use client";

import { useRef } from "react";
import { cn } from "@/lib/cn";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

export function ScrollLine({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const track = ref.current;
      if (!track?.parentElement) return;

      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-line-fill]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: track.parentElement, start: "top 65%", end: "bottom 65%", scrub: true },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <span ref={ref} aria-hidden className={cn("absolute w-px bg-border", className)}>
      <span
        data-line-fill
        className="block h-full w-full origin-top bg-gradient-to-b from-accent via-accent to-accent/0 shadow-[0_0_12px_var(--accent)]"
      />
    </span>
  );
}
