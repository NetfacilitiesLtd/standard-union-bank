"use client";

export default function SupportingDocuments() {
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Supporting Documents
        </h2>

        <p className="text-slate-500 mt-2">
          Upload the required documents to help us verify your identity and
          process your application.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Passport Photograph */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Passport Photograph <span className="text-red-600">*</span>
          </label>

          <input
            type="file"
            accept="image/*"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2 file:text-white hover:file:bg-red-700"
          />

          <p className="text-sm text-slate-500 mt-2">
            Upload a recent passport-sized photograph.
          </p>
        </div>

        {/* Government ID */}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Government Issued ID <span className="text-red-600">*</span>
          </label>

          <input
            type="file"
            accept="image/*,.pdf"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2 file:text-white hover:file:bg-red-700"
          />

          <p className="text-sm text-slate-500 mt-2">
            Passport, National ID, Driver's License or Residence Permit.
          </p>
        </div>

        

      </div>

    </section>
  );
}