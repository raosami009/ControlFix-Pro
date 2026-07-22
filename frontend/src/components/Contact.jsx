import { useState } from "react";
import ControllerCard from "./ControllerCard";
import RepairCard from "./RepairCard";
import ContactInfo from "./ContactInfo";

const controllers = [
  "PS5 DualSense",
  "Xbox Series X|S",
  "Xbox One",
  "Other",
];

const repairs = [
  "Stick Drift",
  "Trigger Repair",
  "Button Replacement",
  "Charging Port",
  "Battery Issue",
  "Other",
];

function Contact() {
  const [selectedController, setSelectedController] = useState("");
  const [selectedRepair, setSelectedRepair] = useState("");

  return (
    <section
      id="contact"
      className="-scroll-mt-2 border-t border-[#434655]/70 px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b4c5ff]">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-semibold text-[#f9fafb]">
            Request Your Free Quote
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#c3c6d7]">
            Tell us about your controller issue and we'll get back to you with
            a repair estimate.
          </p>
        </div>

        {/* Main Grid */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Form */}

          <form className="rounded-3xl border border-[#434655] bg-[#111827]/80 p-8 backdrop-blur-sm">

            {/* Inputs */}

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#dce2f7]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-xl border border-[#434655] bg-[#0c1322] px-4 py-3 text-white outline-none transition focus:border-[#2563eb]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#dce2f7]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full rounded-xl border border-[#434655] bg-[#0c1322] px-4 py-3 text-white outline-none transition focus:border-[#2563eb]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-[#dce2f7]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-[#434655] bg-[#0c1322] px-4 py-3 text-white outline-none transition focus:border-[#2563eb]"
                />
              </div>
            </div>

            {/* Controller */}

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#f9fafb]">
                Controller Type
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {controllers.map((controller) => (
                  <ControllerCard
                    key={controller}
                    title={controller}
                    selected={selectedController === controller}
                    onClick={() => setSelectedController(controller)}
                  />
                ))}
              </div>
            </div>

            {/* Repair */}

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#f9fafb]">
                Repair Needed
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {repairs.map((repair) => (
                  <RepairCard
                    key={repair}
                    title={repair}
                    selected={selectedRepair === repair}
                    onClick={() => setSelectedRepair(repair)}
                  />
                ))}
              </div>
            </div>

            {/* Message */}

            <div className="mt-10">
              <label className="mb-2 block text-sm font-medium text-[#dce2f7]">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Describe the issue with your controller..."
                className="w-full rounded-2xl border border-[#434655] bg-[#0c1322] px-4 py-4 text-white outline-none transition focus:border-[#2563eb]"
              />
            </div>

            {/* Button */}

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#2563eb] px-6 py-4 font-medium text-white shadow-[0_0_30px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              Request Free Quote
              <span className="ml-2">→</span>
            </button>

          </form>

          {/* Info Card */}

          <ContactInfo />

        </div>
      </div>
    </section>
  );
}

export default Contact;