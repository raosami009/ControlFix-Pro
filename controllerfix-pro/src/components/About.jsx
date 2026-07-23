import { Crosshair, Zap, ReceiptText, Microscope } from "lucide-react"
import Reveal from "./ui/Reveal"
import SectionHeading from "./ui/SectionHeading"
import handsImage from "../assets/images/hands-holding-controller.png"

const reasons = [
  {
    icon: Crosshair,
    title: "Specialized PS5/Xbox",
    description:
      "We focus exclusively on next-gen console controllers — not a general electronics shop.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "1-2 business days for local drop-off, 2-4 for mail-in — repaired, not queued for weeks.",
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    description:
      "Fixed, published prices for every repair — you know the cost before you book.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-content items-center gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-accent/15 blur-[80px]"
          />
          <img
            src={handsImage}
            alt="Hands holding a repaired game controller"
            className="relative z-10 w-full"
          />
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Why gamers choose ControllerFix Pro."
            subtitle="We focus exclusively on next-gen console controllers for ultimate expertise and dependable results."
          />

          <Reveal
            delay={0.15}
            className="glass-panel mt-8 flex items-center gap-3 rounded-2xl p-5"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-2-soft">
              <Microscope size={19} />
            </span>
            <p className="font-heading text-sm font-semibold text-white sm:text-base">
              Built on diagnostics, not guesswork.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <Reveal
                key={title}
                delay={0.2 + i * 0.08}
                className="rounded-2xl border border-line/70 p-5"
              >
                <Icon size={19} className="text-accent-2-soft" />
                <h3 className="mt-3 font-heading text-sm font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                  {description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
