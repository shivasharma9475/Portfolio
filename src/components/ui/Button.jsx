/**
 * Button
 * Direct extension of the source page's pill-shaped, uppercase,
 * border-only buttons (e.g. "Go Fullscreen"). `variant="solid"`
 * is used sparingly for primary CTAs only.
 */
export default function Button({
  as: Component = "button",
  variant = "outline",
  children,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-mono text-xs md:text-sm tracking-[0.1em] uppercase px-6 py-3 transition-all duration-300 cursor-pointer";

  const variants = {
    outline:
      "border border-mist/30 text-amber bg-transparent hover:bg-amber hover:text-void hover:border-amber",
    solid: "bg-amber text-void border border-amber hover:bg-amber-dim hover:border-amber-dim",
    ghost: "border border-transparent text-mist hover:text-ion",
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
