"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";

interface ScrubTextProps {
  text: string;
  className?: string;
}

export function ScrubText({ text, className }: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const element = ref.current;
      if (!element) return;

      gsap.matchMedia().add(MOTION_OK, () => {
        SplitText.create(element, {
          type: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.fromTo(
              self.words,
              { opacity: 0.2 },
              {
                opacity: 1,
                stagger: 0.1,
                ease: "none",
                scrollTrigger: { trigger: element, start: "top 80%", end: "bottom 55%", scrub: 0.5 },
              },
            ),
        });
      });
    },
    { scope: ref },
  );

  return (
    <p ref={ref} className={className}>
      {text}
    </p>
  );
}
