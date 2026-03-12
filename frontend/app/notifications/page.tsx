import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";

export default function NotificationsPage() {
  const items = ["Gym renews in 7 days", "Notion AI renews in 3 days", "Spotify renews tomorrow"];
  return <AppShell><Card><h2 className="mb-4 text-xl font-bold">Renewal Timeline</h2><ul className="space-y-2">{items.map((i) => <li key={i} className="rounded-lg border border-white/10 p-3">{i}</li>)}</ul></Card></AppShell>;
}
