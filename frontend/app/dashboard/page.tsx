"use client";

import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { subscriptions, categorySpend, forecast } from "@/lib/mock-data";
import { CategoryPie, ForecastLine } from "@/components/charts/spending-charts";

export default function DashboardPage() {
  const monthly = subscriptions.reduce((sum, s) => sum + s.monthly, 0);

  return (
    <AppShell>
      <div className="space-y-5">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-4">
          {[ ["Monthly Spend", `₹${monthly}`], ["Yearly Spend", `₹${monthly * 12}`], ["Active Subs", `${subscriptions.length}`], ["Savings Score", "78/100"] ].map(([title, value]) => (
            <Card key={title} className="transition hover:-translate-y-1">
              <p className="text-sm text-slate-400">{title}</p>
              <p className="text-2xl font-bold text-cyan-200">{value}</p>
            </Card>
          ))}
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h3 className="mb-4 font-semibold">Category Spend</h3>
            <CategoryPie data={categorySpend} />
          </Card>
          <Card>
            <h3 className="mb-4 font-semibold">Spending vs Forecast</h3>
            <ForecastLine data={forecast} />
          </Card>
        </div>

        <Card>
          <h3 className="mb-4 font-semibold">Upcoming Renewals</h3>
          <div className="grid gap-2">
            {subscriptions.map((s) => (
              <div key={s.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-3">
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-xs text-slate-400">{s.category} • {s.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-cyan-200">₹{s.monthly}</p>
                  <p className="text-xs text-slate-400">Renews {s.renewal}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
