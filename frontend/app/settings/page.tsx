import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <AppShell>
      <Card className="max-w-xl space-y-3">
        <h2 className="text-xl font-bold">Settings</h2>
        <p className="text-sm text-slate-400">Configure AI + notification preferences.</p>
        <Input placeholder="Email for alerts" />
        <Input placeholder="Push token" />
        <Input placeholder="OpenAI API key (optional)" />
        <Button className="w-fit">Save Preferences</Button>
      </Card>
    </AppShell>
  );
}
