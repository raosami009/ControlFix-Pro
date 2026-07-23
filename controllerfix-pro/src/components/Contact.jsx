import { useState } from "react"
import { Mail, MapPin, Send } from "lucide-react"
import Reveal from "./ui/Reveal"
import Button from "./ui/Button"

const CONTACT_EMAIL = "hello@controlfixpro.com"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Repair Inquiry from ${form.name || "website visitor"}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nReply-to email: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent-2-soft">
            Contact
          </span>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-balance font-heading text-[clamp(1.9rem,3.2vw+1rem,2.75rem)] font-bold leading-[1.15] text-white">
              Ready to fix your controller?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-md text-balance leading-relaxed text-text-muted">
              Don&rsquo;t let drift or broken buttons end your game. Send us
              a message and we&rsquo;ll get back to you within 24 hours with
              next steps.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 text-sm text-text-muted transition-colors hover:text-white"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-2-soft">
                <Mail size={17} />
              </span>
              {CONTACT_EMAIL}
            </a>
            <p className="flex items-center gap-3 text-sm text-text-muted">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-2-soft">
                <MapPin size={17} />
              </span>
              Mississauga, ON — exact address provided after booking
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-8">
            <Button as="a" href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
              Repair Now
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="glass-panel rounded-[2rem] p-7 sm:p-9">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-medium uppercase tracking-wide text-text-faint"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-white transition-all duration-200 placeholder:text-text-faint focus-visible:border-accent-2-soft"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-medium uppercase tracking-wide text-text-faint"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-white transition-all duration-200 placeholder:text-text-faint focus-visible:border-accent-2-soft"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-medium uppercase tracking-wide text-text-faint"
              >
                What's going on?
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={form.message}
                onChange={update("message")}
                className="w-full resize-none rounded-xl border border-line bg-bg px-4 py-3 text-sm text-white transition-all duration-200 placeholder:text-text-faint focus-visible:border-accent-2-soft"
                placeholder="Tell us about your controller issue..."
              />
            </div>
            <Button as="button" type="submit" variant="primary" className="w-full">
              Send Message
              <Send size={16} />
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
