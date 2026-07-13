import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const RING_IDLE_SIZE = 30;
const HOVER_PADDING = 10;

// A precise dot that tracks the pointer exactly, plus a bracket-corner
// "target lock" reticule (echoing the bracket-frame motif used on the
// hero/photo) that snaps and resizes onto whatever is being hovered —
// like a camera focus lock or HUD selection. Shows a live x/y readout
// while idle, and a small ripple on click. Disabled on touch devices
// and respects prefers-reduced-motion.
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const coordRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const followDuration = reduceMotion ? 0 : 0.5;

    const ringLeft = gsap.quickTo(ring, "left", { duration: followDuration, ease: "power3.out" });
    const ringTop = gsap.quickTo(ring, "top", { duration: followDuration, ease: "power3.out" });
    const ringW = gsap.quickTo(ring, "width", { duration: reduceMotion ? 0 : 0.3, ease: "power3.out" });
    const ringH = gsap.quickTo(ring, "height", { duration: reduceMotion ? 0 : 0.3, ease: "power3.out" });

    let locked = false;

    const setVisible = (visible) => {
      dot?.classList.toggle("is-visible", visible);
      ring?.classList.toggle("is-visible", visible);
    };

    const handleMove = (e) => {
      setVisible(true);

      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
      if (coordRef.current) {
        coordRef.current.style.left = `${e.clientX}px`;
        coordRef.current.style.top = `${e.clientY}px`;
        coordRef.current.textContent = `${e.clientX}, ${e.clientY}`;
      }

      const interactive = e.target.closest?.(
        "a, button, [data-cursor-hover], input, textarea, select, [role='button'], summary"
      );

      if (interactive) {
        if (!locked) {
          locked = true;
          ring.classList.add("is-hovering");
        }
        const rect = interactive.getBoundingClientRect();
        ringLeft(rect.left - HOVER_PADDING);
        ringTop(rect.top - HOVER_PADDING);
        ringW(rect.width + HOVER_PADDING * 2);
        ringH(rect.height + HOVER_PADDING * 2);

        const label = interactive.dataset?.cursorLabel ?? "";
        if (labelRef.current && labelRef.current.textContent !== label) {
          labelRef.current.textContent = label;
        }
      } else {
        if (locked) {
          locked = false;
          ring.classList.remove("is-hovering");
        }
        ringLeft(e.clientX - RING_IDLE_SIZE / 2);
        ringTop(e.clientY - RING_IDLE_SIZE / 2);
        ringW(RING_IDLE_SIZE);
        ringH(RING_IDLE_SIZE);
      }
    };

    const handleDown = (e) => {
      const ripple = rippleRef.current;
      if (!ripple) return;
      gsap.killTweensOf(ripple);
      gsap.set(ripple, { left: e.clientX, top: e.clientY, opacity: 0.6, scale: 0 });
      gsap.to(ripple, { scale: 1, opacity: 0, duration: 0.55, ease: "power2.out" });
    };

    const handleLeaveWindow = (e) => {
      if (!e.relatedTarget) setVisible(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseout", handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseout", handleLeaveWindow);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <div className="cursor-ring-spin">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />
        </div>
        <span ref={labelRef} className="cursor-label" />
      </div>
      <span ref={coordRef} className="cursor-coord" aria-hidden="true" />
      <div ref={rippleRef} className="cursor-ripple" aria-hidden="true" />
    </>
  );
}

export default CustomCursor;
