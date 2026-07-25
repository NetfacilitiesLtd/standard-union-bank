"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export default function InternationalTransferForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    recipientName: "",
    recipientAddress: "",
    bankName: "",
    bankAddress: "",
    country: "",
    swiftCode: "",
    accountNumber: "",
    currency: "",
    amount: "",
    purpose: "",
    description: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/international-transfers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      alert(result.message);

      if (result.success) {
        setFormData({
          recipientName: "",
          recipientAddress: "",
          bankName: "",
          bankAddress: "",
          country: "",
          swiftCode: "",
          accountNumber: "",
          currency: "",
          amount: "",
          purpose: "",
          description: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Unable to submit transfer.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-semibold">
            Recipient Full Name
          </label>

          <input
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Recipient Address
          </label>

          <input
            name="recipientAddress"
            value={formData.recipientAddress}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Bank Name
          </label>

          <input
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Bank Address
          </label>

          <input
            name="bankAddress"
            value={formData.bankAddress}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Country
          </label>

          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            SWIFT / BIC Code
          </label>

          <input
            name="swiftCode"
            value={formData.swiftCode}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            IBAN / Account Number
          </label>

          <input
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Currency
          </label>

          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          >
            <option value="">Select Currency</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="GHS">GHS - Ghana Cedi</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Amount
          </label>

          <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            type="number"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Purpose
          </label>

          <input
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            type="text"
            className="w-full border border-slate-300 rounded-xl p-4"
            required
          />
        </div>

      </div>

      <div className="mt-6">

        <label className="block mb-2 font-semibold">
          Description (Optional)
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
          className="w-full border border-slate-300 rounded-xl p-4"
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3 transition"
      >
        <Send size={20} />

        {loading ? "Submitting..." : "Continue"}
      </button>
    </form>
  );
}