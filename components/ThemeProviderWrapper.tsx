"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  // Fix hydration issues by only rendering the ThemeProvider after mounting
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a simple wrapper during SSR to avoid hydration mismatch
    return <>{children}</>;
  }

  return (
    // @ts-ignore - ThemeProvider works with children at runtime despite type error
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
