import { Star, Quote } from "lucide-react"
import Reveal from "./ui/Reveal"
import SectionHeading from "./ui/SectionHeading"
import { testimonials } from "../data/testimonials"

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading eyebrow="Reviews" title="What our customers say." />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.1}
              className="flex flex-col rounded-2xl border border-line/70 bg-bg-panel-soft/50 p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent-2-soft">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" />
                  ))}
                </div>
                <Quote size={22} className="text-line" />
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-line/70 pt-4">
                <p className="font-heading text-sm font-semibold text-white">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-text-faint">{t.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
