function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[#3a2d56] bg-[#241a3d]/70 p-7 shadow-lg shadow-black/20 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#8b5cf6]/40 hover:bg-[#241a3d]/90">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b5cf6]/10 text-[#8b5cf6]" aria-hidden="true">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[#f5f2fa]">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-[#9c93b0]">{service.description}</p>
      <div className="mt-6 border-t border-[#3a2d56] pt-4 text-sm font-medium text-[#b18cff]">
        Includes diagnostics & warranty
      </div>
    </article>
  )
}

export default ServiceCard
