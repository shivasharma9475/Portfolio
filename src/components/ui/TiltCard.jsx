import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * TiltCard
 * A glass panel that tilts in 3D toward the cursor on hover and
 * glows faintly, like the nucleus catching light — the recurring
 * "instrument under glass" interaction used across project,
 * service, and testimonial cards.
 */
export default function TiltCard({ children, className = "", glow = "ion" }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const glowColor = glow === "amber" ? "rgba(249,179,28,0.18)" : "rgba(95,224,212,0.18)";

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 8;
    const rotateY = (x - 0.5) * 8;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, ${glowColor}, rgba(26,19,64,0.3) 60%)`,
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      background: "rgba(26,19,64,0.25)",
    });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`glass-panel rounded-2xl transition-[transform,background] duration-200 ease-out will-change-transform ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
