import Reveal from "./Reveal"

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center"

  return (
    <div className={`flex flex-col ${alignment} gap-4 ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent-2-soft">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="text-balance font-heading text-[clamp(1.9rem,3.2vw+1rem,2.75rem)] font-bold leading-[1.15] text-text">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="max-w-2xl text-balance text-[1.05rem] leading-relaxed text-text-muted">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
