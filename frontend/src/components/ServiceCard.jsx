function ServiceCard({ service }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-slate-950/30 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/90">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-300">{service.description}</p>
      <div className="mt-6 border-t border-white/10 pt-4 text-sm font-medium text-cyan-300">
        Operational support
      </div>
    </article>
  )
}

export default ServiceCard
