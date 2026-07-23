import PolicyLayout from "./PolicyLayout"
import PolicySection from "./PolicySection"

const CONTACT_EMAIL = "hello@controlfixpro.com"

export default function PrivacyPolicy() {
  return (
    <PolicyLayout eyebrow="Legal" title="Privacy Policy" updated="July 24, 2026">
      <PolicySection heading="Overview">
        <p>
          ControllerFix Pro (&ldquo;we&rdquo;, &ldquo;us&rdquo;) repairs PS5 and
          Xbox controllers for customers in Mississauga and across Canada. This
          policy explains what information we collect through this website and
          how it&rsquo;s used.
        </p>
      </PolicySection>

      <PolicySection heading="Information we collect">
        <p>We only collect information you choose to give us, through:</p>
        <ul>
          <li>The contact form on this site (name, email address, and your message).</li>
          <li>Direct emails or WhatsApp messages you send us.</li>
        </ul>
        <p>
          We don&rsquo;t use cookies, analytics trackers, or advertising pixels
          on this site.
        </p>
      </PolicySection>

      <PolicySection heading="How we use it">
        <p>
          Information you submit is used only to respond to your repair
          inquiry, provide a quote, and coordinate drop-off or mail-in
          service. We don&rsquo;t sell, rent, or share your information with
          third parties for marketing purposes.
        </p>
      </PolicySection>

      <PolicySection heading="Mail-in repairs">
        <p>
          If you mail in a controller, we retain your contact details only
          for the duration of the repair and any related warranty period,
          so we can update you on status and honor warranty claims.
        </p>
      </PolicySection>

      <PolicySection heading="Data retention">
        <p>
          We keep contact-form submissions and repair records only as long as
          needed to complete your repair, honor the warranty period, and meet
          basic bookkeeping requirements — after that, they&rsquo;re deleted.
        </p>
      </PolicySection>

      <PolicySection heading="Your rights">
        <p>
          You can ask us to show you, correct, or delete any personal
          information we hold about you at any time by emailing{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </PolicySection>

      <PolicySection heading="Changes to this policy">
        <p>
          If this policy changes, we&rsquo;ll update the date at the top of
          this page. Continued use of the site after a change means you
          accept the updated policy.
        </p>
      </PolicySection>

      <PolicySection heading="Contact">
        <p>
          Questions about this policy? Reach us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
