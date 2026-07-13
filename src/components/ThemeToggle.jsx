import { Sun, Moon } from "lucide-react";

function ThemeToggle({ theme, onToggle, className = "" }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      data-cursor-label={isDark ? "Light mode" : "Dark mode"}
      className={`inline-flex items-center justify-center w-8 h-8 rounded-md border border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--signal)] hover:border-[var(--border-strong)] transition-colors cursor-pointer ${className}`}
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

export default ThemeToggle;
