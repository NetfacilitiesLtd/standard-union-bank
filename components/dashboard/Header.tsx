"use client";

import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200">

      <div className="flex items-center justify-between px-10 py-6">

        {/* Left */}

        <div>

          <p className="text-slate-500 text-sm">
            Welcome Back,
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mt-1">
            John Doe
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your accounts and banking activities.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-4 py-3 w-80">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />

          </div>

          {/* Notification */}

          <button className="relative w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center">

            <Bell size={20} />

            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-600 rounded-full"></span>

          </button>

          {/* User */}

          <button className="flex items-center gap-3 bg-slate-100 rounded-xl px-4 py-2 hover:bg-slate-200 transition">

            <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg">
              J
            </div>

            <div className="hidden lg:block text-left">

              <p className="font-semibold text-slate-900">
                John Doe
              </p>

              <p className="text-sm text-slate-500">
                Personal Account
              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-slate-500"
            />

          </button>

        </div>

      </div>

    </header>
  );
}