"use client";

import { useRef, type CSSProperties } from "react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { DESKTOP, gsap, useGSAP } from "@/lib/gsap";
import { aspectRatio, fitToViewport, isMobileShot } from "@/lib/media";
import type { ProjectImage } from "@/types/content";

const FRAME_HEIGHT = "60svh";
const BROWSER_CHROME = { x: "0rem", y: "2rem" };
const PHONE_BEZEL = { x: "1rem", y: "1rem" };

export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;

      gsap.matchMedia().add(DESKTOP, () => {
        const distance = () => Math.max(track.scrollWidth - window.innerWidth, 0);
        if (distance() === 0) return;

        const scrollTrigger = {
          trigger: pin,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 1,
          invalidateOnRefresh: true,
        };

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: { ...scrollTrigger, pin: true },
        });
        gsap.fromTo("[data-gallery-progress]", { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger });
      });
    },
    { scope: pinRef, dependencies: [images.length] },
  );

  if (images.length === 0) return null;

  return (
    <section className="overflow-x-clip py-16 md:py-24 lg:py-0">
      <div ref={pinRef} className="flex flex-col justify-center gap-10 lg:h-svh">
        <div className="container-page flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-accent">Gallery</p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Inside the product</h2>
          </div>
          <div className="hidden w-48 lg:block">
            <p className="mb-2 text-right text-sm text-muted">{images.length} screens</p>
            <div className="h-0.5 overflow-hidden rounded-full bg-border">
              <div data-gallery-progress className="h-full origin-left bg-accent" />
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="container-page flex flex-col gap-8 lg:w-max lg:max-w-none lg:flex-row lg:items-center lg:gap-6 lg:pr-[10vw]"
        >
          {images.map((image) => (
            <GalleryItem key={image.src} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ image }: { image: ProjectImage }) {
  const mobile = isMobileShot(image);
  const frame = mobile ? PHONE_BEZEL : BROWSER_CHROME;
  const style = {
    "--frame-h": FRAME_HEIGHT,
    "--pad-x": frame.x,
    "--pad-y": frame.y,
    "--ratio": aspectRatio(image),
    "--mobile-max": fitToViewport(image, mobile ? "70svh" : "80svh"),
  } as CSSProperties;

  return (
    <div
      style={style}
      className="mx-auto w-full max-w-[var(--mobile-max)] shrink-0 lg:mx-0 lg:[height:var(--frame-h)] lg:[width:calc((var(--frame-h)-var(--pad-y))*var(--ratio)+var(--pad-x))] lg:max-w-none"
    >
      <div className="lg:hidden">
        {mobile ? <PhoneFrame image={image} sizes="80vw" /> : <BrowserFrame image={image} sizes="100vw" />}
      </div>
      <div className="hidden h-full lg:block">
        {mobile ? (
          <PhoneFrame image={image} sizes="20rem" fill className="h-full" />
        ) : (
          <BrowserFrame image={image} sizes="70vw" fill className="h-full" />
        )}
      </div>
    </div>
  );
}
