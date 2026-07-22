function ProcessStep({ step }) {
  return (
    <div className="group flex gap-5 md:flex-col md:items-center md:gap-4 md:text-center">
      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-lg font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.35)] transition duration-300 group-hover:-translate-y-1">
        {step.number}
      </div>
      <div className="md:px-2">
        <h3 className="text-xl font-semibold text-[#f9fafb] transition duration-300 group-hover:text-[#b4c5ff]">
          {step.title}
        </h3>
        <p className="mt-3 leading-7 text-[#c3c6d7]">{step.description}</p>
      </div>
    </div>
  )
}

export default ProcessStep
