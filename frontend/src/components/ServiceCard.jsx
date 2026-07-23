function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[#3a2450] bg-[#33124a]/70 p-7 shadow-lg shadow-black/20 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#8a2be2]/40 hover:bg-[#33124a]/90">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8a2be2]/10 text-[#8a2be2]" aria-hidden="true">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[#ffffff]">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-[#9f99aa]">{service.description}</p>
      <div className="mt-6 border-t border-[#3a2450] pt-4 text-sm font-medium text-[#c9a0f0]">
        Includes diagnostics & warranty
      </div>
    </article>
  )
}

export default ServiceCard
