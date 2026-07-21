import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import BalanceCards from "@/components/dashboard/BalanceCards";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">

          <BalanceCards />

          <QuickActions />

          <RecentTransactions />

        </div>

      </div>

    </main>
  );
}