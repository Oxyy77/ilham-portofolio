import { useEffect, useState } from "react";

const META_COLOR = { dark: "#0b0e14", light: "#f6f7f9" };

export function useTheme() {
  // The inline script in index.html already set this on <html> before
  // paint, so we just read it back rather than re-deciding here.
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", META_COLOR[theme]);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
