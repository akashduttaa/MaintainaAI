import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";

export default function NotificationsPage() {
  const items = [
    ["7 days", "Gym renews in 7 days", "in-app"],
    ["3 days", "Notion AI renews in 3 days", "email"],
    ["1 day", "Spotify renews tomorrow", "push"]
  ];

  return (
    <AppShell>
      <Card>
        <h2 className="mb-4 text-xl font-bold">Renewal Timeline</h2>
        <ul className="space-y-2">
          {items.map(([time, text, type]) => (
            <li key={text} className="flex items-center justify-between rounded-lg border border-white/10 p-3">
              <div>
                <p>{text}</p>
                <p className="text-xs text-slate-500">Alert in {time}</p>
              </div>
              <span className="rounded-full bg-cyan-400/20 px-2 py-1 text-xs uppercase text-cyan-200">{type}</span>
            </li>
          ))}
        </ul>
      </Card>
    </AppShell>
  );
}
