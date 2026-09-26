"use client";

import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { useRef } from "react";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollTopButton() {
  const ringRef = useRef<SVGCircleElement>(null);

  const lenis = useLenis((instance) => {
    ringRef.current?.setAttribute("stroke-dashoffset", String(CIRCUMFERENCE * (1 - instance.progress)));
  });

  return (
    <button
      type="button"
      onClick={() => lenis?.scrollTo(0, { duration: 1.6 })}
      aria-label="Back to top"
      className="group relative grid size-14 shrink-0 place-items-center rounded-full text-muted transition-colors hover:text-foreground"
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90" aria-hidden>
        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
        <circle
          ref={ringRef}
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
