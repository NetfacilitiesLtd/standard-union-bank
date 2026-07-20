import Image from "next/image";
import {
  Landmark,
  ShieldCheck,
  Zap,
  Globe2,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Landmark,
      title: "Trusted Banking",
      description:
        "Providing secure and dependable banking services built on integrity and customer confidence.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      description:
        "Your money and personal information are protected with advanced security technologies.",
    },
    {
      icon: Zap,
      title: "Fast Digital Banking",
      description:
        "Manage your accounts, transfer funds, and pay bills anytime from anywhere.",
    },
    {
      icon: Globe2,
      title: "Nationwide Access",
      description:
        "Enjoy convenient banking through our branches, ATMs, and digital banking services.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Standard Union Bank?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We combine innovation, security, and personalized service to
            provide a banking experience you can rely on every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 bg-gray-50"
              >
                <div className="mb-6 text-[#0B3C91]">
                  <feature.icon size={54} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/bank-building.jpg"
              alt="Standard Union Bank Building"
              width={600}
              height={700}
              className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
}