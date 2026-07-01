import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { achievements } from "../../data/misc";

function StatValue({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  // Pull out a leading integer to animate; keep any suffix (+, %, etc.) static.
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView || numeric === null) {
      if (numeric === null) setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();

    function tick() {
      const elapsed = performance.now() - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric).toString());
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, numeric, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 px-6 md:px-10 bg-void">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="By the numbers"
          title="A quick instrument reading."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel rounded-2xl py-10 px-4 text-center"
            >
              <div className="font-display text-4xl md:text-5xl text-gradient-amber font-medium">
                <StatValue value={a.value} />
              </div>
              <p className="font-mono text-xs uppercase tracking-wide text-mist-dim mt-3">
                {a.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
