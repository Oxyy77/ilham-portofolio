// Subtle ambient background: soft gradient blobs + faint animated circuit
// traces. Kept low-opacity and decorative — purely atmosphere, not content.
function CircuitBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="drift absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-[100px] opacity-20"
        style={{ background: "var(--signal)" }}
      />
      <div
        className="drift absolute top-1/3 right-[-120px] w-[360px] h-[360px] rounded-full blur-[110px] opacity-[0.12]"
        style={{ background: "var(--copper)", animationDelay: "-6s" }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="trace-flow"
          d="M-20 120 H280 V40 H620"
          stroke="var(--signal)"
          strokeWidth="1.5"
        />
        <path
          className="trace-flow"
          d="M1220 540 H860 V620 H420 V560"
          stroke="var(--copper)"
          strokeWidth="1.5"
          style={{ animationDelay: "-4s" }}
        />
        <path
          className="trace-flow"
          d="M-20 480 H180 V560 H500"
          stroke="var(--signal)"
          strokeWidth="1.5"
          style={{ animationDelay: "-9s" }}
        />
        <circle cx="620" cy="40" r="3.5" fill="var(--signal)" />
        <circle cx="280" cy="120" r="3.5" fill="var(--signal)" />
        <circle cx="500" cy="560" r="3.5" fill="var(--signal)" />
        <circle cx="420" cy="560" r="3.5" fill="var(--copper)" />
      </svg>
    </div>
  );
}

export default CircuitBackground;
