"use client";

import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

export function Spotlight({ children, className }: SpotlightProps) {
  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      onPointerMove={handleMove}
      className={cn(
        "group/spot relative overflow-hidden",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "before:bg-[radial-gradient(420px_circle_at_var(--spot-x)_var(--spot-y),rgb(107_140_255/0.14),transparent_60%)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
