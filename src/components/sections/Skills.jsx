import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "../../data/skills";

const accentMap = {
  amber: { bar: "bg-amber", text: "text-amber" },
  ion: { bar: "bg-ion", text: "text-ion" },
  mist: { bar: "bg-mist", text: "text-mist" },
};

function SkillBar({ name, level, accent }) {
  const a = accentMap[accent];
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-mist text-sm">{name}</span>
        <span className={`font-mono text-xs ${a.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-mist/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`h-full rounded-full ${a.bar}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10 bg-void-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
  eyebrow="Core Expertise"
  title="Building full-stack applications with modern technologies."
  description="Experienced in MERN Stack development, Python, machine learning, SQL databases, REST APIs, and data visualization tools to create scalable and impactful software solutions."
/>

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-panel rounded-2xl p-6 md:p-7 space-y-6"
            >
              <h3 className="font-display text-lg text-mist">{group.label}</h3>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} accent={group.accent} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
