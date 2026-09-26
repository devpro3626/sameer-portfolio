"use client";

import { useEffect, useRef } from "react";
import { useLocalTime } from "@/hooks/useLocalTime";

interface LiveClockProps {
  city: string;
  timeZone: string;
}

const MARKERS = Array.from({ length: 12 }, (_, index) => index * 30);

function secondsIn(timeZone: string): number {
  return Number(new Intl.DateTimeFormat("en-GB", { second: "numeric", timeZone }).format(new Date()));
}

export function LiveClock({ city, timeZone }: LiveClockProps) {
  const time = useLocalTime(timeZone);
  const displayTime = useLocalTime(timeZone, true);
  const secondHandRef = useRef<SVGLineElement>(null);
  const [hours, minutes] = time.split(":").map(Number);
  const hasTime = !Number.isNaN(hours);
  const hourAngle = hasTime ? (hours % 12) * 30 + minutes * 0.5 : 0;
  const minuteAngle = hasTime ? minutes * 6 : 0;

  useEffect(() => {
    if (secondHandRef.current) secondHandRef.current.style.animationDelay = `-${secondsIn(timeZone)}s`;
  }, [timeZone]);

  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="size-11 shrink-0" aria-hidden>
        <circle cx="20" cy="20" r="19" fill="var(--surface-raised)" stroke="var(--border-strong)" />
        {MARKERS.map((angle) => (
          <line
            key={angle}
            x1="20"
            y1="3.5"
            x2="20"
            y2={angle % 90 === 0 ? 6.5 : 5}
            stroke={angle % 90 === 0 ? "var(--foreground)" : "var(--subtle)"}
            strokeWidth="1"
            strokeLinecap="round"
            transform={`rotate(${angle} 20 20)`}
          />
        ))}
        <line
          x1="20"
          y1="20"
          x2="20"
          y2="11"
          stroke="var(--foreground)"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${hourAngle} 20 20)`}
          className="transition-transform duration-700"
        />
        <line
          x1="20"
          y1="20"
          x2="20"
          y2="7"
          stroke="var(--muted)"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${minuteAngle} 20 20)`}
        />
        <line
          ref={secondHandRef}
          x1="20"
          y1="23"
          x2="20"
          y2="6"
          stroke="var(--accent)"
          strokeWidth="0.8"
          strokeLinecap="round"
          className="origin-center animate-tick [transform-box:view-box]"
        />
        <circle cx="20" cy="20" r="1.6" fill="var(--accent)" />
      </svg>
      <div>
        <p className="font-display text-lg leading-none font-semibold tabular-nums">{displayTime}</p>
        <p className="mt-1 text-xs text-muted">{city} · local time</p>
      </div>
    </div>
  );
}
