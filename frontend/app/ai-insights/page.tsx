import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";

const insights = [
  "You are spending ₹3200/month on entertainment subscriptions.",
  "Canceling unused subscriptions could save ₹10,000 per year.",
  "Your Spotify subscription has not been opened in 45 days.",
  "Cancel Disney+ to save ₹299/month."
];

export default function AIInsightsPage() {
  return <AppShell><div className="space-y-4">{insights.map((i) => <Card key={i}><p>{i}</p></Card>)}</div></AppShell>;
}
