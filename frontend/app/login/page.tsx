import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md space-y-3">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-slate-400">Log in to manage your subscriptions.</p>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button className="w-full">Sign In</Button>
        <p className="text-sm text-slate-400">No account? <Link href="/signup" className="text-cyan-300">Sign up</Link></p>
      </Card>
    </div>
  );
}
