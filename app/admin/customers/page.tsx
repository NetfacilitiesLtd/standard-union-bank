"use client";

import Link from "next/link";
import {
  Search,
  Plus,
  Eye,
  Users,
  UserCheck,
  UserX,
  UserPlus,
} from "lucide-react";

const customers = [
  {
    id: "CUST001",
    name: "John Doe",
    account: "1002345678",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
  },
  {
    id: "CUST002",
    name: "Jane Smith",
    account: "1002345689",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    status: "Active",
  },
  {
    id: "CUST003",
    name: "Michael Brown",
    account: "1002345695",
    email: "michael@example.com",
    phone: "+1 (555) 222-3344",
    status: "Inactive",
  },
];

const stats = [
  {
    title: "Total Customers",
    value: "2,458",
    icon: Users,
  },
  {
    title: "Active Customers",
    value: "2,410",
    icon: UserCheck,
  },
  {
    title: "Inactive Customers",
    value: "48",
    icon: UserX,
  },
  {
    title: "New Today",
    value: "12",
    icon: UserPlus,
  },
];

export default function CustomersPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Customers
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all registered customers.
          </p>

        </div>

        <Link
          href="/admin/customers/new"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
        >
          <Plus size={20} />
          New Customer
        </Link>

      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
            >
              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500 text-sm">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2 text-slate-900">
                    {stat.value}
                  </h2>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">

                  <Icon
                    size={28}
                    className="text-red-600"
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl border border-slate-200 p-5">

        <div className="flex items-center gap-3">

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search by customer name, account number or email..."
            className="w-full outline-none text-slate-900"
          />

        </div>

      </div>

      {/* Customers Table */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr className="text-left">

              <th className="p-5">Customer ID</th>
              <th>Name</th>
              <th>Account Number</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {customers.map((customer) => (

              <tr
                key={customer.id}
                className="border-t hover:bg-slate-50 transition"
              >

                <td className="p-5 font-medium">
                  {customer.id}
                </td>

                <td className="font-semibold">
                  {customer.name}
                </td>

                <td>
                  {customer.account}
                </td>

                <td>
                  {customer.email}
                </td>

                <td>
                  {customer.phone}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>

                </td>

                <td>

                  <Link
                    href={`/admin/customers/${customer.id}`}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                  >
                    <Eye size={18} />
                    View
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* Footer */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 bg-slate-50">

          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold">1–3</span> of{" "}
            <span className="font-semibold">3</span> customers
          </p>

          <div className="flex gap-2">

            <button className="px-4 py-2 rounded-lg border border-slate-300 text-slate-500 hover:bg-slate-100 transition">
              Previous
            </button>

            <button className="px-4 py-2 rounded-lg bg-red-600 text-white">
              1
            </button>

            <button className="px-4 py-2 rounded-lg border border-slate-300 text-slate-500 hover:bg-slate-100 transition">
              Next
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}