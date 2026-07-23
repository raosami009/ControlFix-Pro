import SimpleHeader from "../components/SimpleHeader"
import Footer from "../components/Footer"
import ScrollProgress from "../components/ScrollProgress"
import WhatsAppFab from "../components/WhatsAppFab"

export default function PolicyLayout({ eyebrow, title, updated, children }) {
  return (
    <>
      <ScrollProgress />
      <SimpleHeader />

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-10 lg:pt-40">
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-accent-2-soft">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-balance font-heading text-[clamp(1.9rem,3.2vw+1rem,2.75rem)] font-bold leading-[1.15] text-white">
          {title}
        </h1>
        <p className="mt-3 text-sm text-text-faint">Last updated {updated}</p>

        <div className="mt-10 space-y-10">{children}</div>
      </main>

      <Footer logoHref="/" />
      <WhatsAppFab />
    </>
  )
}
