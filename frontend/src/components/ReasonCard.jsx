function ReasonCard({ reason }) {
  const Icon = reason.icon

  return (
    <article className="group rounded-2xl border border-[#434655] bg-[#0c1322]/70 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#2563eb]/40 hover:bg-[#111827]/80">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563eb]/10 text-[#2563eb]" aria-hidden="true">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#f9fafb] transition duration-300 group-hover:text-[#b4c5ff]">
        {reason.title}
      </h3>
      <p className="mt-3 leading-7 text-[#c3c6d7]">{reason.description}</p>
    </article>
  )
}

export default ReasonCard
