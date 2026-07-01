import { motion } from "framer-motion";
import { Suspense, lazy } from "react";

const MiniNucleus = lazy(() => import("../3d/MiniNucleus"));

/**
 * SectionHeader
 * Used at the top of every major section. The MiniNucleus is the
 * recurring signature element that ties each section visually back
 * to the hero — a small "instrument reading" rather than a generic
 * numbered marker. Lazy-loaded so the Three.js chunk doesn't block
 * the initial paint of text-only sections.
 */
export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center flex flex-col items-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}
      >
        <Suspense fallback={<div className="w-10 h-10 rounded-full bg-nebula-mid/40" />}>
          <MiniNucleus size={40} />
        </Suspense>
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
        className="font-display text-3xl md:text-5xl font-medium text-mist tracking-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className={`text-mist-dim mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
