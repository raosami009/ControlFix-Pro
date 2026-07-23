import { Mail, MapPin, Clock } from "lucide-react"
import Logo from "./Logo"
import { InstagramIcon, FacebookIcon, XIcon } from "./ui/Icons"

const CONTACT_EMAIL = "hello@controlfixpro.com"

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy.html" },
  { label: "Terms & Conditions", href: "/terms.html" },
]

const hours = [
  ["Mon – Fri", "10:00 AM – 7:00 PM"],
  ["Saturday", "11:00 AM – 5:00 PM"],
  ["Sunday", "Closed"],
]

const socials = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: XIcon, label: "X" },
]

export default function Footer({ logoHref = "#home" }) {
  return (
    <footer className="border-t border-line/60 bg-bg-deep">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo href={logoHref} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Certified PS5 &amp; Xbox Repairs
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-accent-2-soft" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0 text-accent-2-soft" />
                Mississauga, Ontario
              </li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-white">
              <Clock size={15} className="text-accent-2-soft" />
              Hours
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-text-muted">
              {hours.map(([day, time]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span className="text-text-faint">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-line/60 pt-8 sm:flex-row">
          <p className="text-xs text-text-faint">
            &copy; {new Date().getFullYear()} ControllerFix Pro.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line/70 text-text-muted transition-colors hover:border-accent/40 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
