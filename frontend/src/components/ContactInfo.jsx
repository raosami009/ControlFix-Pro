import {
  MapPin,
  Package,
  Gamepad2,
  MessageSquare,
} from "lucide-react";

function ContactInfo() {
  return (
    <div className="rounded-3xl border border-[#434655] bg-[#111827]/80 p-8 backdrop-blur-sm">

      <h2 className="text-2xl font-semibold text-[#f9fafb]">
        Need a Repair?
      </h2>

      <p className="mt-3 text-[#c3c6d7]">
        We repair PlayStation and Xbox controllers with local drop-off and
        Canada-wide mail-in service.
      </p>

      <div className="mt-8 space-y-5">

        <div className="flex items-start gap-4">
          <MapPin className="mt-1 text-[#2563eb]" />
          <div>
            <h3 className="font-medium text-white">
              Location
            </h3>

            <p className="text-[#c3c6d7]">
              Mississauga, Ontario
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Package className="mt-1 text-[#2563eb]" />
          <div>
            <h3 className="font-medium text-white">
              Service Options
            </h3>

            <p className="text-[#c3c6d7]">
              Local Drop-Off & Canada-Wide Mail-In
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Gamepad2 className="mt-1 text-[#2563eb]" />
          <div>
            <h3 className="font-medium text-white">
              Controllers
            </h3>

            <p className="text-[#c3c6d7]">
              PS5 • Xbox Series X|S • Xbox One
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MessageSquare className="mt-1 text-[#2563eb]" />
          <div>
            <h3 className="font-medium text-white">
              Not Sure?
            </h3>

            <p className="text-[#c3c6d7]">
              Describe the issue and we'll help identify the repair you need.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactInfo;