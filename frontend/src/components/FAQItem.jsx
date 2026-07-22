import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="overflow-hidden rounded-2xl border border-[#434655] bg-[#111827]/70 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="text-lg font-semibold text-[#f9fafb]">
          {item.question}
        </h3>

        <ChevronDown
          size={20}
          aria-hidden="true"
          className={`shrink-0 text-[#b4c5ff] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div id={panelId} className="border-t border-[#434655] px-6 py-5">
          <p className="leading-7 text-[#c3c6d7]">
            {item.answer}
          </p>
        </div>
      )}
    </article>
  );
}

export default FAQItem;
