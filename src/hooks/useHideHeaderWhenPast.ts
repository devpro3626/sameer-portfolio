"use client";

import { useEffect, type RefObject } from "react";
import { useHeaderVisibility } from "@/providers/HeaderVisibilityProvider";

export function useHideHeaderWhenPast(sentinel: RefObject<HTMLElement | null>, offset = 16) {
  const { setHidden } = useHeaderVisibility();

  useEffect(() => {
    const element = sentinel.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(!entry.isIntersecting && entry.boundingClientRect.top < offset),
      { rootMargin: `-${offset}px 0px 0px 0px` },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      setHidden(false);
    };
  }, [sentinel, offset, setHidden]);
}
