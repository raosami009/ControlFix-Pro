import { motion } from "motion/react"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors duration-300"

const variants = {
  primary:
    "gradient-accent gradient-accent-hover text-white px-7 py-3.5 text-[0.95rem] shadow-[0_10px_35px_-10px_rgba(138,43,226,0.7)]",
  secondary:
    "glass-panel text-white px-7 py-3.5 text-[0.95rem] hover:border-white/25",
  ghost: "text-text-muted hover:text-white px-0 py-0 text-[0.95rem]",
}

export default function Button({
  as = "a",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const Tag = motion[as] ?? motion.a

  return (
    <Tag
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: variant === "ghost" ? 1 : 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
    </Tag>
  )
}
