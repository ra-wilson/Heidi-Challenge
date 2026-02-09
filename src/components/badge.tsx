import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#836A6C]/30 bg-[#FBF8ED] px-3 py-1 text-xs font-semibold text-[#2F1D21]",
        className
      )}
    >
      {children}
    </span>
  );
}
