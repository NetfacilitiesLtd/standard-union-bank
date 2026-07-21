import Link from "next/link";
import {
  Globe,
  Building2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Standard Union Bank
            </h2>

            <p className="text-gray-400 leading-7">
              Providing secure, innovative and reliable banking solutions
              for individuals, businesses and corporate organizations.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition"
              >
                <Building2 size={18} />
              </a>

              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition"
              >
                <Phone size={18} />
              </a>

              <a
                href="#"
                className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition"
              >
                <Mail size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link href="/">Home</Link></li>

              <li><Link href="/about">About</Link></li>

              <li><Link href="/services">Services</Link></li>

              <li><Link href="/contact">Contact</Link></li>

              <li><Link href="/login">Login</Link></li>

            </ul>

          </div>

          {/* Banking */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Banking
            </h3>

            <ul className="space-y-3">

              <li>Personal Banking</li>

              <li>Business Banking</li>

              <li>Loans</li>

              <li>Mobile Banking</li>

              <li>Investments</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin className="text-blue-500" />
                <span>Accra, Ghana</span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-blue-500" />
                <span>+233 XX XXX XXXX</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-blue-500" />
                <span>info@standardunionbank.com</span>
              </div>

            </div>

          </div>

        </div>

        <hr className="border-slate-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © 2026 Standard Union Bank. All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Secure Banking • Trusted Worldwide
          </p>

        </div>

      </div>
    </footer>
  );
}