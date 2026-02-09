"use client";

import { useRouter } from "next/navigation";
import { TierCard } from "@/components/tier-card";
import { useAppStore } from "@/lib/store";

const tierData = [
  {
    tier: "Basic" as const,
    shareText: "Contribute summary snapshots",
    unlockText: "External summaries from contributors"
  },
  {
    tier: "Standard" as const,
    shareText: "Summaries and care plans",
    unlockText: "Summaries and plans"
  },
  {
    tier: "Full" as const,
    shareText: "Summaries, plans, and clinical notes",
    unlockText: "Complete external patient history"
  }
];

export default function TiersPage() {
  const router = useRouter();
  const membership = useAppStore((state) => state.membership);
  const setMembership = useAppStore((state) => state.setMembership);
  const setSharingEnabled = useAppStore((state) => state.setSharingEnabled);

  const selectTier = (tier: "Basic" | "Standard" | "Full") => {
    setMembership(tier);
    setSharingEnabled(true);
    router.push("/patients");
  };

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Tier selection</p>
        <h2 className="mt-1 text-3xl font-semibold text-[#2F1D21]">Choose your contribution tier</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {tierData.map((tier) => (
          <TierCard
            key={tier.tier}
            tier={tier.tier}
            shareText={tier.shareText}
            unlockText={tier.unlockText}
            isActive={membership === tier.tier}
            onSelect={selectTier}
          />
        ))}
      </div>
    </section>
  );
}
