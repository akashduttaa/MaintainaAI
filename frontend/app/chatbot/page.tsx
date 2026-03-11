"use client";

import { AppShell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatbotPage() {
  return (
    <AppShell>
      <Card className="max-w-3xl">
        <h2 className="mb-4 text-xl font-bold">AI Finance Assistant</h2>
        <div className="mb-4 h-80 space-y-3 overflow-auto rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-cyan-300">Assistant: Hi! Ask me anything about your subscriptions.</p>
          <p>You: Which subscription costs the most?</p>
          <p className="text-cyan-300">Assistant: Adobe Creative Cloud at ₹1670/month is currently your highest.</p>
        </div>
        <div className="flex gap-2"><Input placeholder="Ask SubSense AI..." /><Button>Send</Button></div>
      </Card>
    </AppShell>
  );
}
