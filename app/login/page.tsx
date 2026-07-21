"use client";

import Image from "next/image";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="hidden lg:block relative">

        <Image
          src="/images/bank-hero.jpg"
          alt="Bank"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">

          <div className="text-center text-white px-10">

            <h1 className="text-5xl font-bold mb-6">
              Standard Union Bank
            </h1>

            <p className="text-xl leading-8">
              Secure banking built for individuals,
              businesses and organizations.
            </p>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center px-8 bg-white">

        <div className="w-full max-w-md">

          <h2 className="text-4xl font-bold text-gray-900 mb-3">
  Customer Online Banking
</h2>

<p className="text-gray-600 mb-2">
  Secure access to your Standard Union Bank account.
</p>

<div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium mt-4">
  🔒 Protected with 256-bit SSL Encryption
</div>

          <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    window.location.href = "/verify";
  }}
>

            <div>
  <label className="block mb-2 font-medium text-gray-700">
    Account Number
  </label>

  <input
    type="text"
    placeholder="Enter your account number"
    className="w-full border border-gray-300 rounded-lg px-4 py-4 bg-gray-50 outline-none text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
  />
</div>

            <div>
  <label className="block mb-2 font-medium text-gray-700">
    Password
  </label>

  <div className="flex items-center border border-gray-300 rounded-lg px-4 bg-gray-50 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition">

    <LockKeyhole className="text-gray-500 mr-3" size={20} />

    <input
      type="password"
      placeholder="Enter your password"
      className="w-full bg-transparent py-4 outline-none text-gray-900 placeholder:text-gray-400"
    />

  </div>


            </div>

            <div className="flex items-center justify-between text-sm">

  <label className="flex items-center gap-2 text-gray-700 font-medium">

    <input
      type="checkbox"
      className="w-4 h-4 accent-blue-700"
    />

    Remember Me

  </label>

  <Link
    href="#"
    className="text-blue-700 font-medium hover:text-blue-800 hover:underline transition"
  >
    Forgot Password?
  </Link>

</div>

            <button
  type="submit"
  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg transition"
>
  Continue
</button>

          </form>

          <p className="text-center text-gray-600 mt-8 text-sm leading-6">
            Need help accessing your account?
            {" "}
            Contact Customer Care or visit your nearest Standard Union Bank branch.
          </p>

        </div>

      </div>

    </div>
  );
}