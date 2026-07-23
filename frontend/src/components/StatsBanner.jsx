import stats from '../data/stats'

function StatsBanner() {
  return (
    <section className="border-t border-[#3a2450]/70 bg-[#270b39] px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="bg-gradient-to-br from-[#8a2be2] to-[#ff69b4] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#837e8c] sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBanner
