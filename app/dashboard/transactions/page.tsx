"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Search,
  Download,
} from "lucide-react";

const transactions = [
  {
    id: 1,
    date: "22 Jul 2026",
    description: "Salary Deposit",
    reference: "TXN984531",
    type: "Credit",
    amount: "+$3,250.00",
    status: "Completed",
  },
  {
    id: 2,
    date: "21 Jul 2026",
    description: "Transfer to Sarah Johnson",
    reference: "TXN984522",
    type: "Debit",
    amount: "-$450.00",
    status: "Completed",
  },
  {
    id: 3,
    date: "20 Jul 2026",
    description: "ATM Withdrawal",
    reference: "TXN984511",
    type: "Debit",
    amount: "-$200.00",
    status: "Completed",
  },
  {
    id: 4,
    date: "19 Jul 2026",
    description: "Interest Credit",
    reference: "TXN984498",
    type: "Credit",
    amount: "+$15.75",
    status: "Completed",
  },
];

export default function TransactionsPage() {
  return (
    <div>

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Transactions
          </h1>

          <p className="text-slate-500 mt-2">
            Review all account activity.
          </p>

        </div>

        <button className="mt-5 lg:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition">

          <Download size={20} />

          Download Statement

        </button>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6">

        <div className="flex items-center gap-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full outline-none"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr className="text-left">

              <th className="p-5">Date</th>
              <th>Description</th>
              <th>Reference</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((txn) => (

              <tr
                key={txn.id}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5">
                  {txn.date}
                </td>

                <td className="font-semibold">
                  {txn.description}
                </td>

                <td>
                  {txn.reference}
                </td>

                <td>

                  <span
                    className={`inline-flex items-center gap-2 ${
                      txn.type === "Credit"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >

                    {txn.type === "Credit" ? (
                      <ArrowDownLeft size={18} />
                    ) : (
                      <ArrowUpRight size={18} />
                    )}

                    {txn.type}

                  </span>

                </td>

                <td
                  className={`font-bold ${
                    txn.type === "Credit"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {txn.amount}
                </td>

                <td>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                    {txn.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}