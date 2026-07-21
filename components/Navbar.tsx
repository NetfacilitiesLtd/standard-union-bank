import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo.png"
              alt="Standard Union Bank"
              width={170}
              height={70}
              priority
            />
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center gap-10">

            <Link
              href="/"
              className="text-gray-800 hover:text-red-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              href="#"
              className="text-gray-800 hover:text-red-600 font-medium transition"
            >
              Personal Banking
            </Link>

            <Link
              href="#"
              className="text-gray-800 hover:text-red-600 font-medium transition"
            >
              Business Banking
            </Link>

            <Link
              href="#"
              className="text-gray-800 hover:text-red-600 font-medium transition"
            >
              About Us
            </Link>

            <Link
              href="#"
              className="text-gray-800 hover:text-red-600 font-medium transition"
            >
              Contact
            </Link>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">

            <Link
              href="/open-account"
              className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Open Account
            </Link>

            <Link
              href="/login"
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Login
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}