import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/types/content";

const COLUMN_COUNT = 3;

export function ProjectMosaic({ images, className }: { images: ProjectImage[]; className?: string }) {
  const columns = Array.from({ length: COLUMN_COUNT }, (_, column) =>
    images.filter((_, index) => index % COLUMN_COUNT === column),
  );

  return (
    <div aria-hidden className={cn("relative [perspective:1600px]", className)}>
      <div className="fade-edges-y absolute inset-0">
        <div className="absolute -inset-x-6 -inset-y-10 grid grid-cols-3 gap-4 [transform:rotateX(22deg)_rotateY(-16deg)_rotateZ(6deg)] [transform-style:preserve-3d]">
          {columns.map((column, index) => (
            <div key={index} className="overflow-hidden">
              <div
                style={{ "--marquee-duration": `${column.length * 4 + index * 6}s` } as CSSProperties}
                className={cn(
                  "flex animate-marquee-y flex-col",
                  index % 2 === 1 && "[animation-direction:reverse]",
                )}
              >
                {[...column, ...column].map((image, imageIndex) => (
                  <div
                    key={`${image.src}-${imageIndex}`}
                    className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl border border-border-strong bg-surface shadow-lg shadow-black/40"
                  >
                    <Image src={image.src} alt="" fill sizes="14rem" className="object-cover object-top" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
    </div>
  );
}
