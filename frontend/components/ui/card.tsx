import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("glass rounded-2xl p-5 transition duration-300 hover:border-cyan-300/30", className)}>{children}</div>;
}
