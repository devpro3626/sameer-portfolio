"use client";

import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export function useSectionNavigation() {
  const lenis = useLenis();
  const router = useRouter();

  return useCallback(
    (id: string) => {
      const target = id === "top" ? 0 : document.getElementById(id);

      if (target === null) {
        router.push(`/#${id}`);
        return;
      }

      lenis?.scrollTo(target, { duration: 1.6, easing: easeOutQuart });
    },
    [lenis, router],
  );
}
