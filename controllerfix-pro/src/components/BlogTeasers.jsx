import { useState } from "react"
import { ArrowRight, Clock } from "lucide-react"
import Reveal from "./ui/Reveal"
import SectionHeading from "./ui/SectionHeading"
import Modal from "./ui/Modal"
import Button from "./ui/Button"
import { blogTeasers } from "../data/blog"

export default function BlogTeasers() {
  const [activeSlug, setActiveSlug] = useState(null)
  const activePost = blogTeasers.find((post) => post.slug === activeSlug) ?? null

  const goToContact = () => {
    setActiveSlug(null)
    requestAnimationFrame(() => {
      const target = document.getElementById("contact")
      if (!target) return
      const top = target.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top, behavior: "smooth" })
    })
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="Repair Tips"
          title="From the ControllerFix Pro journal."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogTeasers.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setActiveSlug(post.slug)}
                className="group flex h-full w-full flex-col rounded-2xl border border-line/70 p-7 text-left transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.03]"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-2-soft">
                  {post.category}
                  <span className="inline-flex items-center gap-1 text-text-faint">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-white">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Read article
                  <ArrowRight
                    size={15}
                    className="text-accent-2-soft transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={Boolean(activePost)} onClose={() => setActiveSlug(null)}>
        {activePost && (
          <div className="themed-scrollbar max-h-[80vh] overflow-y-auto px-7 py-8 sm:px-9 sm:py-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent-2-soft">
              {activePost.category}
              <span className="inline-flex items-center gap-1 text-text-faint">
                <Clock size={12} />
                {activePost.readTime}
              </span>
            </span>
            <h2 className="mt-4 pr-8 font-heading text-2xl font-bold leading-tight text-white sm:text-[1.75rem]">
              {activePost.title}
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-text-muted">
              {activePost.intro}
            </p>

            <div className="mt-7 space-y-6 border-t border-line/60 pt-7">
              {activePost.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-heading text-sm font-semibold text-white">
                    {section.heading}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-7 border-t border-line/60 pt-6 text-sm leading-relaxed text-text-muted">
              {activePost.outro}
            </p>

            <Button
              as="button"
              type="button"
              variant="primary"
              onClick={goToContact}
              className="mt-7 w-full sm:w-auto"
            >
              Book Your Repair
            </Button>
          </div>
        )}
      </Modal>
    </section>
  )
}
