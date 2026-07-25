import BalanceCards from "@/components/dashboard/BalanceCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

import { getCurrentCustomer } from "@/lib/currentCustomer";

export default async function DashboardPage() {
  const customer = await getCurrentCustomer();

  return (
    <div className="space-y-8">
      <BalanceCards customer={customer} />
      <QuickActions customer={customer} />
      <RecentTransactions customer={customer} />
    </div>
  );
}