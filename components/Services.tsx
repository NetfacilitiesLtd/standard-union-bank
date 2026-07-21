import {
  Landmark,
  Building2,
  ArrowRightLeft,
  CreditCard,
  HandCoins,
  PiggyBank,
} from "lucide-react";

import SectionHeading from "./ui/SectionHeading";

export default function Services() {
  const services = [
    {
      icon: Landmark,
      title: "Personal Banking",
      description:
        "Savings accounts, debit cards and secure everyday banking.",
    },
    {
      icon: Building2,
      title: "Business Banking",
      description:
        "Corporate accounts and banking solutions for growing businesses.",
    },
    {
      icon: ArrowRightLeft,
      title: "International Transfers",
      description:
        "Fast and secure worldwide money transfers with competitive rates.",
    },
    {
      icon: CreditCard,
      title: "Cards & Payments",
      description:
        "Debit cards, digital payments and convenient cashless banking.",
    },
    {
      icon: HandCoins,
      title: "Loans & Mortgages",
      description:
        "Personal, business and home financing with flexible repayment.",
    },
    {
      icon: PiggyBank,
      title: "Savings & Investments",
      description:
        "Grow your wealth through savings plans and investment products.",
    },
  ];

  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-8">

        <SectionHeading
          eyebrow="Our Banking Solutions"
          title="Banking Designed Around You"
          description="Everything you need to bank with confidence, whether you're managing your personal finances or growing your business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mb-8 group-hover:bg-red-600 transition duration-300">

                <service.icon
                  size={48}
                  className="text-red-600 group-hover:text-white transition duration-300"
                />

              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}