import ReasonCard from './ReasonCard'
import reasons from '../data/reasons'
import aboutDetail from '../assets/images/controller-dark.jpg'
import aboutWorkshop from '../assets/images/controller-led.jpg'

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#3a2d56] bg-gradient-to-br from-[#8b5cf6]/10 to-[#12091f]/90 p-8 shadow-[0_20px_80px_rgba(18,9,31,0.35)] lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b18cff]">About us</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f5f2fa] sm:text-4xl">
              Why Gamers Choose ControlFix Pro.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#9c93b0]">
              We focus exclusively on next-gen console controllers for ultimate expertise and dependable results.
            </p>

            <div className="mt-8 rounded-2xl border border-[#3a2d56] bg-[#12091f]/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b18cff]">Built on diagnostics, not guesswork</p>
              <p className="mt-2 text-sm leading-7 text-[#9c93b0]">
                Specialized repair work, careful diagnostics, and a clear commitment to quality from start to finish.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-[#3a2d56]">
                <img
                  src={aboutDetail}
                  alt="Black game controller on a dark studio background"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#3a2d56]">
                <img
                  src={aboutWorkshop}
                  alt="Game controller close-up under colorful LED lighting"
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
