import trustBadges from '../data/trustBadges'

function TrustStrip() {
  return (
    <section className="border-y border-[#3a2450]/70 bg-[#270b39] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center divide-x divide-[#3a2450] gap-y-4">
        {trustBadges.map((badge) => {
          const Icon = badge.icon

          return (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-6 text-[#837e8c] opacity-70 grayscale transition duration-300 first:pl-0 last:pr-0 hover:opacity-100 hover:grayscale-0 hover:text-[#c9a0f0]"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">{badge.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TrustStrip
