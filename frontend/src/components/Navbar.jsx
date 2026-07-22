const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]
function ControlFixLogo() {
  return (
    <svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <path d="M10 15C10 12.2386 12.2386 10 15 10H25C27.7614 10 30 12.2386 30 15V25C30 27.7614 27.7614 30 25 30H15C12.2386 30 10 27.7614 10 25V15Z" fill="#2563eb" />
      <circle cx="16" cy="16" r="1.5" fill="white" />
      <circle cx="24" cy="16" r="1.5" fill="white" />
      <circle cx="16" cy="24" r="1.5" fill="white" />
      <circle cx="24" cy="24" r="1.5" fill="white" />
      <text x="40" y="27" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="#f9fafb">
        ControlFix <tspan fill="#2563eb">Pro</tspan>
      </text>
    </svg>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#434655] bg-[#0c1322]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold text-[#f9fafb]">
          <ControlFixLogo />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#c3c6d7] md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-[#b4c5ff]">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-[#2563eb]/40 bg-[#2563eb]/10 px-4 py-2 text-sm font-medium text-[#b4c5ff] transition hover:bg-[#2563eb]/20"
        >
          Repair Now
        </a>
      </div>
    </header>
  )
}

export default Navbar
