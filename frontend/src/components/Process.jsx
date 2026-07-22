import ProcessStep from './ProcessStep'
import process from '../data/process'

function Process() {
  return (
    <section id="process" className="scroll-mt-02 border-t border-[#434655]/70 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Our process</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Getting your game back on track in three simple steps.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 md:block" />
          {process.map((step) => (
            <ProcessStep key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
