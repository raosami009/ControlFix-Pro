import neonSetup from '../assets/images/neon-setup.jpg'

function Newsletter() {
  return (
    <section className="border-t border-[#3a2450]/70 bg-[#270b39] px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#3a2450] bg-[#33124a]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a0f0]">Stay in the loop</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#ffffff] sm:text-4xl">
              Get Repair Tips & Exclusive Offers
            </h2>
            <p className="mt-4 max-w-md text-lg leading-8 text-[#9f99aa]">
              Occasional emails on controller care, seasonal promos, and new turnaround-time updates. No spam.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-md"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-full border border-[#3a2450] bg-[#10012a] px-5 py-3 text-[#ffffff] placeholder:text-[#837e8c] focus:border-[#8a2be2] focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gradient-to-br from-[#8a2be2] to-[#ff69b4] px-6 py-3 font-[Orbitron] font-semibold uppercase tracking-wide text-white transition hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="relative hidden h-full min-h-[320px] lg:block">
            <img
              src={neonSetup}
              alt="Neon-lit gaming setup"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#33124a]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
