import {
  ArrowDownLeft,
  ArrowUpRight,
  ShoppingBag,
  Landmark,
} from "lucide-react";

const transactions = [
  {
    title: "Salary Deposit",
    date: "Today • 9:15 AM",
    amount: "+$3,250.00",
    incoming: true,
    icon: Landmark,
  },
  {
    title: "Transfer to Sarah Johnson",
    date: "Yesterday • 4:42 PM",
    amount: "-$450.00",
    incoming: false,
    icon: ArrowUpRight,
  },
  {
    title: "Amazon Purchase",
    date: "Yesterday • 11:10 AM",
    amount: "-$126.90",
    incoming: false,
    icon: ShoppingBag,
  },
  {
    title: "Cash Deposit",
    date: "Monday • 2:30 PM",
    amount: "+$800.00",
    incoming: true,
    icon: ArrowDownLeft,
  },
];

export default function RecentTransactions() {
  return (
    <section className="px-10 mt-10 pb-10">

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">

        <div className="flex items-center justify-between p-6 border-b border-slate-200">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Recent Transactions
            </h2>

            <p className="text-slate-500 mt-1">
              Your latest account activity
            </p>

          </div>

          <button className="text-red-600 font-semibold hover:underline">
            View All
          </button>

        </div>

        <div>

          {transactions.map((transaction) => {
            const Icon = transaction.icon;

            return (
              <div
                key={transaction.title}
                className="flex items-center justify-between p-6 border-b last:border-none border-slate-100 hover:bg-slate-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      transaction.incoming
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={
                        transaction.incoming
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      {transaction.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {transaction.date}
                    </p>

                  </div>

                </div>

                <p
                  className={`text-lg font-bold ${
                    transaction.incoming
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}