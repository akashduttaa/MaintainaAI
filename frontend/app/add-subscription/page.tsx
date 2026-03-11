import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddSubscriptionPage() {
  const fields = ["Subscription Name", "Category", "Monthly Price", "Billing Cycle", "Renewal Date", "Payment Method", "Notes"];
  return (
    <AppShell>
      <Card className="max-w-2xl">
        <h2 className="mb-1 text-xl font-bold">Add Subscription</h2>
        <p className="mb-4 text-sm text-slate-400">Track recurring payments in one place.</p>
        <div className="space-y-3">{fields.map((f) => <Input key={f} placeholder={f} />)}</div>
        <Button className="mt-4">Save Subscription</Button>
      </Card>
    </AppShell>
  );
}
