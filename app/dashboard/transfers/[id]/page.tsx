import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { verifyTransferCode } from "@/lib/actions/customer";

export default async function TransferPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const transfer = await prisma.internationalTransfer.findUnique({
    where: {
      id,
    },
  });

  if (!transfer) {
    return <div>Transfer not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-8">
          International Transfer
        </h1>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-slate-500">
              Recipient
            </p>

            <p className="font-semibold">
              {transfer.recipientName}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Bank
            </p>

            <p className="font-semibold">
              {transfer.bankName}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Amount
            </p>

            <p className="font-semibold">
              {transfer.currency}{" "}
              {transfer.amount.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Status
            </p>

            <p className="font-semibold">
              {transfer.status}
            </p>
          </div>

          {transfer.status === "Pending Transfer Code" ? (
            <div className="border-t pt-6">
              <p className="text-slate-600 mb-4">
                Please enter the transfer code provided to you by the bank.
              </p>

              <form action={verifyTransferCode} className="space-y-4">
                <input
                  type="hidden"
                  name="transferId"
                  value={transfer.id}
                />

                <input
                  type="text"
                  name="code"
                  placeholder="Enter Transfer Code"
                  className="w-full border rounded-xl px-4 py-3"
                  required
                />

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
                >
                  Verify Code
                </button>
              </form>
            </div>
          ) : (
            <div className="border-t pt-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-green-700">
                  ✅ Transfer Code Verified
                </h2>

                <p className="mt-3 text-slate-700">
                  Your transfer is now being processed by Standard Union Bank.
                </p>

                <Link
                  href="/dashboard"
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors"
                >
                  Return to Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}