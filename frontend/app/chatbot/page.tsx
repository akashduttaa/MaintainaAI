"use client";

import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export default function ChatbotPage() {
  return (
    <AppShell>
      <Card className="relative max-w-3xl overflow-hidden">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold"><Bot className="h-5 w-5 text-cyan-300" /> AI Finance Assistant</h2>
        <div className="scrollbar-soft mb-4 h-80 space-y-3 overflow-auto rounded-xl border border-white/10 bg-black/25 p-4">
          <p className="rounded-xl bg-cyan-500/15 p-3 text-cyan-100">Assistant: Hi! Ask me anything about your subscriptions.</p>
          <p className="rounded-xl bg-white/5 p-3">You: Which subscription costs the most?</p>
          <p className="rounded-xl bg-cyan-500/15 p-3 text-cyan-100">Assistant: Adobe Creative Cloud at ₹1670/month is your highest.</p>
          <p className="rounded-xl bg-white/5 p-3">You: What should I cancel to save money?</p>
          <p className="rounded-xl bg-cyan-500/15 p-3 text-cyan-100">Assistant: Spotify appears unused. Canceling it saves ₹119/month.</p>
        </div>
        <div className="flex gap-2"><Input placeholder="Ask SubSense AI..." /><Button>Send</Button></div>
      </Card>
    </AppShell>
  );
}
