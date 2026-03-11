import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-white/20 bg-black/25 px-3 py-2 text-sm outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20",
        props.className
      )}
    />
  );
}
