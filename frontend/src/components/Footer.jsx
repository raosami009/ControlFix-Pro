import Logo from "./Logo"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#434655] bg-[#0c1322] px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <Logo />
          <p className="text-sm text-[#8f95a8]">Certified PS5 & Xbox Repairs</p>
          <p className="max-w-sm text-sm leading-7 text-[#c3c6d7]">
            Specialized controller repair services for PS5, Xbox Series X/S, and Elite hardware.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b4c5ff]">Navigation</h3>
          <nav className="flex flex-col gap-2 text-sm text-[#c3c6d7]">
            <a href="#home" className="transition hover:text-[#f9fafb]">Home</a>
            <a href="#services" className="transition hover:text-[#f9fafb]">Services</a>
            <a href="#process" className="transition hover:text-[#f9fafb]">Process</a>
            <a href="#testimonials" className="transition hover:text-[#f9fafb]">Reviews</a>
            <a href="#faq" className="transition hover:text-[#f9fafb]">FAQ</a>
            <a href="#contact" className="transition hover:text-[#f9fafb]">Contact</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b4c5ff]">Contact Info</h3>
          <div className="space-y-2 text-sm text-[#c3c6d7]">
            <p>(905) 555-0182</p>
            <p>hello@controlfixpro.com</p>
            <p>Mississauga, ON</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b4c5ff]">Working Hours</h3>
          <div className="space-y-2 text-sm text-[#c3c6d7]">
            <p className="flex justify-between"><span>Mon - Fri</span><span>10am – 7pm</span></p>
            <p className="flex justify-between"><span>Saturday</span><span>11am – 5pm</span></p>
            <p className="flex justify-between"><span>Sunday</span><span className="text-[#ffb4ab]">Closed</span></p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[#434655] pt-6 text-sm text-[#8f95a8] md:flex-row md:items-center md:justify-between">
        <p>© {year} ControlFix Pro. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-[#f9fafb]">Privacy Policy</a>
          <a href="#" className="transition hover:text-[#f9fafb]">Terms of Service</a>
          <a href="#" className="transition hover:text-[#f9fafb]">Warranty Info</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
