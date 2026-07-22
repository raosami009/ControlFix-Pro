function ProcessStep({ step }) {
  return (
    <article className="group relative rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-slate-950/30 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/90">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/15 text-lg font-semibold text-cyan-300 ring-8 ring-slate-950/60">
        {step.number}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white transition duration-300 group-hover:text-cyan-300">
        {step.title}
      </h3>
      <p className="mt-3 leading-7 text-slate-300">{step.description}</p>
    </article>
  )
}

export default ProcessStep
