import { useRef } from "react"
import { useInView } from "motion/react"
import StatItem from "./ui/StatItem"
import { stats } from "../data/stats"

export default function StatsBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-20 lg:py-24">
      <div
        ref={ref}
        className="mx-auto grid max-w-content grid-cols-2 gap-8 border-y border-line/60 px-6 py-12 sm:grid-cols-4 lg:px-10"
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="text-center sm:text-left">
            <StatItem stat={stat} inView={inView} delay={i * 0.08} size="lg" />
          </div>
        ))}
      </div>
    </section>
  )
}
