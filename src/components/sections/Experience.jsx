import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-10 bg-void-soft">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
  eyebrow="Experience"
  title="From learning to building real-world solutions."
  description="Every project and internship has helped me grow as a software engineer, strengthening my expertise in full-stack development, artificial intelligence, and modern software engineering."
/>

        <div className="relative pl-8 md:pl-10">
          {/* Vertical spine — echoes the nucleus's energy with a faint glow */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-ion via-nebula-mid to-transparent" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[2.05rem] md:-left-[2.55rem] top-1.5 w-2.5 h-2.5 rounded-full bg-ion shadow-[0_0_12px_2px_rgba(95,224,212,0.6)]" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl md:text-2xl text-mist">
                    {job.role}{" "}
                    <span className="text-mist-dim font-body text-base">
                      · {job.company}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-amber whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-mist-dim mb-3">{job.location}</p>
                <p className="text-mist-dim text-sm md:text-base leading-relaxed mb-4">
                  {job.summary}
                </p>
                <ul className="space-y-1.5">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm text-mist flex gap-2">
                      <span className="text-ion mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
