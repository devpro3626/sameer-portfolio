"use client";

import { useEffect, type RefObject } from "react";
import { useHeaderVisibility } from "@/providers/HeaderVisibilityProvider";

export function useHideHeaderWhenPast(sentinel: RefObject<HTMLElement | null>, offset = 16) {
  const { setHidden } = useHeaderVisibility();

  useEffect(() => {
    const update = () => {
      const element = sentinel.current;
      if (element) setHidden(element.getBoundingClientRect().top < offset);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      setHidden(false);
    };
  }, [sentinel, offset, setHidden]);
}
