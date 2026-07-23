function ReasonCard({ reason }) {
  const Icon = reason.icon

  return (
    <article className="group rounded-2xl border border-[#3a2450] bg-[#10012a]/70 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#8a2be2]/40 hover:bg-[#33124a]/80">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8a2be2]/10 text-[#8a2be2]" aria-hidden="true">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#ffffff] transition duration-300 group-hover:text-[#c9a0f0]">
        {reason.title}
      </h3>
      <p className="mt-3 leading-7 text-[#9f99aa]">{reason.description}</p>
    </article>
  )
}

export default ReasonCard
