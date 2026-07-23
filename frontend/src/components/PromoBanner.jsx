import heroControllerImage from '../assets/images/hero-controller.jpg'

function PromoBanner() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#8a2be2] via-[#c44acb] to-[#ff69b4] px-8 py-12 shadow-[0_20px_80px_rgba(138, 43, 226,0.25)] sm:px-12 lg:px-16">
        <img
          src={heroControllerImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30%] object-cover opacity-90 [mask-image:linear-gradient(to_right,transparent,black_30%)] lg:block"
        />

        <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="lg:max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Limited Time</p>
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Free Diagnostics With Every Repair
            </h2>
            <p className="mt-3 max-w-xl text-white/85">
              Book this week and we'll assess every stick, trigger, and port at no extra charge — even if you only came in for one fix.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center rounded-full bg-[#10012a] px-7 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#270b39]"
          >
            Book Your Repair
          </a>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
