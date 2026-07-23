import highlights from '../data/highlights'

function Highlights() {
  return (
    <section className="px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2">
        {highlights.map((highlight) => {
          const Icon = highlight.icon

          return (
            <article
              key={highlight.title}
              className="group flex items-start gap-4 rounded-2xl border border-[#3a2450] bg-[#270b39]/60 p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#8a2be2]/40 hover:bg-[#33124a]/80"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#8a2be2]/10 text-[#8a2be2]" aria-hidden="true">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#ffffff] transition duration-300 group-hover:text-[#c9a0f0]">
                  {highlight.title}
                </h3>
                <p className="mt-2 leading-7 text-[#9f99aa]">{highlight.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Highlights
