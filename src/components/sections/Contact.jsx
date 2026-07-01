import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import SocialIcon from "../ui/SocialIcon";
import { profile } from "../../data/profile";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
  e.preventDefault();

  setStatus("sending");

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xnnzkkqr", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  } catch (error) {
    setStatus("error");
  }
}

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10 bg-void">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Contact"
          title="Have a project worth building well?"
          description="I take on a small number of engagements at a time. Tell me what you're working on and I'll reply within two business days."
        />

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <p className="eyebrow mb-1">Email</p>
              <a href={`mailto:${profile.email}`} className="text-mist text-lg hover:text-ion transition-colors">
                {profile.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-1">Based in</p>
              <p className="text-mist text-lg">{profile.location}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Find me elsewhere</p>
              <div className="flex flex-wrap gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-instrument text-[11px] px-4 py-2 flex items-center gap-2"
                  >
                    <SocialIcon icon={s.icon} className="w-3.5 h-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-panel rounded-2xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="eyebrow block mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-mist/20 rounded-lg px-4 py-3 text-mist text-sm focus:border-ion outline-none transition-colors"
                placeholder="Jordan Reyes"
              />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow block mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-mist/20 rounded-lg px-4 py-3 text-mist text-sm focus:border-ion outline-none transition-colors"
                placeholder="jordan@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="eyebrow block mb-2">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-mist/20 rounded-lg px-4 py-3 text-mist text-sm focus:border-ion outline-none transition-colors resize-none"
                placeholder="What are you building, and what would success look like?"
              />
            </div>

            <Button type="submit" variant="solid" disabled={status === "sending"} className="w-full">
              {status === "sent" ? "Message sent" : status === "sending" ? "Sending…" : "Send message"}
            </Button>

            {status === "sent" && (
              <p className="text-ion text-xs font-mono text-center">
                Got it — I'll be in touch soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
