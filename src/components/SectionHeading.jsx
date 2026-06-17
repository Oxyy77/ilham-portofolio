// Shared section heading: a mono "comment" eyebrow above a display title.
// The eyebrow labels mirror the file names used in the editor-tab nav.
function SectionHeading({ eyebrow, title, accentWord, align = "left" }) {
  const words = title.split(" ");

  return (
    <div className={`mb-10 sm:mb-12 ${align === "center" ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-2 mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="w-6 h-px bg-[var(--signal)]" />
        <p className="font-mono text-[12px] tracking-wide text-[var(--text-muted)]">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[var(--text)]">
        {words.map((word, i) => (
          <span
            key={i}
            style={word === accentWord ? { color: "var(--signal)" } : undefined}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default SectionHeading;
