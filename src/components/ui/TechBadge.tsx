import { cn } from "@/lib/cn";
import { TechIcon } from "./TechIcon";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted",
        className,
      )}
    >
      <TechIcon name={name} className="size-3.5" />
      {name}
    </span>
  );
}
