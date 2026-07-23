import stats from '../data/stats'

function StatsBanner() {
  return (
    <section className="border-t border-[#3a2d56]/70 bg-[#1b1030] px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="bg-gradient-to-r from-[#e93d9a] to-[#8b5cf6] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#665c7a] sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBanner
