"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Bell, Bot, ChartNoAxesCombined, CircleDollarSign, PlusCircle, Settings } from "lucide-react";

const links = [
  ["/dashboard", "Dashboard", CircleDollarSign],
  ["/add-subscription", "Add", PlusCircle],
  ["/analytics", "Analytics", ChartNoAxesCombined],
  ["/ai-insights", "AI Insights", Bot],
  ["/chatbot", "Chatbot", Bot],
  ["/notifications", "Notifications", Bell],
  ["/settings", "Settings", Settings]
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
          <div>
            <p className="text-xs text-cyan-200/80">Welcome back 👋</p>
            <h1 className="text-lg font-semibold">SubSense AI</h1>
          </div>
          <div className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs text-cyan-200">Dark Neon Theme</div>
        </div>

        <div className="grid gap-4 md:grid-cols-[230px_1fr]">
          <aside className="glass h-fit rounded-2xl p-3">
            <nav className="grid grid-cols-2 gap-2 md:grid-cols-1">
              {links.map(([href, label, Icon]) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white",
                    path === href && "glow-ring bg-cyan-400/15 text-cyan-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </nav>
          </aside>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
