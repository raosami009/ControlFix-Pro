import trustBadges from '../data/trustBadges'

function TrustStrip() {
  return (
    <section className="border-y border-[#3a2d56]/70 bg-[#1b1030] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {trustBadges.map((badge) => {
          const Icon = badge.icon

          return (
            <div key={badge.label} className="flex items-center gap-2 text-[#665c7a] transition hover:text-[#b18cff]">
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-[0.1em]">{badge.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TrustStrip
