import {
  CreditCard,
  Building2,
  Landmark,
  Globe2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: CreditCard,
      title: "Personal Banking",
      description:
        "Savings, current accounts, debit cards, and secure online banking tailored for your everyday needs.",
    },
    {
      icon: Building2,
      title: "Business Banking",
      description:
        "Flexible banking solutions for SMEs, corporate organizations, and growing businesses.",
    },
    {
      icon: Landmark,
      title: "Loans & Credit",
      description:
        "Personal, business, mortgage, and vehicle loans with competitive interest rates.",
    },
    {
      icon: Globe2,
      title: "International Banking",
      description:
        "Fast international money transfers, foreign exchange, and cross-border payment services.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Banking Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide innovative financial solutions designed to help
            individuals and businesses grow with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6 text-[#0B3C91]">
                <service.icon size={54} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
  {service.title}
</h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}