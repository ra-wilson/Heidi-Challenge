"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Membership } from "@/lib/mock-data";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/join", label: "Join" },
  { href: "/tiers", label: "Tiers" },
  { href: "/patients", label: "Patients" },
  { href: "/roi", label: "ROI" },
  { href: "/settings/network", label: "Settings" }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const membership = useAppStore((state) => state.membership);
  const sharingEnabled = useAppStore((state) => state.sharingEnabled);
  const setMembership = useAppStore((state) => state.setMembership);
  const setSharingEnabled = useAppStore((state) => state.setSharingEnabled);
  const resetDemo = useAppStore((state) => state.resetDemo);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-[#836A6C]/20 bg-[#FBF8ED]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Kinetic Share</p>
            <h1 className="text-xl font-semibold text-[#2F1D21]">Shared Care Network</h1>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm",
                  pathname === item.href
                    ? "bg-[#2F1D21] text-[#FBF8ED]"
                    : "border border-[#836A6C]/30 text-[#2F1D21]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <aside className="fixed right-4 top-24 z-40 w-72 rounded-2xl border border-[#836A6C]/25 bg-[#fffaf0] p-4 shadow-panel">
        <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Demo Controls</p>

        <label className="mt-3 block text-xs text-[#836A6C]">Clinic status</label>
        <select
          className="mt-1 w-full rounded-md border border-[#836A6C]/30 bg-white px-2 py-2 text-sm text-[#2F1D21]"
          value={membership}
          onChange={(e) => setMembership(e.target.value as Membership)}
        >
          <option value="out">Out</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Full">Full</option>
        </select>

        <label className="mt-3 flex items-center gap-2 text-sm text-[#2F1D21]">
          <input
            type="checkbox"
            checked={sharingEnabled}
            onChange={(e) => setSharingEnabled(e.target.checked)}
          />
          Sharing enabled
        </label>

        <button
          type="button"
          onClick={resetDemo}
          className="mt-4 w-full rounded-md border border-[#2F1D21] px-3 py-2 text-sm font-medium text-[#2F1D21]"
        >
          Reset demo
        </button>
      </aside>

      <main className="mx-auto max-w-6xl px-4 pb-12 pt-6 md:pr-80">{children}</main>
    </div>
  );
}
