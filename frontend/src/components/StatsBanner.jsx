import stats from '../data/stats'

function StatsBanner() {
  return (
    <section className="border-t border-[#434655]/70 bg-[#0d1117] px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-[#2563eb] sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8f95a8] sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBanner
