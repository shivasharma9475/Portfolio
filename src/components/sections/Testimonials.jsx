import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { testimonials } from "../../data/misc";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-10 bg-void-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Word of mouth"
          title="What it's like to work together."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-2xl p-7 flex flex-col"
            >
              <span className="text-amber text-3xl font-display leading-none mb-3">
                "
              </span>
              <blockquote className="text-mist text-sm md:text-base leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-mist/10">
                <p className="text-mist text-sm font-medium">{t.name}</p>
                <p className="text-mist-dim text-xs font-mono mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
