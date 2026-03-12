"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroScene } from "@/components/three/hero-scene";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-aurora p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="grid items-center gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-black leading-tight">SubSense AI – Smart Subscription Manager</h1>
            <p className="mt-4 text-white/80">People forget their subscriptions the same way they forget gym memberships. Our AI doesn’t.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/signup"><Button>Get Started</Button></Link>
              <Link href="/dashboard"><Button className="bg-white text-black">View Demo</Button></Link>
            </div>
          </motion.div>
          <Card><HeroScene /></Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            "AI Smart Insights & cancel recommendations",
            "Predictive spending with animated graphs",
            "Chatbot assistant + renewal alerts"
          ].map((f) => <Card key={f}><p>{f}</p></Card>)}
        </section>
      </div>
    </div>
  );
}
