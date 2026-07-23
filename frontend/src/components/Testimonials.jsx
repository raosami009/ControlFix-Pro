import TestimonialCard from "./TestimonialCard"
import testimonials from "../data/testimonials"

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-t border-[#3a2450]/70 px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a0f0]">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#ffffff] sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#9f99aa]">
            Real feedback from gamers who trusted us with their controller repairs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials