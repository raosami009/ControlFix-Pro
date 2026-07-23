import Reveal from "./Reveal"
import { useCountUp } from "../../hooks/useCountUp"

export default function StatItem({ stat, inView, delay = 0, size = "md" }) {
  const display = useCountUp(stat.value, {
    decimals: stat.decimals ?? 0,
    inView,
  })

  const valueSize =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
        ? "text-lg sm:text-xl"
        : "text-2xl sm:text-3xl"

  return (
    <Reveal delay={delay}>
      <p className={`whitespace-nowrap font-heading font-bold text-white ${valueSize}`}>
        {display}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
    </Reveal>
  )
}
