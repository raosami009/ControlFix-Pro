import {
  Joystick,
  MoveVertical,
  CircleDot,
  Usb,
  BatteryCharging,
  Sparkles,
} from "lucide-react"
import Reveal from "./ui/Reveal"
import SectionHeading from "./ui/SectionHeading"
import { services, supportedDevices } from "../data/services"
import xboxOutline from "../assets/images/xbox-controller-outline.png"
import playstationOutline from "../assets/images/playstation-controller-outline.png"

const iconMap = {
  Joystick,
  MoveVertical,
  CircleDot,
  Usb,
  BatteryCharging,
  Sparkles,
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[22rem] w-[22rem] translate-x-1/4 translate-y-1/4 rounded-full bg-accent-2/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Every fix, one flat price."
          subtitle="Transparent, fixed pricing on every PS5 and Xbox controller repair — no surprise fees, no vague estimates."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, name, description, price, note }, i) => {
            const Icon = iconMap[icon]
            return (
              <Reveal
                key={name}
                delay={(i % 3) * 0.08}
                className="group glass-panel relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_15px_35px_-15px_rgba(138,43,226,0.55)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/20 text-accent-2-soft transition-colors duration-300 group-hover:bg-accent/30">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                  {name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {description}
                </p>
                {note && (
                  <p className="mt-3 text-xs leading-relaxed text-text-faint">
                    {note}
                  </p>
                )}
                <span className="mt-5 inline-flex w-fit items-center rounded-full border border-accent/30 bg-white/5 px-3.5 py-1.5">
                  <span className="font-heading text-sm font-bold text-gradient-fix">
                    {price}
                  </span>
                </span>
              </Reveal>
            )
          })}
        </div>

        <Reveal
          delay={0.1}
          className="glass-panel relative mt-16 overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-10"
        >
          <img
            src={xboxOutline}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rotate-[-15deg] opacity-20 sm:h-40 sm:w-40"
          />
          <img
            src={playstationOutline}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-8 h-32 w-32 rotate-[12deg] opacity-20 sm:h-40 sm:w-40"
          />

          <div className="relative z-10">
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent-2-soft">
              Consoles We Repair
            </span>
            <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2">
              {supportedDevices.map((device) => (
                <span
                  key={device}
                  className="rounded-full border border-line/80 px-3.5 py-1.5 text-xs font-medium text-text-muted"
                >
                  {device}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
