import { motion } from "motion/react"

const EASE = [0.16, 1, 0.3, 1]

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  duration = 0.65,
  as = "div",
  once = true,
  amount = 0.25,
  className,
  ...props
}) {
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
