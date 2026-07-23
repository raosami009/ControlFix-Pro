import { Star, Quote } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="group relative rounded-2xl border border-[#3a2d56] bg-[#241a3d]/70 p-8 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/40 hover:bg-[#241a3d]/90">
      <Quote
        className="absolute right-6 top-6 h-10 w-10 text-[#8b5cf6]/15"
        fill="currentColor"
        strokeWidth={0}
        aria-hidden="true"
      />

      <div className="mb-5 flex gap-1 text-[#facc15]">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={18}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>

      <blockquote className="relative leading-7 text-[#9c93b0]">
        "{testimonial.quote}"
      </blockquote>

      <div className="mt-8 flex items-center gap-3 border-t border-[#3a2d56] pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#e93d9a] to-[#8b5cf6] text-sm font-semibold text-white">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold text-[#f5f2fa]">
            {testimonial.name}
          </h3>

          <p className="text-sm text-[#665c7a]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
