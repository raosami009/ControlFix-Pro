import { Truck, ShieldCheck, Lock, Headset } from "lucide-react"
import Reveal from "./ui/Reveal"

const highlights = [
  {
    icon: Truck,
    title: "Local Drop-Off or Mail-In",
    description:
      "Bring it to our Mississauga location, or ship it in from anywhere in Canada with a prepaid label.",
  },
  {
    icon: ShieldCheck,
    title: "90-Day Warranty",
    description:
      "Every repair is backed by a 90-day parts and labor warranty — no fine print.",
  },
  {
    icon: Lock,
    title: "Secure Booking",
    description:
      "Book your slot or mail-in request free — you only pay once your repair is confirmed. No upfront payment.",
  },
  {
    icon: Headset,
    title: "Real Human Support",
    description:
      "Talk to an actual technician about your issue — no bots, no scripts, no runaround.",
  },
]

export default function Highlights() {
  return (
    <section className="relative border-y border-line/60 bg-bg-panel/40">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="glass-panel rounded-2xl p-6 transition-colors duration-300 hover:border-white/20"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent-2-soft">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
