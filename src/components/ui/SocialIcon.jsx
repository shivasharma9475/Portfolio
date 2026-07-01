import { FaGithub, FaLinkedinIn, FaXTwitter, FaDribbble } from "react-icons/fa6";

const ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  dribbble: FaDribbble,
};

/**
 * SocialIcon
 * Renders the brand icon for a social link key (see data/profile.js).
 * Falls back to rendering nothing if the key is unrecognized, so
 * adding a new social later without an icon doesn't break the layout.
 */
export default function SocialIcon({ icon, className = "" }) {
  const Icon = ICONS[icon];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden="true" />;
}
