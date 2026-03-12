"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  ["/dashboard", "Dashboard"],
  ["/add-subscription", "Add"],
  ["/analytics", "Analytics"],
  ["/ai-insights", "AI Insights"],
  ["/chatbot", "Chatbot"],
  ["/notifications", "Notifications"],
  ["/settings", "Settings"]
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="min-h-screen bg-aurora">
      <div className="mx-auto flex max-w-7xl gap-6 p-6">
        <aside className="glass sticky top-6 h-fit w-56 rounded-2xl p-4">
          <h1 className="mb-4 text-lg font-bold text-cyan-200">SubSense AI</h1>
          <nav className="space-y-2 text-sm">
            {links.map(([href, label]) => (
              <Link key={href} href={href} className={cn("block rounded-lg px-3 py-2 hover:bg-white/10", path === href && "bg-white/15 text-cyan-200")}>
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
