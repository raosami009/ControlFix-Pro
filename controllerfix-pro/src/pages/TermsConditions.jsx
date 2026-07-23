import PolicyLayout from "./PolicyLayout"
import PolicySection from "./PolicySection"

const CONTACT_EMAIL = "hello@controlfixpro.com"

export default function TermsConditions() {
  return (
    <PolicyLayout eyebrow="Legal" title="Terms & Conditions" updated="July 24, 2026">
      <PolicySection heading="Our service">
        <p>
          ControllerFix Pro repairs PS5 and Xbox controllers via local
          drop-off in Mississauga, Ontario, or mail-in service from anywhere
          in Canada. By booking a repair, you agree to the terms below.
        </p>
      </PolicySection>

      <PolicySection heading="Quotes & pricing">
        <p>
          Prices listed on this site are starting prices for the described
          repair. If we find additional issues once your controller is
          opened, we&rsquo;ll contact you with a revised quote before doing
          any extra work — you&rsquo;re never charged for work you
          haven&rsquo;t approved.
        </p>
      </PolicySection>

      <PolicySection heading="Payment">
        <p>
          You&rsquo;re only charged once your repair is confirmed and
          completed — no upfront payment is required to book a slot or send
          in your controller for diagnosis.
        </p>
      </PolicySection>

      <PolicySection heading="Turnaround">
        <p>
          Typical turnaround is 1–2 business days for local drop-off and 2–4
          business days for mail-in, starting once we receive your
          controller. These are estimates, not guarantees — busy periods or
          parts availability can extend them, and we&rsquo;ll let you know if
          that happens.
        </p>
      </PolicySection>

      <PolicySection heading="Mail-in shipping">
        <p>
          For mail-in repairs, we provide a prepaid shipping label after
          payment is confirmed. We&rsquo;re not responsible for loss or
          damage in transit before your controller reaches us — we recommend
          using tracked shipping.
        </p>
      </PolicySection>

      <PolicySection heading="Warranty">
        <p>
          Repairs are covered by a 90-day parts-and-labor warranty against
          the specific issue we fixed. The warranty doesn&rsquo;t cover new,
          unrelated damage, liquid damage, or damage from further disassembly
          by someone other than ControllerFix Pro after the repair.
        </p>
      </PolicySection>

      <PolicySection heading="Unclaimed controllers">
        <p>
          If we can&rsquo;t reach you about a completed repair or a revised
          quote after repeated attempts over 60 days, we may recycle or
          dispose of the controller to clear space.
        </p>
      </PolicySection>

      <PolicySection heading="Limitation of liability">
        <p>
          We handle every controller with care, but we&rsquo;re not liable
          for pre-existing damage, cosmetic wear, or data/settings loss.
          Our liability for any issue arising from a repair is limited to
          the amount you paid for that repair.
        </p>
      </PolicySection>

      <PolicySection heading="Governing law">
        <p>
          These terms are governed by the laws of the Province of Ontario
          and the federal laws of Canada applicable within it.
        </p>
      </PolicySection>

      <PolicySection heading="Changes to these terms">
        <p>
          We may update these terms from time to time. The date at the top
          of this page reflects the latest revision.
        </p>
      </PolicySection>

      <PolicySection heading="Contact">
        <p>
          Questions about these terms? Reach us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
