function ReasonCard({ reason }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/80">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl" aria-hidden="true">
        {reason.icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white transition duration-300 group-hover:text-cyan-300">
        {reason.title}
      </h3>
      <p className="mt-3 leading-7 text-slate-300">{reason.description}</p>
    </article>
  )
}

export default ReasonCard
