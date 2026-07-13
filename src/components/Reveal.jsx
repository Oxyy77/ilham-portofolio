import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

// Wraps content and fades/slides it in once it scrolls into view.
// Pass `stagger` to animate the wrapper's direct children individually
// (e.g. a grid of cards) instead of the wrapper as a single block.
function Reveal({
  children,
  as: Tag = "div",
  className = "",
  stagger = 0,
  x = 0,
  y = x ? 0 : 28,
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(stagger ? el.children : el, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const targets = stagger ? el.children : el;

    const tween = gsap.from(targets, {
      x,
      y,
      opacity: 0,
      duration: 0.7,
      delay,
      ease: "power3.out",
      stagger: stagger || 0,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

export default Reveal;
