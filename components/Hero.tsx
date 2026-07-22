import Link from "next/link";
import { ShieldCheck, Clock3, Headset } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[850px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Soft White Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center">

        <div className="max-w-xl pt-24">

          <p className="uppercase tracking-[6px] text-red-600 font-semibold text-sm mb-6">
            Welcome to Standard Union Bank
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-[0.95] text-slate-900">
            Banking
            <br />
            Beyond
            <br />
            Borders.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Experience secure, reliable and innovative banking solutions
            designed for individuals, businesses and international clients.
            Manage your finances confidently wherever you are.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              href="/open-account"
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
            >
              Open Account
            </Link>

            <Link
              href="/login"
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 font-semibold px-8 py-4 rounded-xl"
            >
              Internet Banking
            </Link>

          </div>

          <div className="flex flex-wrap gap-8 mt-12 text-slate-800">

            <div className="flex items-center gap-2">
              <ShieldCheck
                size={22}
                className="text-blue-700"
              />
              <span className="font-medium">
                Secure Banking
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3
                size={22}
                className="text-blue-700"
              />
              <span className="font-medium">
                24/7 Access
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Headset
                size={22}
                className="text-blue-700"
              />
              <span className="font-medium">
                Dedicated Support
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}