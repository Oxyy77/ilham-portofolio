import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Subtle ambient background: soft gradient blobs + faint animated circuit
// traces. The blobs also drift gently with the cursor (parallax) for a
// touch of life — kept low-opacity and decorative, never distracting.
function CircuitBackground() {
  const containerRef = useRef(null);
  const blobARef = useRef(null);
  const blobBRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const aX = gsap.quickTo(blobARef.current, "x", { duration: 0.9, ease: "power3.out" });
    const aY = gsap.quickTo(blobARef.current, "y", { duration: 0.9, ease: "power3.out" });
    const bX = gsap.quickTo(blobBRef.current, "x", { duration: 1.1, ease: "power3.out" });
    const bY = gsap.quickTo(blobBRef.current, "y", { duration: 1.1, ease: "power3.out" });

    const handleMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      aX(relX * 26);
      aY(relY * 26);
      bX(relX * -34);
      bY(relY * -34);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div ref={blobARef} className="absolute -top-24 -left-24 w-[420px] h-[420px]">
        <div
          className="drift absolute inset-0 rounded-full blur-[100px] opacity-20"
          style={{ background: "var(--signal)" }}
        />
      </div>
      <div ref={blobBRef} className="absolute top-1/3 right-[-120px] w-[360px] h-[360px]">
        <div
          className="drift absolute inset-0 rounded-full blur-[110px] opacity-[0.12]"
          style={{ background: "var(--copper)", animationDelay: "-6s" }}
        />
      </div>

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
