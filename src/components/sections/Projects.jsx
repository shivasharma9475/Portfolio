import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import { projects } from "../../data/projects";


export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-10 bg-void">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
  eyebrow="Featured Work"
  title="Turning ideas into impactful software."
  description="From MERN stack applications to AI-powered solutions and data analytics dashboards, each project reflects my passion for building scalable, efficient, and user-focused software."
/>

       <div className="grid md:grid-cols-2 gap-6">
  {projects.map((project) => (
    <TiltCard key={project.id} className="overflow-hidden group">
     <div className={`h-48 md:h-64 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        {project.poster && (
          <img
  src={project.poster}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
/>
        )}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <span className="absolute bottom-3 left-5 font-mono text-[11px] uppercase tracking-[0.15em] text-void/80 bg-mist/80 rounded-full px-3 py-1">
          {project.category}
        </span>
      </div>

      <div className="p-6 md:p-7">
        <h3 className="font-display text-xl md:text-2xl text-mist mb-2">
          {project.title}
        </h3>
        <p className="text-mist-dim text-sm md:text-base leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-mono px-2.5 py-1 rounded-full border border-mist/15 text-mist-dim"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-mist/10 pt-4">
          <div className="flex gap-6">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-lg text-amber">{m.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-wide text-mist-dim">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <a
            href={project.href}
            className="font-mono text-xs uppercase tracking-[0.1em] text-ion hover:text-amber transition-colors duration-200 whitespace-nowrap"
          >
            View →
          </a>
        </div>
      </div>
    </TiltCard>
  ))}
</div>
      </div>
    </section>
  );
}
