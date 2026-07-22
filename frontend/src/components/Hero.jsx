import { Bolt, ShieldCheck, Package, MapPin } from "lucide-react";

const trustIndicators = [
  {
    icon: Bolt,
    title: "Fast Turnaround",
  },
  {
    icon: ShieldCheck,
    title: "Repair Warranty",
  },
  {
    icon: Package,
    title: "Mail-In Canada-Wide",
  },
  {
    icon: MapPin,
    title: "Mississauga Drop-Off",
  },
];

const dashboardMetrics = [
  {
    label: "Controllers",
    value: "PS5 & Xbox",
  },
  {
    label: "Repairs",
    value: "Stick Drift • Triggers • Buttons",
  },
  {
    label: "Service",
    value: "Mail-In & Local Drop-Off",
  },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative -scroll-mt-28 overflow-hidden px-6 py-20 sm:px-8 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_45%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(circle,_rgba(37,99,235,0.14),_transparent_65%)] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#2563eb]/40 bg-[#2563eb]/10 px-3 py-1 text-sm font-medium text-[#b4c5ff]">
              Xbox Certified
            </span>

            <span className="rounded-full border border-[#434655] bg-white/5 px-3 py-1 text-sm text-[#c3c6d7]">
              PS5 Specialist
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#f9fafb] sm:text-5xl lg:text-6xl">
            Mississauga's PS5 & Xbox Controller Repair Specialists.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#c3c6d7]">
            Stick drift, trigger fixes, button replacements, and more. Drop
            off locally in Mississauga or mail your controller from anywhere
            in Canada.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center rounded-full bg-[#2563eb] px-6 py-3 font-medium text-white shadow-[0_0_30px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              <span>Book Your Repair</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#434655] px-6 py-3 font-medium text-white transition duration-300 hover:border-[#2563eb] hover:bg-[#2563eb]/10"
            >
              Get a Free Quote
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-[#434655] pt-6">
            {trustIndicators.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-2 rounded-full border border-[#434655] bg-white/5 px-4 py-2"
                >
                  <Icon className="h-4 w-4 text-[#2563eb]" />

                  <span className="text-sm text-[#dce2f7]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#434655] bg-[#111827]/80 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-sm sm:p-8">
          <div className="rounded-[24px] border border-[#2563eb]/20 bg-[#0c1322]/90 p-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b4c5ff]">
                Repair Snapshot
              </p>

              <p className="mt-1 text-sm text-[#8f95a8]">
                Controller Repair Services
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {dashboardMetrics.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-[#434655] bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-[#c3c6d7]">
                    {item.label}
                  </span>

                  <span className="rounded-full bg-[#2563eb]/10 px-3 py-1 text-sm font-medium text-[#b4c5ff]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

                                    <a
                        href="#contact"
                        className="mt-6 flex items-center justify-between rounded-2xl border border-[#2563eb]/20 bg-gradient-to-r from-[#2563eb]/10 via-[#111827]/60 to-[#111827]/80 p-4 transition duration-300 hover:border-[#2563eb]/50 hover:bg-[#2563eb]/10"
                        >
                        <div>
                            <p className="text-sm text-[#8f95a8]">
                            Not sure what's wrong?
                            </p>

                            <h3 className="mt-1 text-lg font-semibold text-[#f9fafb]">
                            Request Your Free Quote
                            </h3>
                        </div>

                        <span className="text-2xl font-semibold text-[#2563eb]">
                            →
                        </span>
                        </a>

                <div className="h-2.5 w-2.5 rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
              </div>
            </div>
        </div>
        </section>
    );
    }

export default Hero;