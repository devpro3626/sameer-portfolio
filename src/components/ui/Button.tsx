import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-foreground text-background hover:bg-white",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-muted hover:bg-surface-raised",
};

export function buttonStyles(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-300",
    variants[variant],
    className,
  );
}

export function ButtonIcon({ children }: { children: ReactNode }) {
  return <span className="transition-transform duration-300 group-hover:translate-x-0.5">{children}</span>;
}

interface ButtonProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({ variant = "primary", icon, className, children, external, ...props }: ButtonProps) {
  return (
    <Link
      {...props}
      {...(external && { target: "_blank", rel: "noreferrer" })}
      className={buttonStyles(variant, className)}
    >
      {children}
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
    </Link>
  );
}
