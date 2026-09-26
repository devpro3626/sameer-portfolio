import Image from "next/image";
import { cn } from "@/lib/cn";
import { aspectRatio } from "@/lib/media";
import { getCategoryLabel } from "@/lib/projects";
import type { Project } from "@/types/content";

interface ProjectCoverProps {
  project: Project;
  sizes: string;
  className?: string;
  priority?: boolean;
}

export function ProjectCover({ project, sizes, className, priority = false }: ProjectCoverProps) {
  const [cover] = project.images;

  if (cover && aspectRatio(cover) < 1) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        <Image
          src={cover.src}
          alt=""
          fill
          sizes="10rem"
          className="scale-125 object-cover opacity-50 blur-2xl"
        />
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain py-[6%] drop-shadow-2xl"
        />
      </div>
    );
  }

  if (cover) {
    return (
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover object-top", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col justify-end gap-1 bg-[radial-gradient(ellipse_at_top_left,rgb(107_140_255/0.25),transparent_65%)] p-6",
        className,
      )}
    >
      <span className="text-xs text-muted">{getCategoryLabel(project.category)}</span>
      <span className="font-display text-2xl font-semibold">{project.title}</span>
    </div>
  );
}
