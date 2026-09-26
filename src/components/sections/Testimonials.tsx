import { Quote } from "lucide-react";
import type { CSSProperties } from "react";
import { FaStar } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/cn";
import type { Testimonial } from "@/types/content";

function splitIntoColumns<T>(items: T[], count: number): T[][] {
  return Array.from({ length: count }, (_, column) => items.filter((_, index) => index % count === column));
}

const columnSpeeds = [38, 46, 42];

export function Testimonials() {
  const columns = splitIntoColumns(testimonials, 3);

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Client reviews"
          title="Trusted by founders and teams worldwide"
          description="Feedback from clients across the United States, Europe and beyond."
        />

        <div className="fade-edges-y mt-14 h-[40rem] overflow-hidden">
          <div className="grid h-full gap-5 md:hidden">
            <ReviewColumn items={testimonials} duration={70} />
          </div>
          <div className="hidden h-full gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {columns.map((column, index) => (
              <ReviewColumn
                key={index}
                items={column}
                duration={columnSpeeds[index]}
                reverse={index % 2 === 1}
                className={cn(index === 2 && "md:hidden lg:block")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ReviewColumnProps {
  items: Testimonial[];
  duration: number;
  reverse?: boolean;
  className?: string;
}

function ReviewColumn({ items, duration, reverse = false, className }: ReviewColumnProps) {
  return (
    <div className={cn("group", className)}>
      <ul
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
        className={cn(
          "flex animate-marquee-y flex-col group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {[...items, ...items].map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} hidden={index >= items.length} />
        ))}
      </ul>
    </div>
  );
}

function ReviewCard({ review, hidden }: { review: Testimonial; hidden: boolean }) {
  const initials = review.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <li aria-hidden={hidden} className="mb-5 rounded-3xl border border-border bg-surface p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className="size-3.5" />
          ))}
        </div>
        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
          {review.project}
        </span>
      </div>
      <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-foreground/90">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="grid size-10 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
          {initials}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium">{review.name}</p>
          <p className="text-xs text-muted">
            {review.role} · {review.country}
          </p>
        </div>
        <Quote className="ml-auto size-5 shrink-0 text-subtle" aria-hidden />
      </div>
    </li>
  );
}
