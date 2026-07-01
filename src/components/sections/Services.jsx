import SectionHeader from "../ui/SectionHeader";
import TiltCard from "../ui/TiltCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-10 bg-void">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
  eyebrow="What I Do"
  title="Building software that makes an impact."
  description="From modern MERN stack applications to machine learning solutions and data analytics, I create reliable, scalable, and user-focused software tailored to real-world needs."
/>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <TiltCard key={service.id} className="p-7 md:p-8" glow={service.id === "02" ? "amber" : "ion"}>
              <span className="font-mono text-xs text-mist-dim">{service.id}</span>
              <h3 className="font-display text-2xl text-mist mt-3 mb-3">
                {service.title}
              </h3>
              <p className="text-mist-dim text-sm md:text-base leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-mist/15 text-ion"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
