import { motion } from "motion/react"
import Reveal from "./ui/Reveal"
import SectionHeading from "./ui/SectionHeading"
import { processSteps } from "../data/process"

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="How It Works"
          title="From drop-off to delivered."
          subtitle="Three simple steps — whether you're across town in Mississauga or across the country."
        />

        <div className="relative mt-20 grid gap-12 lg:grid-cols-3 lg:gap-10">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-accent via-accent-2 to-accent lg:block"
          />

          {processSteps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 0.12}
              className="relative text-center lg:text-left"
            >
              <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-bg font-heading text-lg font-bold text-white lg:mx-0">
                {step.number}
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
