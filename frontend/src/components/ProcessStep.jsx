function ProcessStep({ step }) {
  return (
    <article className="group relative rounded-3xl border border-[#434655] bg-[#111827]/70 p-7 shadow-lg shadow-black/20 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#2563eb]/40 hover:bg-[#111827]/90">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2563eb]/15 text-lg font-semibold text-[#b4c5ff] ring-8 ring-[#0c1322]">
        {step.number}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-[#f9fafb] transition duration-300 group-hover:text-[#b4c5ff]">
        {step.title}
      </h3>
      <p className="mt-3 leading-7 text-[#c3c6d7]">{step.description}</p>
    </article>
  )
}

export default ProcessStep
