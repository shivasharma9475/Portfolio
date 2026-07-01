import { profile } from "../../data/profile";
import SocialIcon from "../ui/SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-mist/10 bg-void px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mist-dim">
          © {year} {profile.name}. Built with React, Three.js & Framer Motion.
        </p>
        <div className="flex items-center gap-5">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-mist-dim hover:text-ion transition-colors"
            >
              <SocialIcon icon={s.icon} className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
