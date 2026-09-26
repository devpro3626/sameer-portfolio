import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("relative grid size-9 shrink-0 place-items-center", className)} aria-hidden>
      <span className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,var(--accent)_100deg,#a5b8ff_140deg,transparent_200deg)]" />
      <span className="absolute inset-[1.5px] rounded-full bg-background" />
      <span className="absolute inset-[5px] rounded-full bg-foreground" />
      <span className="relative font-display text-[11px] font-bold tracking-tight text-background">SB</span>
    </span>
  );
}
