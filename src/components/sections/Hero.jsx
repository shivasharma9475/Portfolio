import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import Button from "../ui/Button";
import { profile } from "../../data/profile";

const HeroScene = lazy(() => import("../3d/HeroScene"));

/**
 * Hero
 * The thesis of the page: the nucleus, front and center, breathing
 * and rotating, with the headline content layered as an instrument
 * overlay rather than competing for the same visual space.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-nebula-gradient"
    >
      {/* 3D scene fills the viewport — decorative, hidden from assistive tech */}
      <div className="absolute inset-0" aria-hidden="true">
        <Suspense fallback={<div className="absolute inset-0 bg-nebula-gradient" />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Vignette to keep text legible over the scene */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/15 to-void pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_48%,rgba(6,8,15,0.72),transparent_72%)] pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="eyebrow mb-5"
        >
          {profile.role}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-mist max-w-4xl [text-shadow:0_2px_24px_rgba(6,8,15,0.8)]"
        >
          {profile.tagline.split(" ").map((word, i) =>
            word.toLowerCase() === "alive." ? (
              <span key={i} className="text-gradient-amber">
                {" "}
                {word}
              </span>
            ) : (
              <span key={i}> {word}</span>
            )
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-mist-dim text-base md:text-lg mt-6 max-w-xl"
        >
          {profile.name} — transforming ideas into modern web applications through full-stack development and intelligent software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10 pointer-events-auto"
        >
          <Button as="a" href="#projects" variant="solid">
            View Work
          </Button>
          <Button
  as="a"
  href={profile.resumeUrl}
  target="_blank"
  rel="noopener noreferrer"
  download
  variant="outline"
>
  Download Résumé
</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-dim">
          Scroll
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-ion to-transparent animate-pulse-slow" />
      </motion.div>
    </section>
  );
}
