import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { ArrowRight, ShieldCheck } from "lucide-react"
import Reveal from "./ui/Reveal"
import Button from "./ui/Button"
import StatItem from "./ui/StatItem"
import { stats } from "../data/stats"
import iconMark from "../assets/brand/icon-mark-transparent.png"
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
          <Reveal className="flex items-center gap-2.5">
            <img src={iconMark} alt="" className="h-7 w-7" />
            <span className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white">
              Controller<span className="text-gradient-fix">Fix</span> Pro
            </span>
          </Reveal>

          <Reveal delay={0.08} className="mt-5 flex flex-wrap gap-3">
            {["Xbox Certified", "PS5 Specialist"].map((badge) => (
              <span
                key={badge}
                className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-2-soft" />
                {badge}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.16} className="mt-7 flex gap-4">
            <span
              aria-hidden
              className="mt-1.5 h-auto w-[3px] shrink-0 rounded-full bg-gradient-to-b from-accent to-accent-2"
            />
            <h1 className="text-balance font-heading text-[clamp(2.3rem,4vw+1rem,3.3rem)] font-extrabold leading-[1.1] text-white">
              PS5 &amp; Xbox Repair,
              <br />
              Done Right.
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-text-muted">
              Stick drift, triggers, ports, and more — fixed fast, with a
              90-day warranty. Drop off in Mississauga or mail in from
              anywhere in Canada.
            </p>
          </Reveal>

          <Reveal delay={0.32} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
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

          <div ref={statsRef} className="mt-14 grid max-w-md grid-cols-3 gap-3">
            {stats.slice(0, 3).map((stat, i) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-line/70 px-3.5 py-4"
              >
                <StatItem stat={stat} inView={inView} delay={i * 0.08} />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Reveal delay={0.2} y={32} className="relative z-10">
            <motion.img
              src={heroImage}
              alt="PS5 controller floating, freshly repaired"
              className="w-full drop-shadow-[0_35px_60px_rgba(76,111,255,0.25)]"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              width={1100}
              height={618}
            />
          </Reveal>

          <Reveal
            delay={0.55}
            y={16}
            className="glass-panel absolute -bottom-2 -left-6 z-20 flex max-w-[15rem] items-start gap-3 rounded-2xl p-4 sm:-left-10"
          >
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/20 text-accent-2-soft">
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
