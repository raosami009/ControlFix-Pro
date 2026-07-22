function Contact() {
  return (
    <section id="contact" className="scroll-mt-10 border-t border-[#434655]/70 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ready to Fix Your Controller?</h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Don’t let drift or broken buttons end your game. Get a precision repair from Mississauga’s top technicians today.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <div className="space-y-4 text-slate-300">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Email</div>
                <a href="mailto:hello@controlfixpro.com" className="mt-1 block text-lg text-white transition hover:text-cyan-300">[PLACEHOLDER — email]</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Phone</div>
                <a href="tel:+1234567890" className="mt-1 block text-lg text-white transition hover:text-cyan-300">[PLACEHOLDER — phone]</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Location</div>
                <p className="mt-1 text-lg text-white">[PLACEHOLDER — Mississauga address]</p>
              </div>
            </div>
            <a href="mailto:hello@controlfixpro.com" className="mt-8 inline-flex rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
              Repair Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
