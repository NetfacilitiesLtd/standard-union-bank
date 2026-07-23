import Link from "next/link";
import {
  ArrowLeft,
  Landmark,
  BadgeCheck,
  ArrowLeftRight,
  FileText,
} from "lucide-react";

export default function AccountDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        {/* Back Button */}

        <Link
          href="/dashboard/accounts"
          className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline mb-8"
        >
          <ArrowLeft size={18} />
          Back to My Accounts
        </Link>

        {/* Account Overview */}

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center">

                <Landmark
                  className="text-white"
                  size={36}
                />

              </div>

              <div>

                <h1 className="text-3xl font-bold">
                  Checking Account
                </h1>

                <p className="text-slate-500 mt-1">
                  Account Number: ****6789
                </p>

              </div>

            </div>

            <div className="mt-6 md:mt-0 flex items-center gap-2 text-green-600 font-semibold">

              <BadgeCheck size={20} />

              Active

            </div>

          </div>

          {/* Account Details */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            <div className="bg-slate-50 rounded-2xl p-6">

              <p className="text-slate-500 text-sm">
                Available Balance
              </p>

              <h2 className="text-3xl font-bold mt-2">
                $25,450.75
              </h2>

            </div>

            <div className="bg-slate-50 rounded-2xl p-6">

              <p className="text-slate-500 text-sm">
                Currency
              </p>

              <h2 className="text-2xl font-bold mt-2">
                USD
              </h2>

            </div>

            <div className="bg-slate-50 rounded-2xl p-6">

              <p className="text-slate-500 text-sm">
                Date Opened
              </p>

              <h2 className="text-xl font-bold mt-2">
                12 Jan 2025
              </h2>

            </div>

            <div className="bg-slate-50 rounded-2xl p-6">

              <p className="text-slate-500 text-sm">
                Account Type
              </p>

              <h2 className="text-xl font-bold mt-2">
                Checking
              </h2>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <button className="bg-red-600 hover:bg-red-700 text-white rounded-2xl p-6 flex items-center justify-center gap-3 font-semibold transition">

            <ArrowLeftRight size={22} />

            Transfer Money

          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 flex items-center justify-center gap-3 font-semibold transition">

            <FileText size={22} />

            Download Statement

          </button>

        </div>

        {/* Recent Transactions */}

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm mt-8 p-8">

          <h2 className="text-2xl font-bold">
            Recent Transactions
          </h2>

          <p className="text-slate-500 mt-2 mb-6">
            Transactions for this account
          </p>

          <div className="space-y-5">

            <div className="flex justify-between border-b pb-4">

              <div>

                <h3 className="font-semibold">
                  Salary Deposit
                </h3>

                <p className="text-slate-500 text-sm">
                  Today • 9:15 AM
                </p>

              </div>

              <span className="text-green-600 font-bold">
                +$3,250.00
              </span>

            </div>

            <div className="flex justify-between border-b pb-4">

              <div>

                <h3 className="font-semibold">
                  Electricity Bill
                </h3>

                <p className="text-slate-500 text-sm">
                  Yesterday • 2:45 PM
                </p>

              </div>

              <span className="text-red-600 font-bold">
                -$120.00
              </span>

            </div>

            <div className="flex justify-between">

              <div>

                <h3 className="font-semibold">
                  ATM Withdrawal
                </h3>

                <p className="text-slate-500 text-sm">
                  Monday • 11:30 AM
                </p>

              </div>

              <span className="text-red-600 font-bold">
                -$200.00
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}