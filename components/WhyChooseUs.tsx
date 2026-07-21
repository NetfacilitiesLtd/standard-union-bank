import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  ArrowRightLeft,
  Handshake,
  Clock3,
  BadgeCheck,
} from "lucide-react";

import SectionHeading from "./ui/SectionHeading";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
    },
    {
      icon: Globe2,
      title: "International Banking",
    },
    {
      icon: ArrowRightLeft,
      title: "Fast Money Transfers",
    },
    {
      icon: Handshake,
      title: "Personalized Banking",
    },
    {
      icon: Clock3,
      title: "24/7 Customer Support",
    },
    {
      icon: BadgeCheck,
      title: "Trusted Financial Partner",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">

        <SectionHeading
          eyebrow="Why Choose Standard Union Bank"
          title="Banking Built Around Trust"
          description="At Standard Union Bank, we combine innovation, security and personalized financial solutions to deliver an exceptional banking experience for individuals and businesses across the world."
        />

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/images/bank-building.jpg"
              alt="Standard Union Bank"
              width={540}
              height={620}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Features */}
          <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
                    <feature.icon
                      size={26}
                      className="text-red-600"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              ))}

            </div>

            <Link
              href="/about"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition"
            >
              Learn More About Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}