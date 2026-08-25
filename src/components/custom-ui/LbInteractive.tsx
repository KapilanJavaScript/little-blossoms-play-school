import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ReactLenis } from "lenis/react";

/** Smooth scrolling wrapper (Lenis). SSR-safe: only affects motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <ReactLenis root options={{ lerp: 0.09, smoothWheel: true }}>{children}</ReactLenis>;
}

/** Thin top progress hairline driven by document scroll. */
export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="lb-progress"
      style={{ scaleX }}
    />
  );
}

/**
 * Transform-only entrance reveal. Safe for screenshot gates: opacity is never
 * animated to 0, only a translate/scale/soft-blur shift that resolves on
 * scroll. Reduced-motion renders a plain static node.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: "div" | "section";
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (reduced || !mounted) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const initial = { y: 26, scale: 0.985, filter: "blur(4px)" };
  const visible = { y: 0, scale: 1, filter: "blur(0px)" };

  const Tag = as;
  return (
    <Tag ref={ref} className={className}>
      <motion.div
        initial={initial}
        whileInView={visible}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className="lb-reveal"
      >
        {children}
      </motion.div>
    </Tag>
  );
}