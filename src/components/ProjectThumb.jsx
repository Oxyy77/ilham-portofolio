import { Globe, Smartphone, Cpu } from "lucide-react";

const KIND_ICON = { browser: Globe, phone: Smartphone, board: Cpu };
const KIND_LABEL = { browser: "web", phone: "mobile", board: "hardware" };

// A self-contained, code-themed placeholder thumbnail. Renders the same
// "window chrome" used elsewhere on the page so every project card reads
// as part of the same system, no screenshot assets required.
function ProjectThumb({ kind = "browser", accent = "signal", image }) {
  const Icon = KIND_ICON[kind] ?? Globe;
  const color = accent === "copper" ? "var(--copper)" : "var(--signal)";

  return (
    <div className="relative aspect-video overflow-hidden rounded-t-xl border-b border-[var(--border-soft)] bg-[var(--bg-soft)]">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-faint) 1px, transparent 1px), linear-gradient(90deg, var(--text-faint) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-25"
        style={{ background: color }}
      />

      <div className="relative flex items-center gap-2 px-3 py-2 border-b border-[var(--border-soft)] bg-[var(--tint-bg)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
        <span className="ml-2 font-mono text-[10px] text-[var(--text-faint)] border border-[var(--border-soft)] rounded px-1.5 py-0.5">
          {KIND_LABEL[kind]}
        </span>
      </div>

      <div className="relative h-[calc(100%-29px)] w-full overflow-hidden flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Icon size={34} strokeWidth={1.4} style={{ color }} className="opacity-80" />
        )}
      </div>
    </div>
  );
}

export default ProjectThumb;
