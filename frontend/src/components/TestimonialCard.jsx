import { Star, Quote } from "lucide-react";

function getInitials(name) {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="group relative rounded-2xl border border-[#3a2450] bg-[#33124a]/70 p-8 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#8a2be2]/40 hover:bg-[#33124a]/90">
      <Quote
        className="absolute right-6 top-6 h-10 w-10 text-[#8a2be2]/15"
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

      <blockquote className="relative leading-7 text-[#9f99aa]">
        "{testimonial.quote}"
      </blockquote>

      <div className="mt-8 flex items-center gap-3 border-t border-[#3a2450] pt-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8a2be2] to-[#ff69b4] text-sm font-semibold text-white">
          {getInitials(testimonial.name)}
        </div>

        <div>
          <h3 className="font-semibold text-[#ffffff]">
            {testimonial.name}
          </h3>

          <p className="text-sm text-[#837e8c]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
