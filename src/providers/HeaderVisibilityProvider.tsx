"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface HeaderVisibility {
  isHidden: boolean;
  setHidden: (hidden: boolean) => void;
}

const HeaderVisibilityContext = createContext<HeaderVisibility | null>(null);

export function HeaderVisibilityProvider({ children }: { children: ReactNode }) {
  const [isHidden, setHidden] = useState(false);
  const value = useMemo(() => ({ isHidden, setHidden }), [isHidden]);

  return <HeaderVisibilityContext.Provider value={value}>{children}</HeaderVisibilityContext.Provider>;
}

export function useHeaderVisibility(): HeaderVisibility {
  const context = useContext(HeaderVisibilityContext);
  if (!context) throw new Error("useHeaderVisibility must be used inside HeaderVisibilityProvider");
  return context;
}
