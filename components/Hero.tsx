import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2E59] via-[#123F75] to-[#0D4C92]">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="min-h-[720px] grid lg:grid-cols-2 items-center gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <span className="inline-block text-red-400 font-semibold tracking-[3px] uppercase text-sm mb-6">
              Welcome to Standard Union Bank
            </span>

            <h1 className="text-white font-extrabold text-5xl lg:text-7xl leading-tight">
              Banking Beyond
              <br />
              Borders.
            </h1>

            <p className="mt-8 text-blue-100 text-lg leading-9">
              Experience secure, reliable and innovative banking solutions
              designed for individuals, businesses and international clients.
              Manage your finances confidently wherever you are.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <PrimaryButton href="/open-account">
                Open Account
              </PrimaryButton>

              <SecondaryButton href="/login">
                Internet Banking
              </SecondaryButton>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">

            <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-3xl" />

            <Image
              src="/images/bank-hero.jpg"
              alt="Standard Union Bank"
              width={720}
              height={760}
              priority
              className="relative z-10 w-full max-w-[680px] rounded-[32px] shadow-[0_35px_80px_rgba(0,0,0,0.35)] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}