import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/types/content";

interface PhoneFrameProps {
  image: ProjectImage;
  sizes: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
}

export function PhoneFrame({ image, sizes, priority, className, fill = false }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] border border-border-strong bg-[#05060a] p-2 shadow-2xl shadow-black/60",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute top-3.5 left-1/2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-black/80 ring-1 ring-white/10"
      />
      <div className={cn("relative overflow-hidden rounded-[1.5rem]", fill && "h-full")}>
        {fill ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={sizes}
            priority={priority}
            className="h-auto w-full"
          />
        )}
      </div>
    </div>
  );
}
