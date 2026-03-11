import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return <div className="flex min-h-screen items-center justify-center bg-aurora p-6"><Card className="w-full max-w-md space-y-3"><h1 className="text-2xl font-bold">Create Account</h1><Input placeholder="Name" /><Input placeholder="Email" /><Input placeholder="Password" type="password" /><Button className="w-full">Create Account</Button><p className="text-sm">Already have account? <Link href="/login" className="text-cyan-300">Login</Link></p></Card></div>;
}
