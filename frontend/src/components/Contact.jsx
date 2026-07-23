function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-[#3a2d56]/70 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[#8b5cf6]/20 bg-[#241a3d]/80 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b18cff]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f5f2fa] sm:text-4xl">Ready to Fix Your Controller?</h2>
            <p className="mt-4 max-w-2xl text-lg text-[#9c93b0]">
              Don't let drift or broken buttons end your game. Get a precision repair from Mississauga's top technicians today.
            </p>
          </div>

          <div className="rounded-3xl border border-[#3a2d56] bg-[#12091f]/70 p-6">
            <div className="space-y-4 text-[#9c93b0]">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#665c7a]">Email</div>
                <a href="mailto:hello@controlfixpro.com" className="mt-1 block text-lg text-[#f5f2fa] transition hover:text-[#b18cff]">hello@controlfixpro.com</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#665c7a]">Phone</div>
                <a href="tel:+19055550182" className="mt-1 block text-lg text-[#f5f2fa] transition hover:text-[#b18cff]">(905) 555-0182</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#665c7a]">Location</div>
                <p className="mt-1 text-lg text-[#f5f2fa]">Mississauga, ON — exact drop-off address provided when you book</p>
              </div>
            </div>
            <a href="mailto:hello@controlfixpro.com" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#e93d9a] to-[#8b5cf6] px-5 py-3 font-medium text-white transition hover:brightness-110">
              Repair Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
