import type { CSSProperties } from "react";
import { TechIcon } from "@/components/ui/TechIcon";
import { marqueeStack } from "@/content/expertise";

export function TechStack() {
  return (
    <section aria-label="Technologies I work with" className="border-y border-border bg-surface/40">
      <div className="mx-auto flex w-full max-w-[100rem] items-center gap-6 px-5 py-4 md:px-10">
        <p className="hidden shrink-0 text-sm text-muted md:block">Tech I ship with</p>
        <span aria-hidden className="hidden h-5 w-px shrink-0 bg-border-strong md:block" />
        <div className="fade-edges-x group flex min-w-0 flex-1 overflow-hidden">
          <div
            style={{ "--marquee-duration": `${marqueeStack.length * 3}s` } as CSSProperties}
            className="flex w-max shrink-0 animate-marquee-x group-hover:[animation-play-state:paused]"
          >
            {[...marqueeStack, ...marqueeStack].map((name, index) => (
              <span
                key={`${name}-${index}`}
                aria-hidden={index >= marqueeStack.length}
                className="mr-7 inline-flex items-center gap-2 text-sm whitespace-nowrap text-muted transition-colors hover:text-foreground"
              >
                <TechIcon name={name} className="size-4" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
