import FAQItem from "./FAQItem";
import faq from "../data/faq";

function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-[#3a2450]/70 bg-[#270b39] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a0f0]">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#ffffff] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#9f99aa]">
            Everything you need to know about our controller repair services.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faq.map((item) => (
            <FAQItem
              key={item.question}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
