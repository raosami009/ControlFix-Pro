function ProcessStep({ step }) {
  return (
    <div className="group flex gap-5 md:flex-col md:items-center md:gap-4 md:text-center">
      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e93d9a] to-[#8b5cf6] text-lg font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] transition duration-300 group-hover:-translate-y-1">
        {step.number}
      </div>
      <div className="md:px-2">
        <h3 className="text-xl font-semibold text-[#f5f2fa] transition duration-300 group-hover:text-[#b18cff]">
          {step.title}
        </h3>
        <p className="mt-3 leading-7 text-[#9c93b0]">{step.description}</p>
      </div>
    </div>
  )
}

export default ProcessStep
