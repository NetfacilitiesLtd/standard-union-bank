"use client";

import { ArrowLeftRight, Send } from "lucide-react";

export default function TransferPage() {
  return (
    <div className="max-w-4xl">

      {/* Header */}

      <div className="mb-8">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center">

            <ArrowLeftRight className="text-white" size={28} />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-slate-900">
              Transfer Money
            </h1>

            <p className="text-slate-500 mt-1">
              Transfer funds securely between accounts.
            </p>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

        <div className="grid gap-6">

          <div>
            <label className="block mb-2 font-semibold">
              From Account
            </label>

            <select className="w-full border border-slate-300 rounded-xl p-4 focus:border-red-600 outline-none">
              <option>Checking Account • ****6789 • USD</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Recipient Account Number
            </label>

            <input
              type="text"
              placeholder="Enter account number"
              className="w-full border border-slate-300 rounded-xl p-4 focus:border-red-600 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Recipient Name
            </label>

            <input
              type="text"
              value="Will appear automatically"
              readOnly
              className="w-full bg-slate-100 border border-slate-300 rounded-xl p-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Amount
            </label>

            <input
              type="number"
              placeholder="0.00"
              className="w-full border border-slate-300 rounded-xl p-4 focus:border-red-600 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Description (Optional)
            </label>

            <textarea
              rows={4}
              placeholder="What's this payment for?"
              className="w-full border border-slate-300 rounded-xl p-4 focus:border-red-600 outline-none"
            />
          </div>

          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3 transition">

            <Send size={20} />

            Continue Transfer

          </button>

        </div>

      </div>

    </div>
  );
}