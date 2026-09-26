import { ArrowDown } from "lucide-react";
import { Spotlight } from "./Spotlight";

const DOCUMENT_LINES = [
  { width: "55%", tone: "bg-accent" },
  { width: "100%", tone: "bg-foreground/25" },
  { width: "85%", tone: "bg-foreground/25" },
  { width: "100%", tone: "bg-foreground/25" },
  { width: "65%", tone: "bg-foreground/25" },
];

export function ResumeCard({ href }: { href: string }) {
  return (
    <Spotlight className="rounded-2xl border border-border bg-surface transition-colors duration-500 hover:border-accent/40">
      <a href={href} download className="group relative flex items-center gap-5 p-4 md:p-5">
        <span
          aria-hidden
          className="relative flex h-14 w-11 shrink-0 flex-col gap-1.5 rounded-lg border border-accent/30 bg-accent-soft px-2 pt-2.5"
        >
          {DOCUMENT_LINES.map((line, index) => (
            <span
              key={index}
              style={{ width: line.width, animationDelay: `${index * 0.28}s` }}
              className={`h-0.5 origin-left animate-write rounded-full ${line.tone}`}
            />
          ))}
          <span className="absolute -right-2 -bottom-2 rounded-md bg-accent px-1 py-px text-[9px] font-bold tracking-wide text-white">
            PDF
          </span>
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-medium">Download my résumé</span>
          <span className="block text-sm text-muted sm:truncate">
            Experience, projects and skills in one page
          </span>
        </span>

        <span className="relative grid size-12 shrink-0 place-items-center">
          <span aria-hidden className="absolute inset-0 animate-ring-pulse rounded-full bg-accent/40" />
          <span className="relative grid size-12 place-items-center overflow-hidden rounded-full bg-foreground text-background transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
            <ArrowDown className="size-4.5 animate-arrow-drop" />
          </span>
        </span>
      </a>
    </Spotlight>
  );
}
