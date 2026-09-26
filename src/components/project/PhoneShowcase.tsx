import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/types/content";

export function PhoneShowcase({ images }: { images: ProjectImage[] }) {
  const shots = images.length >= 3 ? [images[1], images[0], images[2]] : images;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-surface px-4 py-10 md:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_50%_45%,rgb(107_140_255/0.22),transparent_70%)]"
      />
      <div className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-10">
        {shots.map((image, index) => {
          const isCenter = shots.length === 3 ? index === 1 : index === 0;
          return (
            <PhoneFrame
              key={image.src}
              image={image}
              priority={isCenter}
              sizes="(min-width: 768px) 16rem, 32vw"
              className={cn(
                "w-[30%] max-w-[15rem] animate-float",
                isCenter ? "z-10 max-w-[16.5rem]" : "opacity-80",
                index === 2 && "[animation-delay:-2s]",
                index === 0 && !isCenter && "[animation-delay:-4s]",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
