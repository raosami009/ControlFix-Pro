import { PenLine } from "lucide-react"
import Reveal from "./ui/Reveal"
import SectionHeading from "./ui/SectionHeading"
import { blogTeasers } from "../data/blog"

export default function BlogTeasers() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <SectionHeading
          eyebrow="Repair Tips"
          title="From the ControllerFix Pro journal."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogTeasers.map((post, i) => (
            <Reveal
              key={post.title}
              delay={i * 0.08}
              className="rounded-2xl border border-line/70 p-7"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text-faint">
                <PenLine size={13} />
                Coming soon
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-white">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {post.excerpt}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
