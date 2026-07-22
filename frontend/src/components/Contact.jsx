function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-[#434655]/70 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[#2563eb]/20 bg-[#111827]/80 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b4c5ff]">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f9fafb] sm:text-4xl">Ready to Fix Your Controller?</h2>
            <p className="mt-4 max-w-2xl text-lg text-[#c3c6d7]">
              Don't let drift or broken buttons end your game. Get a precision repair from Mississauga's top technicians today.
            </p>
          </div>

          <div className="rounded-3xl border border-[#434655] bg-[#0c1322]/70 p-6">
            <div className="space-y-4 text-[#c3c6d7]">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#8f95a8]">Email</div>
                <a href="mailto:hello@controlfixpro.com" className="mt-1 block text-lg text-[#f9fafb] transition hover:text-[#b4c5ff]">hello@controlfixpro.com</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#8f95a8]">Phone</div>
                <a href="tel:+19055550182" className="mt-1 block text-lg text-[#f9fafb] transition hover:text-[#b4c5ff]">(905) 555-0182</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-[#8f95a8]">Location</div>
                <p className="mt-1 text-lg text-[#f9fafb]">Mississauga, ON — exact drop-off address provided when you book</p>
              </div>
            </div>
            <a href="mailto:hello@controlfixpro.com" className="mt-8 inline-flex rounded-full bg-[#2563eb] px-5 py-3 font-medium text-white transition hover:bg-[#1d4ed8]">
              Repair Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
