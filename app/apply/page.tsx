"use client";

import Link from "next/link";
import { ArrowLeft, Landmark } from "lucide-react";

import PersonalInformation from "@/components/application/PersonalInformation";
import ResidentialAddress from "@/components/application/ResidentialAddress";
import Identification from "@/components/application/Identification";
import AccountInformation from "@/components/application/AccountInformation";
import OnlineBankingCredentials from "@/components/application/OnlineBankingCredentials";
import SupportingDocuments from "@/components/application/SupportingDocuments";
import Declaration from "@/components/application/Declaration";
export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-900 to-red-700 rounded-3xl text-white p-10 shadow-lg">

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">

              <Landmark size={34} />

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                Open a Standard Union Bank Account
              </h1>

              <p className="mt-3 text-blue-100 max-w-3xl">
                Complete the application below. Our banking team will review
                your application and supporting documents before your account
                is created.
              </p>

            </div>

          </div>

        </div>

        {/* Progress */}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mt-8 p-6">

          <div className="flex flex-wrap gap-3">

            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              1. Personal Information
            </span>

            <span className="bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm">
              2. Residential Address
            </span>

            <span className="bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm">
              3. Identification
            </span>

            <span className="bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm">
              4. Account Information
            </span>

            <span className="bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm">
              5. Online Banking
            </span>

            <span className="bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm">
              6. Documents
            </span>

            <span className="bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm">
              7. Declaration
            </span>

          </div>

        </div>

        {/* Form */}

        <div className="mt-8 space-y-8">

          <PersonalInformation />
    <ResidentialAddress />
    <Identification />
    <AccountInformation />
    <OnlineBankingCredentials />    
    <SupportingDocuments />
    <Declaration />
        </div>

      </div>

    </main>
  );
}