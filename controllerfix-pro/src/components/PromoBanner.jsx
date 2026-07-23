import { Sparkles } from "lucide-react"
import Reveal from "./ui/Reveal"
import Button from "./ui/Button"

export default function PromoBanner() {
  return (
    <section className="px-6 py-4 lg:px-10">
      <Reveal className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] border border-accent/30 bg-gradient-to-br from-accent/15 via-bg-panel to-accent-2/10 px-6 py-12 text-center sm:px-12 lg:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]"
        />
        <div className="relative">
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-2-soft">
            <Sparkles size={14} />
            Limited Time
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-heading text-[clamp(1.6rem,2.6vw+1rem,2.25rem)] font-bold text-white">
            Free Diagnostics With Every Repair
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-text-muted">
            Book this week and we&rsquo;ll assess every stick, trigger, and
            port at no extra charge — even if you only came in for one fix.
          </p>
          <div className="mt-7">
            <Button as="a" href="#contact" variant="primary">
              Book Your Repair
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
