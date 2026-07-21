"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Landmark,
  ArrowLeftRight,
  CreditCard,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-blue-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-8 border-b border-blue-800">
        <h1 className="text-2xl font-bold">
          Standard Union Bank
        </h1>

        <p className="text-blue-200 text-sm mt-1">
          Customer Portal
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-700 hover:bg-blue-600 transition"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          <Landmark size={20} />
          Accounts
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          <ArrowLeftRight size={20} />
          Transfers
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          <CreditCard size={20} />
          Cards
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          <FileText size={20} />
          Statements
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          <Settings size={20} />
          Settings
        </Link>

      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-blue-800">
        <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-lg transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </aside>
  );
}