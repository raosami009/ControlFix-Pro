import { Award, BadgeCheck, Star, ShieldCheck, PackageCheck } from "lucide-react"
import Reveal from "./ui/Reveal"

const items = [
  { icon: Award, label: "Xbox Certified" },
  { icon: BadgeCheck, label: "PS5 Authorized Parts" },
  { icon: Star, label: "5.0 Google Rated" },
  { icon: ShieldCheck, label: "Ontario Registered" },
  { icon: PackageCheck, label: "Insured Shipping" },
]

export default function TrustStrip() {
  return (
    <section className="border-b border-line/60 py-8">
      <Reveal className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 lg:px-10">
        {items.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-text-faint"
          >
            <Icon size={15} className="text-accent-2-soft" />
            {label}
          </span>
        ))}
      </Reveal>
    </section>
  )
}
