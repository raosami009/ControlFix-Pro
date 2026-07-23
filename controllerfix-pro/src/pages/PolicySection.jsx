export default function PolicySection({ heading, children }) {
  return (
    <section>
      <h2 className="font-heading text-lg font-semibold text-white">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-muted [&_a]:text-accent-2-soft [&_a]:hover:text-white [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  )
}
