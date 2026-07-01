import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import SocialIcon from "../ui/SocialIcon";
import { profile } from "../../data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 bg-void">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="About"
          title="The engineer behind modern digital experiences."
        />

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1 md:order-1 ">
            {/* Photo — soft reveal: fades and settles into place on scroll */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 1.04 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />
            </motion.div>

            
          </div>

          <div className="md:col-span-2 space-y-5 md:order-2">
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-mist-dim text-base md:text-lg leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-panel rounded-2xl p-6"
            >
              <dl className="space-y-5">
                <div>
                  <dt className="eyebrow mb-1">Location</dt>
                  <dd className="text-mist text-sm">{profile.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Availability</dt>
                  <dd className="text-mist text-sm">{profile.availability}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-1">Email</dt>
                  <dd className="text-mist text-sm break-all">{profile.email}</dd>
                </div>
                <div>
                  <dt className="eyebrow mb-2">Elsewhere</dt>
                  <dd className="flex flex-wrap gap-2">
                    {profile.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-mist/20 text-mist-dim hover:text-ion hover:border-ion/40 transition-colors duration-200"
                      >
                        <SocialIcon icon={s.icon} className="w-3.5 h-3.5" />
                        {s.label}
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
