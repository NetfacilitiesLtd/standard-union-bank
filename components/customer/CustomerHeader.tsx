import { Pencil } from "lucide-react";

interface CustomerHeaderProps {
  customerId: string;
}

export default function CustomerHeader({
  customerId,
}: CustomerHeaderProps) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Customer Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Customer ID: {customerId}
        </p>
      </div>

      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition">
        <Pencil size={18} />
        Edit Customer
      </button>
    </div>
  );
}