import glowController from '../assets/images/glow-controller.jpg'

function FeelItBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
        <img
          src={glowController}
          alt="Controller glowing under neon light after repair"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12091f]/90 via-[#12091f]/40 to-[#12091f]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_35%,_#12091f_100%)]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b18cff]">Feel It Now</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#f5f2fa] sm:text-5xl">
            Like New, Every Time.
          </h2>
          <p className="mt-4 max-w-lg text-lg text-[#9c93b0]">
            Precision-tuned sticks, crisp triggers, and a clean shell — repaired to feel exactly like it did on day one.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeelItBanner
