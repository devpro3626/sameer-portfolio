import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <p className="flex items-center gap-2 text-sm font-medium text-accent">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-3xl leading-tight font-semibold text-balance md:text-[2.75rem]">{title}</h2>
      {description && (
        <p className="text-base leading-relaxed text-pretty text-muted md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
