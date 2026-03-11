import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.02]",
        className
      )}
      {...props}
    />
  );
}
