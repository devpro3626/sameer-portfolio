"use client";

import { useLenis } from "lenis/react";
import { useRef } from "react";

export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useLenis((lenis) => {
    if (barRef.current) barRef.current.style.transform = `scaleX(${lenis.progress})`;
  });

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div ref={barRef} className="h-full origin-left scale-x-0 bg-gradient-to-r from-accent to-[#a5b8ff]" />
    </div>
  );
}
