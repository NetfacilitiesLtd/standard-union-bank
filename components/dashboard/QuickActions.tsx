"use client";

import {
  ArrowLeftRight,
  Receipt,
  Smartphone,
  CreditCard,
} from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

        <button className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition text-center">

          <ArrowLeftRight
            className="mx-auto text-blue-700 mb-4"
            size={34}
          />

          <p className="font-semibold text-gray-700">
            Transfer
          </p>

        </button>

        <button className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition text-center">

          <Receipt
            className="mx-auto text-blue-700 mb-4"
            size={34}
          />

          <p className="font-semibold text-gray-700">
            Pay Bills
          </p>

        </button>

        <button className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition text-center">

          <Smartphone
            className="mx-auto text-blue-700 mb-4"
            size={34}
          />

          <p className="font-semibold text-gray-700">
            Buy Airtime
          </p>

        </button>

        <button className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition text-center">

          <CreditCard
            className="mx-auto text-blue-700 mb-4"
            size={34}
          />

          <p className="font-semibold text-gray-700">
            Cards
          </p>

        </button>

      </div>

    </div>
  );
}