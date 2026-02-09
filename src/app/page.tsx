"use client";

import Link from "next/link";
import { Badge } from "@/components/badge";
import { useAppStore } from "@/lib/store";

export default function DashboardPage() {
  const membership = useAppStore((state) => state.membership);

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-6 shadow-panel">
        <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Shared network</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#2F1D21]">Shared Care Network available</h2>
        <p className="mt-2 max-w-xl text-sm text-[#836A6C]">
          Contribution unlocks reciprocal patient history from partner clinics. More sharing creates richer, more
          commercially valuable data.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Badge className="capitalize">Current membership: {membership}</Badge>
          <Link href="/tiers" className="rounded-md bg-[#2F1D21] px-4 py-2 text-sm font-medium text-[#FBF8ED]">
            Join / Change tier
          </Link>
          <Link href="/patients" className="rounded-md border border-[#2F1D21] px-4 py-2 text-sm font-medium text-[#2F1D21]">
            View patients
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Network coverage</p>
          <p className="mt-2 text-4xl font-semibold text-[#2F1D21]">1,214</p>
          <p className="mt-1 text-sm text-[#836A6C]">clinics opted in</p>
        </div>

        <div className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Try this</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-[#2F1D21]">
            <li>Open patient "Sarah Thompson"</li>
            <li>Click External History (see locked/unlocked)</li>
            <li>Switch tier in top-right controls</li>
            <li>Refresh External History</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
