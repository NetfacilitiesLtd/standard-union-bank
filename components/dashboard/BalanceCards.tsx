"use client";

import { CreditCard, Landmark, Wallet } from "lucide-react";

export default function BalanceCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {/* Current Account */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl p-6 shadow-lg">

        <div className="flex justify-between items-center">

          <div>
            <p className="text-blue-100 text-sm">
              Current Account
            </p>

            <h2 className="text-4xl font-bold mt-3">
              GH₵125,430.55
            </h2>

            <p className="mt-6 text-blue-100">
              Available Balance
            </p>
          </div>

          <div className="space-y-3 text-right">

            <Landmark size={34} />

            <CreditCard size={30} />
          </div>

        </div>

        <div className="mt-8 flex justify-between text-sm">

          <div>
            <p className="text-blue-200">
              Account Number
            </p>

            <p className="font-semibold">
              ****3456
            </p>
          </div>

          <div className="text-right">

            <p className="text-blue-200">
              Status
            </p>

            <p className="font-semibold text-green-300">
              ● Active
            </p>

          </div>

        </div>

      </div>

      {/* Savings Account */}

      <div className="bg-white rounded-2xl shadow-lg p-6 border">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-500 text-sm">
              Savings Account
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              GH₵54,800.00
            </h2>

            <p className="mt-6 text-gray-500">
              Total Savings
            </p>

          </div>

          <Wallet
            className="text-blue-700"
            size={40}
          />

        </div>

        <div className="mt-8 flex justify-between text-sm">

          <div>

            <p className="text-gray-500">
              Account Number
            </p>

            <p className="font-semibold">
              ****8721
            </p>

          </div>

          <div className="text-right">

            <p className="text-gray-500">
              Interest Rate
            </p>

            <p className="font-semibold text-green-600">
              8.5% p.a.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}