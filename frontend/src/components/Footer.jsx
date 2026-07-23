import Logo from "./Logo"

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9c0-.55.45-1 1-1z" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M18.9 3H21l-7.2 8.2L22 21h-6.6l-5.2-6.4L4.3 21H2.2l7.7-8.8L2 3h6.7l4.7 5.9L18.9 3zm-1.2 16h1.8L7.4 4.9H5.5L17.7 19z" />
    </svg>
  )
}

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
]

function Footer() {
  const year = new Date().getFullYear()

  return (

<footer className="border-t border-[#3a2450] bg-[#270b39] px-6 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <Logo />
          <p className="text-sm text-[#837e8c]">Certified PS5 & Xbox Repairs</p>
          <p className="max-w-sm text-sm leading-7 text-[#9f99aa]">
            Specialized controller repair services for PS5, Xbox Series X/S, and Elite hardware.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a0f0]">Navigation</h3>
          <nav className="flex flex-col gap-2 text-sm text-[#9f99aa]">
            <a href="#home" className="transition hover:text-[#ffffff]">Home</a>
            <a href="#services" className="transition hover:text-[#ffffff]">Services</a>
            <a href="#process" className="transition hover:text-[#ffffff]">Process</a>
            <a href="#testimonials" className="transition hover:text-[#ffffff]">Reviews</a>
            <a href="#faq" className="transition hover:text-[#ffffff]">FAQ</a>
            <a href="#contact" className="transition hover:text-[#ffffff]">Contact</a>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a0f0]">Contact Info</h3>
          <div className="space-y-2 text-sm text-[#9f99aa]">
            <p>(905) 555-0182</p>
            <p>hello@controlfixpro.com</p>
            <p>Mississauga, ON</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a0f0]">Working Hours</h3>
          <div className="space-y-2 text-sm text-[#9f99aa]">
            <p className="flex justify-between"><span>Mon - Fri</span><span>10am – 7pm</span></p>
            <p className="flex justify-between"><span>Saturday</span><span>11am – 5pm</span></p>
            <p className="flex justify-between"><span>Sunday</span><span className="text-[#ffb4ab]">Closed</span></p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[#3a2450] pt-6 text-sm text-[#837e8c] md:flex-row md:items-center md:justify-between">
        <p>© {year} ControllerFix Pro. All rights reserved.</p>

        <div className="flex flex-wrap gap-4">
          <a href="#" className="transition hover:text-[#ffffff]">Privacy Policy</a>
          <a href="#" className="transition hover:text-[#ffffff]">Terms of Service</a>
          <a href="#" className="transition hover:text-[#ffffff]">Warranty Info</a>
        </div>

        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3a2450] text-[#9f99aa] transition hover:border-[#8a2be2]/40 hover:text-[#c9a0f0]"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
