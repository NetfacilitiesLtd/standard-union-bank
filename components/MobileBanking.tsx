import Image from "next/image";
import { Smartphone, ShieldCheck, CreditCard, BellRing } from "lucide-react";

export default function MobileBanking() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">

        <div>
          <Image
            src="/images/mobile-banking.jpg"
            alt="Mobile Banking"
            width={600}
            height={600}
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bank Anytime, Anywhere
          </h2>

          <p className="text-gray-600 mb-8">
            Access your accounts securely wherever you are.
            Our mobile banking platform lets you manage your finances
            24/7 with just a few taps.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <Smartphone className="text-blue-700" size={28} />
              <span className="text-gray-700">
                View balances and transactions instantly
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CreditCard className="text-blue-700" size={28} />
              <span className="text-gray-700">
                Transfer money safely
              </span>
            </div>

            <div className="flex items-center gap-4">
              <ShieldCheck className="text-blue-700" size={28} />
              <span className="text-gray-700">
                Biometric login with Face ID & Fingerprint
              </span>
            </div>

            <div className="flex items-center gap-4">
              <BellRing className="text-blue-700" size={28} />
              <span className="text-gray-700">
                Instant transaction alerts
              </span>
            </div>

          </div>

          <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg transition">
            Download Mobile App
          </button>

        </div>

      </div>
    </section>
  );
}