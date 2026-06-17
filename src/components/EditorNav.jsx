import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/lib/content";
import { useTheme } from "@/lib/useTheme";
import ThemeToggle from "@/components/ThemeToggle";

const TABS = [
  { id: "home", label: "hero.tsx" },
  { id: "about", label: "about.tsx" },
  { id: "skills", label: "skills.tsx" },
  { id: "projects", label: "projects.tsx" },
  { id: "contact", label: "contact.tsx" },
];

function EditorNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const nav = document.getElementById("editor-nav");

    const handleScroll = () => {
      if (window.scrollY > 24) {
        nav?.classList.add("scrolled");
      } else {
        nav?.classList.remove("scrolled");
      }
    };

    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const goTo = (id) => {
    setIsOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="editor-nav"
      className="fixed top-0 left-0 w-full z-50 px-3 pt-3 sm:px-6 sm:pt-4 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl rounded-xl border border-[var(--border-soft)] bg-[var(--chrome)] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-4 px-3 sm:px-4 h-14">
          {/* window dots */}
          <div className="hidden sm:flex items-center gap-1.5 pr-3 border-r border-[var(--border-soft)] shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
          </div>

          {/* logo, visible on mobile where dots are hidden */}
          <span className="font-display font-semibold text-[var(--text)] sm:hidden">
            {profile.name}.dev
          </span>

          {/* tabs */}
          <ul className="hidden md:flex items-stretch h-14 -mb-px overflow-x-auto">
            {TABS.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => goTo(tab.id)}
                  className={`relative h-14 px-4 flex items-center gap-2 font-mono text-[13px] whitespace-nowrap transition-colors cursor-pointer ${
                    active === tab.id
                      ? "text-[var(--text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      active === tab.id ? "bg-[var(--signal)]" : "bg-transparent"
                    }`}
                  />
                  {tab.label}
                  {active === tab.id && (
                    <span className="absolute left-2 right-2 -bottom-px h-[2px] bg-[var(--signal)] rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex-1" />

          <ThemeToggle theme={theme} onToggle={toggleTheme} className="shrink-0" />

          <a
            href={profile.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 font-mono text-[12px] text-[var(--copper)] border border-[var(--copper)]/30 bg-[var(--copper-dim)] rounded-md px-3 py-1.5 hover:bg-[var(--copper)]/20 transition-colors shrink-0"
          >
            <Download size={13} />
            resume.pdf
          </a>

          <button
            className="md:hidden text-[var(--text)] shrink-0"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* mobile quick-open list */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--border-soft)] px-2 py-2">
            <p className="font-mono text-[11px] text-[var(--text-faint)] px-2 pb-1">
              go to file
            </p>
            <ul className="flex flex-col">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => goTo(tab.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-md font-mono text-sm flex items-center gap-2 ${
                      active === tab.id
                        ? "bg-[var(--hover-bg)] text-[var(--text)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        active === tab.id ? "bg-[var(--signal)]" : "bg-transparent"
                      }`}
                    />
                    {tab.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="w-full text-left px-3 py-2.5 rounded-md font-mono text-sm flex items-center gap-2 text-[var(--copper)]"
                >
                  <Download size={14} />
                  resume.pdf
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default EditorNav;
