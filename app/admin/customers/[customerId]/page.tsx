import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CustomerHeader from "@/components/customer/CustomerHeader";
import CustomerInformation from "@/components/customer/CustomerInformation";
import CustomerSummary from "@/components/customer/CustomerSummary";
import TransactionHistory from "@/components/customer/TransactionHistory";

export default async function CustomerDetails({
  params,
}: {
  params: Promise<{ customerId: string }>;
}) {
  const { customerId } = await params;

  const customer = await prisma.customer.findUnique({
    where: {
      id: customerId,
    },
    include: {
      application: true,
      transactions: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!customer) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <CustomerHeader customerId={customer.id} />

      <CustomerInformation customer={customer} />

      <CustomerSummary customer={customer} />

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-xl font-semibold">
            Customer Accounts
          </h2>
        </div>

        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-5">
                Account Number
              </th>

              <th className="text-left">
                Type
              </th>

              <th className="text-left">
                Currency
              </th>

              <th className="text-left">
                Balance
              </th>

              <th className="text-left">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-5">
                {customer.accountNumber}
              </td>

              <td>
                {customer.application.accountType}
              </td>

              <td>
                {customer.application.preferredCurrency}
              </td>

              <td>
                {customer.balance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {customer.accountStatus}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <TransactionHistory
        transactions={customer.transactions}
      />
    </div>
  );
}