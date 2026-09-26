"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";

interface HeroPortraitProps {
  name: string;
  location: string;
}

export function HeroPortrait({ name, location }: HeroPortraitProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.to("[data-portrait-image]", {
          yPercent: 8,
          scale: 1.06,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border-strong bg-surface"
    >
      <div data-portrait-image className="absolute inset-0">
        <Image
          src="/images/portrait-formal.webp"
          alt={`Portrait of ${name}`}
          fill
          priority
          quality={95}
          sizes="(min-width: 1024px) 32rem, 26rem"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background/95 to-transparent" />
      <div className="absolute inset-x-5 bottom-5">
        <p className="font-display text-base font-semibold">{name}</p>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-3.5" /> {location}
        </p>
      </div>
    </div>
  );
}
