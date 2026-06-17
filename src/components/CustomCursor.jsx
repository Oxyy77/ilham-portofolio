import { useEffect, useRef } from "react";

// A small dot tracks the pointer exactly; a trailing "reticule" (four
// corner brackets, echoing the bracket-frame used on the hero/photo)
// eases toward it and snaps wider + recolors over clickable elements.
// Disabled entirely on touch/coarse-pointer devices.
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let hovering = false;
    let rafId;

    const setVisible = (visible) => {
      dotRef.current?.classList.toggle("is-visible", visible);
      ringRef.current?.classList.toggle("is-visible", visible);
    };

    const handleMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const interactive = e.target.closest?.(
        "a, button, [data-cursor-hover], input, textarea, select, [role='button'], summary"
      );
      const nowHovering = Boolean(interactive);

      if (nowHovering !== hovering) {
        hovering = nowHovering;
        ringRef.current?.classList.toggle("is-hovering", hovering);
      }

      if (labelRef.current) {
        const label = interactive?.dataset?.cursorLabel ?? "";
        if (labelRef.current.textContent !== label) {
          labelRef.current.textContent = label;
        }
      }
    };

    const handleLeaveWindow = (e) => {
      if (!e.relatedTarget) setVisible(false);
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeaveWindow);
    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeaveWindow);
      cancelAnimationFrame(rafId);
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
    </>
  );
}

export default CustomCursor;
