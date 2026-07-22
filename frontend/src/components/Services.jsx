import ServiceCard from './ServiceCard'
import services from '../data/services'

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-[#434655]/70 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b4c5ff]">What We Do</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f9fafb] sm:text-4xl">
              Precision Component Repairs
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#c3c6d7]">
              Every repair is performed in our Mississauga lab using high-grade replacement parts that meet or exceed OEM specifications.
            </p>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#b4c5ff] transition hover:text-[#f9fafb]">
            Book a consultation
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
