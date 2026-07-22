import ReasonCard from './ReasonCard'
import reasons from '../data/reasons'

function About() {
  return (
    <section id="about" className="-scroll-mt-14 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#434655] bg-gradient-to-br from-[#2563eb]/10 to-[#0c1322]/90 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.35)] lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b4c5ff]">About us</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f9fafb] sm:text-4xl">
              Why Gamers Choose ControlFix Pro.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#c3c6d7]">
              We focus exclusively on next-gen console controllers for ultimate expertise and dependable results.
            </p>

            <div className="mt-8 rounded-2xl border border-[#434655] bg-[#0c1322]/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b4c5ff]">Technical precision guaranteed</p>
              <p className="mt-2 text-sm leading-7 text-[#c3c6d7]">
                Specialized repair work, careful diagnostics, and a clear commitment to quality from start to finish.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-[#434655]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsrZI82cRrcz3QmjBy4x3RGkvzY4iTO5PIxsTjk6B40oBusNXeBmihIwdd9cisK3kYZ8Qj76Gx76w0Q50rPGpI3bXKgzXSYcqZJgt_54l2jTGRPb1XaNZ3ZvsA97cOtpI_RAOsU1Pqo4Qeae8_wPspWdhEJln3Ven1LEsMJjNvAtK_ZlT05xPGNATJ3GAqRQStx5YXBXQCMk5cCSQtIJP4jAldTAe1DvOuPjoV_rH3YnvlzZlAJqNguLvUbwd_MOmOlQMTTT7rGbUh"
                  alt="Controller repair detail"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#434655]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbqS_iYpvp9Mdpc_Gz89xoT277joEjULSOlw3dGSHq_6lP6Crcrwt7j_B0jaGAcjRKSaQAIinTovruijT6Sv4X48HjR9lPPON6xpCBwMID4qffS6Wn6MR8Dbsv_58gU49A-e1iJCb1ZDF8hSk6DwjFtpO0zATrrN-hLdQWFfce1q-k7hG9-v_Oqb0A9h63Fe8ClhG9CDQmvNCLPseJcpTz2QnX4oUnpgU-wQNaxDwGjAMbVJJdARZOni8s_zn-s3jI9cTqP9TL7m4U"
                  alt="Controller workshop setup"
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reasons.map((reason) => (
              <ReasonCard key={reason.title} reason={reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
