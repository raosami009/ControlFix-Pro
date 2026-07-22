function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[#434655] bg-[#111827]/70 p-7 shadow-lg shadow-black/20 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#2563eb]/40 hover:bg-[#111827]/90">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb]" aria-hidden="true">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[#f9fafb]">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-[#c3c6d7]">{service.description}</p>
      <div className="mt-6 border-t border-[#434655] pt-4 text-sm font-medium text-[#b4c5ff]">
        Includes diagnostics & warranty
      </div>
    </article>
  )
}

export default ServiceCard
