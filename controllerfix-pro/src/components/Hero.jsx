import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ArrowRight, ShieldCheck } from "lucide-react"
import Reveal from "./ui/Reveal"
import Button from "./ui/Button"
import StatItem from "./ui/StatItem"
import { stats } from "../data/stats"
import heroImage from "../assets/images/dualsense-controller-front.png"

export default function Hero() {
  const statsRef = useRef(null)
  const inView = useInView(statsRef, { once: true, amount: 0.6 })

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-24 pt-32 lg:pb-32 lg:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[26rem] w-[26rem] translate-x-1/3 rounded-full bg-accent-2/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <div>
          <Reveal>
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Controller<span className="text-gradient-fix">Fix</span> Pro
            </span>
          </Reveal>

          <Reveal delay={0.14} className="mt-3 flex gap-4">
            <span
              aria-hidden
              className="mt-1.5 h-auto w-[3px] shrink-0 rounded-full bg-gradient-to-b from-accent to-accent-2"
            />
            <h1 className="text-balance font-heading text-[clamp(2.3rem,4vw+1rem,3.3rem)] font-extrabold leading-[1.1] text-white">
              PS5 &amp; Xbox Repair,
              <br />
              <span className="text-gradient-fix">Done Right.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-text-muted">
              Stick drift, triggers, ports, and more — fixed fast, with a
              90-day warranty. Drop off in Mississauga or mail in from
              anywhere in Canada.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button as="a" href="#contact" variant="primary">
              Book Your Repair
            </Button>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Get a Free Quote
              <ArrowRight
                size={16}
                className="text-accent-2-soft transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          <div ref={statsRef} className="mt-14 grid grid-cols-3 gap-4">
            {stats.slice(0, 3).map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line/70 px-4 py-4"
              >
                <StatItem stat={stat} inView={inView} delay={i * 0.08} size="sm" />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <Reveal delay={0.2} y={32}>
            <motion.img
              src={heroImage}
              alt="PS5 controller floating, freshly repaired"
              className="w-full drop-shadow-[0_35px_60px_rgba(76,111,255,0.25)]"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              width={1065}
              height={750}
            />
          </Reveal>

          <Reveal
            delay={0.4}
            className="glass-panel mx-auto mt-6 flex max-w-xs items-center gap-3 rounded-2xl p-4 lg:mx-0"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/20 text-accent-2-soft">
              <ShieldCheck size={18} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-text-faint">
                Every repair includes
              </span>
              <span className="block font-heading text-sm font-semibold text-white">
                Full Parts &amp; Labor Warranty
              </span>
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
