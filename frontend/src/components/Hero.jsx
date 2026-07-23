import heroControllerImage from "../assets/images/hero-controller.jpg";
import stats from "../data/stats";

const heroStats = stats.slice(0, 3);

function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden px-6 py-16 sm:px-8 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(138, 43, 226,0.20),_transparent_45%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,_rgba(255, 105, 180,0.12),_transparent_50%)]" />

      {/* Full-bleed diagonal image panel (desktop only) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
        <img
          src={heroControllerImage}
          alt="PS5 controller illuminated against a dark background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10012a] via-[#10012a]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10012a]/70 via-transparent to-transparent" />

        <div className="pointer-events-auto absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-[#8a2be2]/20 bg-[#10012a]/80 p-4 backdrop-blur-sm">
          <div>
            <p className="text-sm text-[#837e8c]">Every repair includes</p>
            <h3 className="mt-1 text-lg font-semibold text-[#ffffff]">
              Full Parts & Labor Warranty
            </h3>
          </div>
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8a2be2] shadow-[0_0_10px_rgba(138, 43, 226,0.8)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-xl lg:max-w-lg">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#ff69b4]/40 bg-[#ff69b4]/10 px-3 py-1 text-sm font-medium text-[#f5a0ce]">
              Xbox Certified
            </span>

            <span className="rounded-full border border-[#3a2450] bg-white/5 px-3 py-1 text-sm text-[#9f99aa]">
              PS5 Specialist
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#ffffff] sm:text-5xl lg:text-6xl">
            Mississauga's PS5 & Xbox Controller Repair Specialists.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#9f99aa]">
            Stick drift, trigger fixes, button replacements, and more. Drop
            off locally in Mississauga or mail your controller from anywhere
            in Canada.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center rounded-full bg-gradient-to-br from-[#8a2be2] to-[#ff69b4] px-6 py-3 font-[Orbitron] font-semibold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(138, 43, 226,0.3)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              <span>Book Your Repair</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#3a2450] px-6 py-3 font-medium text-white transition duration-300 hover:border-[#8a2be2] hover:bg-[#8a2be2]/10"
            >
              Get a Free Quote
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-[#3a2450] pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="bg-gradient-to-br from-[#8a2be2] to-[#ff69b4] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#837e8c]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stacked image fallback (mobile/tablet) */}
        <div className="mt-12 lg:hidden">
          <div className="relative overflow-hidden rounded-[28px] border border-[#3a2450] shadow-[0_20px_80px_rgba(16, 1, 42,0.45)]">
            <img
              src={heroControllerImage}
              alt="PS5 controller illuminated against a dark background"
              className="aspect-video w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10012a]/70 via-transparent to-transparent" />

            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-[#8a2be2]/20 bg-[#10012a]/80 p-4 backdrop-blur-sm">
              <div>
                <p className="text-sm text-[#837e8c]">Every repair includes</p>
                <h3 className="mt-1 text-lg font-semibold text-[#ffffff]">
                  Full Parts & Labor Warranty
                </h3>
              </div>
              <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#8a2be2] shadow-[0_0_10px_rgba(138, 43, 226,0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
