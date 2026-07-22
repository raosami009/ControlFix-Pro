import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Process", href: "#process", id: "process" },
  { label: "About", href: "#about", id: "about" },
  { label: "Reviews", href: "#testimonials", id: "testimonials" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#434655] bg-[#0c1322]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-lg font-semibold text-[#f9fafb]">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#2563eb] after:transition-transform after:duration-300 ${
                activeId === link.id
                  ? "text-[#b4c5ff] after:scale-x-100"
                  : "text-[#c3c6d7] hover:text-[#b4c5ff]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-[#2563eb]/40 bg-[#2563eb]/10 px-4 py-2 text-sm font-medium text-[#b4c5ff] transition hover:bg-[#2563eb]/20 sm:inline-flex"
          >
            Repair Now
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="rounded-full border border-[#434655] p-2 text-[#dce2f7] transition hover:border-[#2563eb]/40 hover:text-[#b4c5ff] md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 overflow-y-auto bg-[#0c1322] px-6 py-20 md:hidden"
        >
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute right-6 top-6 rounded-full border border-[#434655] p-2 text-[#dce2f7] transition hover:border-[#2563eb]/40 hover:text-[#b4c5ff]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`text-2xl font-semibold transition hover:text-[#b4c5ff] ${
                activeId === link.id ? "text-[#b4c5ff]" : "text-[#f9fafb]"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 rounded-full bg-[#2563eb] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1d4ed8]"
          >
            Repair Now
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
