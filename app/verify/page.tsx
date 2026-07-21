import Link from "next/link";

export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            Standard Union Bank
          </h1>

          <p className="text-gray-500 mt-2">
            Identity Verification
          </p>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome Back
          </h2>

          <p className="text-gray-600 mt-2">
            Please enter your 6-digit Security PIN.
          </p>
        </div>

        <div className="flex justify-between gap-2 mb-8">
          <input
            type="password"
            maxLength={1}
            className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />

          <input
            type="password"
            maxLength={1}
            className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />

          <input
            type="password"
            maxLength={1}
            className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />

          <input
            type="password"
            maxLength={1}
            className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />

          <input
            type="password"
            maxLength={1}
            className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />

          <input
            type="password"
            maxLength={1}
            className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
          />
        </div>

        <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-lg transition">
          Verify Identity
        </button>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-sm text-gray-700 text-center">
            🔒 Your identity is protected with 256-bit SSL Encryption.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-blue-700 hover:underline"
          >
            ← Back to Login
          </Link>
        </div>

      </div>
    </main>
  );
}