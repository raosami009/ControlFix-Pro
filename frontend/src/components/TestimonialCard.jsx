import { Star, Quote } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <article className="group relative rounded-2xl border border-[#434655] bg-[#111827]/70 p-8 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#2563eb]/40 hover:bg-[#111827]/90">
      <Quote
        className="absolute right-6 top-6 h-10 w-10 text-[#2563eb]/15"
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

      <blockquote className="relative leading-7 text-[#c3c6d7]">
        "{testimonial.quote}"
      </blockquote>

      <div className="mt-8 border-t border-[#434655] pt-5">
        <h3 className="font-semibold text-[#f9fafb]">
          {testimonial.name}
        </h3>

        <p className="mt-1 text-sm text-[#8f95a8]">
          {testimonial.role}
        </p>
      </div>
    </article>
  )
}

export default TestimonialCard
