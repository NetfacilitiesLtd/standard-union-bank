"use client";

import { Bell, Search, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-5">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Good Afternoon,
          </h2>

          <p className="text-gray-500 mt-1">
            Welcome back to Standard Union Bank.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <div className="relative hidden md:block">
            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg outline-none focus:border-blue-600 w-64"
            />
          </div>

          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell size={22} />

            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          <div className="flex items-center gap-3">

            <UserCircle
              size={42}
              className="text-blue-700"
            />

            <div className="hidden md:block">
              <p className="font-semibold">
                John Doe
              </p>

              <p className="text-sm text-gray-500">
                Premium Customer
              </p>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}