import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { subscriptions, categorySpend, forecast } from "@/lib/mock-data";
import { CategoryPie, ForecastLine } from "@/components/charts/spending-charts";

export default function DashboardPage() {
  const monthly = subscriptions.reduce((sum, s) => sum + s.monthly, 0);
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4">
          <Card><p className="text-sm text-white/60">Monthly Spend</p><p className="text-2xl font-bold">₹{monthly}</p></Card>
          <Card><p className="text-sm text-white/60">Yearly Spend</p><p className="text-2xl font-bold">₹{monthly * 12}</p></Card>
          <Card><p className="text-sm text-white/60">Active Subs</p><p className="text-2xl font-bold">{subscriptions.length}</p></Card>
          <Card><p className="text-sm text-white/60">Savings Score</p><p className="text-2xl font-bold text-cyan-300">78/100</p></Card>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card><h3 className="mb-4 font-semibold">Category Spend</h3><CategoryPie data={categorySpend} /></Card>
          <Card><h3 className="mb-4 font-semibold">Spending vs Forecast</h3><ForecastLine data={forecast} /></Card>
        </div>
      </div>
    </AppShell>
  );
}
