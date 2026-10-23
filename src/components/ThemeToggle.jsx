import { useEffect, useState } from "react";

// Extension B: a persistent color theme.
// State holds the choice; an Effect syncs it to the <html> element and localStorage.
export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try {
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }, [dark]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-pressed={dark}
      onClick={() => setDark((d) => !d)}
    >
      Dark theme
    </button>
  );
}
