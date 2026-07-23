import { useState } from "react"
import { Send } from "lucide-react"
import Reveal from "./ui/Reveal"
import Button from "./ui/Button"
import controllerImage from "../assets/images/dualsense-controller-front.png"

const CONTACT_EMAIL = "hello@controlfixpro.com"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent("Newsletter Signup")
    const body = encodeURIComponent(
      `Please add this email to the ControllerFix Pro newsletter list: ${email}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-4">
      <Reveal className="relative mx-auto max-w-content overflow-hidden rounded-[2rem] border border-line/70 bg-bg-panel-soft/60 px-6 py-14 sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-2/15 blur-[100px]"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent-2-soft">
              Stay in the Loop
            </span>
            <h2 className="mt-4 text-balance font-heading text-[clamp(1.6rem,2.6vw+1rem,2.1rem)] font-bold text-white">
              Get Repair Tips &amp; Exclusive Offers
            </h2>
            <p className="mt-3 max-w-md text-balance text-sm leading-relaxed text-text-muted">
              Occasional emails on controller care, seasonal promos, and new
              turnaround-time updates. No spam.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-line bg-bg px-5 py-3 text-sm text-white placeholder:text-text-faint focus-visible:border-accent-2-soft"
              />
              <Button as="button" type="submit" variant="primary" className="shrink-0">
                Subscribe
                <Send size={16} />
              </Button>
            </form>
          </div>

          <div className="hidden justify-self-center lg:block">
            <img
              src={controllerImage}
              alt=""
              aria-hidden="true"
              className="w-56 drop-shadow-[0_25px_50px_rgba(138,43,226,0.35)]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
