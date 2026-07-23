import BalanceCards from "@/components/dashboard/BalanceCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <BalanceCards />

      <QuickActions />

      <RecentTransactions />

    </div>
  );
}