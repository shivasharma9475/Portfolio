import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { certifications, education } from "../../data/misc";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="relative py-24 md:py-32 px-6 md:px-10 bg-void-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & education."
        />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <h3 className="eyebrow mb-5">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-panel rounded-xl px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-mist text-sm md:text-base">{cert.title}</p>
                    <p className="text-mist-dim text-xs font-mono mt-1">{cert.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-amber whitespace-nowrap">
                    {cert.date}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="eyebrow mb-5">Education</h3>
            <ul className="space-y-3">
              {education.map((edu, i) => (
                <motion.li
                  key={edu.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-panel rounded-xl px-5 py-4"
                >
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <p className="text-mist text-sm md:text-base">{edu.degree}</p>
                    <span className="font-mono text-xs text-ion whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-mist-dim text-xs font-mono mb-2">{edu.institution}</p>
                  <p className="text-mist-dim text-sm leading-relaxed">{edu.detail}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
