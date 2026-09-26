"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key, pathname]);

  return pathname === "/" ? active : null;
}
