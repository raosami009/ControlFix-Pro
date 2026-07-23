function PromoBanner() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-[#e93d9a] via-[#b34fc0] to-[#8b5cf6] px-8 py-12 shadow-[0_20px_80px_rgba(139,92,246,0.25)] sm:px-12 lg:px-16">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div>
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
            className="inline-flex shrink-0 items-center rounded-full bg-[#12091f] px-7 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1b1030]"
          >
            Book Your Repair
          </a>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
