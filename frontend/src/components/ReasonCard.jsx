function ReasonCard({ reason }) {
  const Icon = reason.icon

  return (
    <article className="group rounded-2xl border border-[#3a2d56] bg-[#12091f]/70 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#8b5cf6]/40 hover:bg-[#241a3d]/80">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8b5cf6]/10 text-[#8b5cf6]" aria-hidden="true">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-[#f5f2fa] transition duration-300 group-hover:text-[#b18cff]">
        {reason.title}
      </h3>
      <p className="mt-3 leading-7 text-[#9c93b0]">{reason.description}</p>
    </article>
  )
}

export default ReasonCard
