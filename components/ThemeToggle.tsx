"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Changer de thème"
      title="Changer de thème"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-foreground"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-0 opacity-100" : "-rotate-90 translate-y-6 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? "rotate-90 -translate-y-6 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </button>
  );
}
