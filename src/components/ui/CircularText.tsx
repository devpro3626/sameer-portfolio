import { cn } from "@/lib/cn";

interface CircularTextProps {
  text: string;
  className?: string;
}

export function CircularText({ text, className }: CircularTextProps) {
  return (
    <svg viewBox="0 0 200 200" className={cn("animate-spin-slower", className)} aria-hidden>
      <defs>
        <path id="circular-text-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <text className="fill-current font-display text-[15px] font-semibold tracking-[0.2em] uppercase">
        <textPath href="#circular-text-path" textLength="488">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
