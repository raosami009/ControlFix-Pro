import FAQItem from "./FAQItem";
import faq from "../data/faq";

function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-[#3a2d56]/70 bg-[#1b1030] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b18cff]">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#f5f2fa] sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#9c93b0]">
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
