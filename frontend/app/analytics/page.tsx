import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { CategoryPie, ForecastLine } from "@/components/charts/spending-charts";
import { categorySpend, forecast } from "@/lib/mock-data";

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card><h2 className="mb-3 text-lg font-semibold">Spending Breakdown by Category</h2><CategoryPie data={categorySpend} /></Card>
        <Card><h2 className="mb-3 text-lg font-semibold">Growth + Forecast Trend</h2><ForecastLine data={forecast} /></Card>
      </div>
    </AppShell>
  );
}
