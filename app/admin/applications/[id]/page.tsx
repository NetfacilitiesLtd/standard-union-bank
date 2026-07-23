import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplicationDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const application = await prisma.application.findUnique({
  where: {
    id,
  },
});

if (!application) {
  notFound();
}

  return (
    <div className="space-y-8">

      <div className="bg-white rounded-2xl border border-slate-200 p-8">

        <h1 className="text-3xl font-bold mb-2">
          Customer Application
        </h1>

        <p className="text-slate-500">
          Review the submitted application.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-4">
            Personal Information
          </h2>

          <p><strong>Name:</strong> {application.firstName} {application.lastName}</p>
          <p><strong>Email:</strong> {application.email}</p>
          <p><strong>Phone:</strong> {application.phoneNumber}</p>
          <p><strong>Gender:</strong> {application.gender}</p>
          <p><strong>Nationality:</strong> {application.nationality}</p>
          <p><strong>Date of Birth:</strong> {application.dateOfBirth.toLocaleDateString()}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-4">
            Address
          </h2>

          <p><strong>Address:</strong> {application.residentialAddress}</p>
          <p><strong>City:</strong> {application.city}</p>
          <p><strong>State:</strong> {application.state}</p>
          <p><strong>Country:</strong> {application.country}</p>
          <p><strong>Postal Code:</strong> {application.postalCode}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-4">
            Identification
          </h2>

          <p><strong>ID Type:</strong> {application.idType}</p>
          <p><strong>ID Number:</strong> {application.idNumber}</p>
          <p><strong>ID Expiry:</strong> {application.idExpiryDate.toLocaleDateString()}</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-lg mb-4">
            Banking Details
          </h2>

          <p><strong>Account Type:</strong> {application.accountType}</p>
          <p><strong>Currency:</strong> {application.preferredCurrency}</p>
          <p><strong>Occupation:</strong> {application.occupation}</p>
          <p><strong>Employer:</strong> {application.employer || "N/A"}</p>
          <p><strong>Status:</strong> {application.status}</p>
        </div>

      </div>

      <div className="flex gap-4">

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
          Approve Application
        </button>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
          Reject Application
        </button>

      </div>

    </div>
  );
}