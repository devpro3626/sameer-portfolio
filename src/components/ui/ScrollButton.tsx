"use client";

import type { ReactNode } from "react";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { buttonStyles, ButtonIcon, type ButtonVariant } from "./Button";

interface ScrollButtonProps {
  target: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
}

export function ScrollButton({ target, children, icon, variant = "primary" }: ScrollButtonProps) {
  const navigate = useSectionNavigation();

  return (
    <button type="button" onClick={() => navigate(target)} className={buttonStyles(variant)}>
      {children}
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
    </button>
  );
}
