import Logo from "./Logo"

function Footer() {
  const year = new Date().getFullYear()

  return (

<footer className="border-t border-[#3a2d56] bg-[#1b1030] px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <Logo />
          <p className="text-sm text-[#665c7a]">Certified PS5 & Xbox Repairs</p>
          <p className="max-w-sm text-sm leading-7 text-[#9c93b0]">
            Specialized controller repair services for PS5, Xbox Series X/S, and Elite hardware.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b18cff]">Navigation</h3>
          <nav className="flex flex-col gap-2 text-sm text-[#9c93b0]">
            <a href="#home" className="transition hover:text-[#f5f2fa]">Home</a>
            <a href="#services" className="transition hover:text-[#f5f2fa]">Services</a>
            <a href="#process" className="transition hover:text-[#f5f2fa]">Process</a>
            <a href="#testimonials" className="transition hover:text-[#f5f2fa]">Reviews</a>
            <a href="#faq" className="transition hover:text-[#f5f2fa]">FAQ</a>
            <a href="#contact" className="transition hover:text-[#f5f2fa]">Contact</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b18cff]">Contact Info</h3>
          <div className="space-y-2 text-sm text-[#9c93b0]">
            <p>(905) 555-0182</p>
            <p>hello@controlfixpro.com</p>
            <p>Mississauga, ON</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b18cff]">Working Hours</h3>
          <div className="space-y-2 text-sm text-[#9c93b0]">
            <p className="flex justify-between"><span>Mon - Fri</span><span>10am – 7pm</span></p>
            <p className="flex justify-between"><span>Saturday</span><span>11am – 5pm</span></p>
            <p className="flex justify-between"><span>Sunday</span><span className="text-[#ffb4ab]">Closed</span></p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[#3a2d56] pt-6 text-sm text-[#665c7a] md:flex-row md:items-center md:justify-between">
        <p>© {year} ControlFix Pro. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-[#f5f2fa]">Privacy Policy</a>
          <a href="#" className="transition hover:text-[#f5f2fa]">Terms of Service</a>
          <a href="#" className="transition hover:text-[#f5f2fa]">Warranty Info</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
