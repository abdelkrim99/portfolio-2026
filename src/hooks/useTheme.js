import { useEffect, useState } from "react";

const KEY = "currentMode";

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem(KEY) ?? "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
