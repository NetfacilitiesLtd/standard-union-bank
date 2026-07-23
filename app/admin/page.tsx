import {
  Users,
  Landmark,
  DollarSign,
  ArrowLeftRight,
  UserPlus,
  CreditCard,
} from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "2,458",
    icon: Users,
  },
  {
    title: "Total Accounts",
    value: "3,912",
    icon: Landmark,
  },
  {
    title: "Total Deposits",
    value: "$12.8M",
    icon: DollarSign,
  },
  {
    title: "Today's Transactions",
    value: "684",
    icon: ArrowLeftRight,
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Bank Operations Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor customers, accounts, transactions, and bank performance.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500 text-sm">
                    {stat.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
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

      {/* Quick Actions */}

      <div>

        <h2 className="text-2xl font-bold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <button className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition text-left">

            <UserPlus
              className="text-red-600 mb-4"
              size={30}
            />

            <h3 className="font-semibold text-lg">
              Add Customer
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Register a new customer profile.
            </p>

          </button>

          <button className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition text-left">

            <Landmark
              className="text-red-600 mb-4"
              size={30}
            />

            <h3 className="font-semibold text-lg">
              Open Account
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Create a new bank account.
            </p>

          </button>

          <button className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition text-left">

            <ArrowLeftRight
              className="text-red-600 mb-4"
              size={30}
            />

            <h3 className="font-semibold text-lg">
              View Transactions
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Review customer activity.
            </p>

          </button>

          <button className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition text-left">

            <CreditCard
              className="text-red-600 mb-4"
              size={30}
            />

            <h3 className="font-semibold text-lg">
              Issue Card
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Assign a debit or credit card.
            </p>

          </button>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="border-b border-slate-200 px-6 py-4">

          <h2 className="text-xl font-semibold">
            Recent Activity
          </h2>

        </div>

        <div className="divide-y divide-slate-200">

          {[
            "New customer account created.",
            "Business account approved.",
            "Debit card issued to customer.",
            "Large transfer awaiting approval.",
            "Savings account opened.",
          ].map((item, index) => (
            <div
              key={index}
              className="px-6 py-4 hover:bg-slate-50 transition"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}