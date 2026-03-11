import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "rounded-xl bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-200 hover:scale-[1.02] hover:shadow-cyan-400/40",
        className
      )}
      {...props}
    />
  );
}
