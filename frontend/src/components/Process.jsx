import ProcessStep from './ProcessStep'
import processSteps from '../data/process'

function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-[#3a2450]/70 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a0f0]">Our process</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#ffffff] sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#9f99aa]">
            Getting your game back on track in three simple steps.
          </p>
        </div>

        <div className="relative mt-16 flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-6">
          <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-[#3a2450] via-[#3a2450]/60 to-transparent md:left-0 md:top-7 md:h-px md:w-full md:bg-none md:bg-[#3a2450]" />
          {processSteps.map((step) => (
            <ProcessStep key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
