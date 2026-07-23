import Reveal from "./ui/Reveal"
import bannerImage from "../assets/images/moody-controllers-glow.jpg"

export default function FeelItBanner() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <img
        src={bannerImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40" />
      <div className="absolute inset-0 bg-bg/30" />

      <div className="relative mx-auto max-w-content px-6 text-center lg:px-10">
        <Reveal>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.35em] text-accent-2-soft">
            Feel It Now
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-heading text-[clamp(2.2rem,4vw+1rem,3.4rem)] font-extrabold leading-[1.1] text-white">
            Like New, Every Time.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-text-muted">
            Precision-tuned sticks, crisp triggers, and a clean shell —
            repaired to feel exactly like it did on day one.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
