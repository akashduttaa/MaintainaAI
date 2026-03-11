"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroScene } from "@/components/three/hero-scene";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function LandingPage() {
  return (
    <div className="min-h-screen p-5 md:p-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="grid items-center gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1 text-xs text-cyan-100">AI Powered • Gen-Z Fintech</div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">SubSense AI – Smart Subscription Manager</h1>
            <p className="max-w-xl text-slate-300">People forget their subscriptions the same way they forget gym memberships. Our AI doesn’t.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/signup"><Button>Get Started</Button></Link>
              <Link href="/dashboard"><Button className="bg-white text-black">Live Demo</Button></Link>
            </div>
          </motion.div>
          <Card className="overflow-hidden p-0"><HeroScene /></Card>
        </section>

        <motion.section {...fade} className="grid gap-4 md:grid-cols-3">
          {["AI Smart Insights", "Predictive spend alerts", "Finance chatbot assistant"].map((f) => (
            <Card key={f} className="transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"><p className="font-medium">{f}</p></Card>
          ))}
        </motion.section>

        <motion.section {...fade} className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h3 className="mb-3 font-semibold">Demo Dashboard Preview</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Monthly", "₹5,036"],
                ["Yearly", "₹60,432"],
                ["Savings Score", "78/100"]
              ].map(([k, v]) => <div key={k} className="rounded-xl border border-white/10 bg-black/20 p-3"><p className="text-xs text-slate-400">{k}</p><p className="text-lg font-bold text-cyan-200">{v}</p></div>)}
            </div>
          </Card>
          <Card>
            <h3 className="mb-3 font-semibold">What users say</h3>
            <p className="text-slate-300">“Finally, a dashboard that makes subscriptions feel clear, modern, and actionable.”</p>
            <p className="mt-3 text-slate-500">— Early Hackathon Tester</p>
          </Card>
        </motion.section>

        <motion.section {...fade} className="glass rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold">Ready to stop subscription leakage?</h2>
          <p className="mt-2 text-slate-300">Track everything. Predict future spend. Cancel with confidence.</p>
          <Link href="/signup" className="mt-4 inline-block"><Button>Start Free</Button></Link>
        </motion.section>
      </div>
    </div>
  );
}
