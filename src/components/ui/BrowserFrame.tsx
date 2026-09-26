import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ProjectImage } from "@/types/content";

interface BrowserFrameProps {
  image: ProjectImage;
  sizes: string;
  label?: string;
  priority?: boolean;
  className?: string;
  fill?: boolean;
}

export function BrowserFrame({ image, sizes, label, priority, className, fill = false }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-surface-raised shadow-2xl shadow-black/50",
        fill && "flex flex-col",
        className,
      )}
    >
      <div className="flex h-8 shrink-0 items-center gap-3 border-b border-border px-3.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </span>
        {label && (
          <span className="mx-auto max-w-[60%] truncate rounded-md bg-white/5 px-3 py-0.5 text-[11px] text-subtle">
            {label}
          </span>
        )}
      </div>
      {fill ? (
        <div className="relative min-h-0 flex-1">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
        </div>
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
  );
}
