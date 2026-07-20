import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">

        <div className="lg:w-1/2">
          <p className="uppercase tracking-widest text-blue-200 mb-4">
            Welcome to Standard Union Bank
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Banking You Can
            <span className="text-yellow-400"> Trust.</span>
          </h1>

          <p className="text-lg text-blue-100 mb-8">
            Secure, reliable and innovative banking solutions designed
            for individuals, businesses and organizations. Manage your
            finances confidently with Standard Union Bank.
          </p>

          <div className="flex gap-4">
            <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
              Open an Account
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/bank-hero.jpg"
            alt="Standard Union Bank"
            width={700}
            height={500}
            className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
            priority
          />
        </div>

      </div>
    </section>
  );
}