import {
  User,
  Mail,
  Phone,
  MapPin,
  Landmark,
  CreditCard,
  ArrowLeftRight,
  Pencil,
  ShieldCheck,
} from "lucide-react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CustomerHeader from "@/components/customer/CustomerHeader";
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
    },
  });

  if (!customer) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <CustomerHeader customerId={customer.id} />



      {/* Customer Information */}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">

            <User
              size={45}
              className="text-red-600"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              John Doe
            </h2>

            <p className="text-green-600 font-semibold mt-1">
              Active Customer
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="flex items-center gap-4">

            <Mail className="text-red-600" />

            <div>

              <p className="text-sm text-slate-500">
                Email
              </p>

              <p>john@example.com</p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <Phone className="text-red-600" />

            <div>

              <p className="text-sm text-slate-500">
                Phone
              </p>

              <p>+1 (555) 123-4567</p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <MapPin className="text-red-600" />

            <div>

              <p className="text-sm text-slate-500">
                Address
              </p>

              <p>New York, USA</p>

            </div>

          </div>

          <div className="flex items-center gap-4">

            <ShieldCheck className="text-red-600" />

            <div>

              <p className="text-sm text-slate-500">
                KYC Status
              </p>

              <p>Verified</p>

            </div>

          </div>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl border border-slate-200 p-6">

          <Landmark className="text-red-600 mb-4" />

          <p className="text-slate-500">
            Accounts
          </p>

          <h2 className="text-3xl font-bold mt-2">
            2
          </h2>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">

          <CreditCard className="text-red-600 mb-4" />

          <p className="text-slate-500">
            Active Cards
          </p>

          <h2 className="text-3xl font-bold mt-2">
            1
          </h2>

        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">

          <ArrowLeftRight className="text-red-600 mb-4" />

          <p className="text-slate-500">
            Transactions
          </p>

          <h2 className="text-3xl font-bold mt-2">
            148
          </h2>

        </div>

      </div>

      {/* Customer Accounts */}

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
                1002345678
              </td>

              <td>
                Savings
              </td>

              <td>
                USD
              </td>

              <td>
                $24,500.00
              </td>

              <td>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                  Active

                </span>

              </td>

            </tr>

            <tr className="border-t">

              <td className="p-5">
                1002345680
              </td>

              <td>
                Checking
              </td>

              <td>
                USD
              </td>

              <td>
                $7,850.00
              </td>

              <td>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                  Active

                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}