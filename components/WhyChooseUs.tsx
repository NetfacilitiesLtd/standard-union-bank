import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security",
  },
  {
    icon: Globe2,
    title: "Trusted International Banking",
  },
  {
    icon: Clock3,
    title: "24/7 Digital Banking",
  },
  {
    icon: Users,
    title: "Dedicated Relationship Managers",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="uppercase tracking-[5px] text-red-600 text-sm font-semibold">
              Why Choose Standard Union Bank
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
              Banking Built on
              <br />
              Trust, Security
              <br />
              & Innovation
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine innovative digital banking,
              personalized financial expertise and
              world-class security to help individuals,
              families and businesses achieve their
              financial goals with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">

                      <Icon
                        size={22}
                        className="text-red-600"
                      />

                    </div>

                    <span className="font-semibold text-slate-800">
                      {feature.title}
                    </span>

                  </div>
                );
              })}

            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-12 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Learn More

              <ArrowRight size={18} />
            </Link>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <Image
              src="/images/banking-advisor.jpg"
              alt="Banking Advisor"
              width={700}
              height={750}
              className="rounded-3xl shadow-2xl object-cover w-full h-[600px]"
              priority
            />

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">

              <p className="text-4xl font-bold text-red-600">
                25+
              </p>

              <p className="text-gray-600 font-medium">
                Years of Trusted Banking
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}