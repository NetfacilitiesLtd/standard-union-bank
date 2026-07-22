import Link from "next/link";
import {
  Landmark,
  BriefcaseBusiness,
  CreditCard,
  Globe2,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    title: "Personal Banking",
    icon: Landmark,
    href: "/personal-banking",
    items: [
      "Savings Accounts",
      "Current Accounts",
      "Personal Loans",
      "Mobile Banking",
    ],
  },
  {
    title: "Business Banking",
    icon: BriefcaseBusiness,
    href: "/business-banking",
    items: [
      "Business Accounts",
      "Payroll Solutions",
      "Trade Finance",
      "Merchant Services",
    ],
  },
  {
    title: "Cards & Payments",
    icon: CreditCard,
    href: "/cards",
    items: [
      "Debit Cards",
      "Credit Cards",
      "Online Payments",
      "Contactless Banking",
    ],
  },
  {
    title: "International Banking",
    icon: Globe2,
    href: "/international",
    items: [
      "Global Transfers",
      "Foreign Exchange",
      "Multi-Currency",
      "International Support",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] text-red-600 text-sm font-semibold">
            Our Banking Solutions
          </p>

          <h2 className="mt-3 text-5xl font-bold text-slate-900">
            Banking Products
            <br />
            For Every Need
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-8">
            Discover secure and innovative banking solutions designed
            to support your everyday finances, business growth and
            international banking needs.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {services.map((service) => {
            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="group bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-xl"
              >

                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition">

                  <Icon
                    size={28}
                    className="text-red-600 group-hover:text-white transition"
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <div className="w-12 h-1 bg-red-600 rounded-full mt-3"></div>

                <ul className="mt-5 space-y-3">

                  {service.items.map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <Check
                        size={17}
                        className="text-red-600"
                      />

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 mt-7 font-semibold text-red-600 group-hover:gap-3 transition-all"
                >
                  Learn More

                  <ArrowRight size={18} />

                </Link>

              </div>

            );
          })}

        </div>

      </div>
    </section>
  );
}