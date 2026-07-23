import ReasonCard from './ReasonCard'
import reasons from '../data/reasons'
import aboutDetail from '../assets/images/controller-dark.jpg'
import aboutWorkshop from '../assets/images/controller-led.jpg'

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#3a2450] bg-gradient-to-br from-[#8a2be2]/10 to-[#10012a]/90 p-8 shadow-[0_20px_80px_rgba(16, 1, 42,0.35)] lg:p-12">
        <div className="mx-auto max-w-2xl text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a0f0]">About us</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#ffffff] sm:text-4xl">
            Why Gamers Choose ControllerFix Pro.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#9f99aa]">
            We focus exclusively on next-gen console controllers for ultimate expertise and dependable results.
          </p>

          <div className="mt-8 rounded-2xl border border-[#3a2450] bg-[#10012a]/70 p-5 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a0f0]">Built on diagnostics, not guesswork</p>
            <p className="mt-2 text-sm leading-7 text-[#9f99aa]">
              Specialized repair work, careful diagnostics, and a clear commitment to quality from start to finish.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-center">
          <ReasonCard reason={reasons[0]} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="overflow-hidden rounded-2xl border border-[#3a2450]">
              <img
                src={aboutDetail}
                alt="Black game controller on a dark studio background"
                className="h-48 w-full object-cover lg:h-56"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#3a2450]">
              <img
                src={aboutWorkshop}
                alt="Game controller close-up under colorful LED lighting"
                className="h-48 w-full object-cover lg:h-56"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {reasons.slice(1).map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
