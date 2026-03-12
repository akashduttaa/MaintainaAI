import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return <AppShell><Card className="max-w-xl space-y-3"><h2 className="text-xl font-bold">Settings</h2><Input placeholder="Email for alerts" /><Input placeholder="Push token" /><Input placeholder="OpenAI API key (optional)" /></Card></AppShell>;
}
