"use client";

import { useSyncExternalStore } from "react";

const PLACEHOLDER = "--:--";

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

export function useLocalTime(timeZone: string, hour12 = false): string {
  return useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat(hour12 ? "en-US" : "en-GB", {
        hour: hour12 ? "numeric" : "2-digit",
        minute: "2-digit",
        hour12,
        timeZone,
      }).format(new Date()),
    () => PLACEHOLDER,
  );
}
