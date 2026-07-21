"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Recent Transactions
        </h2>

        <button className="text-blue-700 hover:underline text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-5">

        {/* Transaction 1 */}
        <div className="flex items-center justify-between border-b pb-4">

          <div className="flex items-center gap-4">

            <div className="bg-green-100 p-3 rounded-full">
              <ArrowDownLeft
                className="text-green-600"
                size={20}
              />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Salary Payment
              </h3>

              <p className="text-sm text-gray-500">
                Today • 9:30 AM
              </p>
            </div>

          </div>

          <p className="font-bold text-green-600">
            + GH₵15,000.00
          </p>

        </div>

        {/* Transaction 2 */}
        <div className="flex items-center justify-between border-b pb-4">

          <div className="flex items-center gap-4">

            <div className="bg-red-100 p-3 rounded-full">
              <ArrowUpRight
                className="text-red-600"
                size={20}
              />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                ECG Electricity
              </h3>

              <p className="text-sm text-gray-500">
                Yesterday • 6:15 PM
              </p>
            </div>

          </div>

          <p className="font-bold text-red-600">
            - GH₵500.00
          </p>

        </div>

        {/* Transaction 3 */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="bg-red-100 p-3 rounded-full">
              <ArrowUpRight
                className="text-red-600"
                size={20}
              />
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                ATM Withdrawal
              </h3>

              <p className="text-sm text-gray-500">
                2 Days Ago • 11:10 AM
              </p>
            </div>

          </div>

          <p className="font-bold text-red-600">
            - GH₵200.00
          </p>

        </div>

      </div>

    </div>
  );
}