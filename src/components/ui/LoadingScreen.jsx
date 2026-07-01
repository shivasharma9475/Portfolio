import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Nucleus from "../3d/Nucleus";

/**
 * LoadingScreen
 * A brief, premium loading sequence: the nucleus assembles itself
 * while a progress readout ticks up. Auto-dismisses once the page
 * is ready, giving the first 3D paint time to warm up instead of
 * popping in abruptly.
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced motion: skip the animated sequence, dismiss almost immediately.
    const duration = prefersReducedMotion ? 200 : 1600;
    const start = performance.now();

    let frame;
    function tick() {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, prefersReducedMotion ? 0 : 250);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label={`Loading page, ${progress} percent complete`}
          className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-40 h-40 md:w-56 md:h-56" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 1.5]}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[2, 2, 2]} intensity={1.1} />
              <Nucleus
                radius={1}
                detail={4}
                blobScale={0.16}
                color="#3A2D6B"
                emissive="#F9B31C"
                emissiveIntensity={0.5}
                speed={2.2}
              />
            </Canvas>
          </div>

          <p className="font-mono text-xs tracking-[0.2em] uppercase text-ion mt-2">
            Initializing
          </p>
          <p className="font-mono text-2xl text-mist mt-1">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
