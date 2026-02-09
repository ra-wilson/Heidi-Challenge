import { Membership } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type TierCardProps = {
  tier: Exclude<Membership, "out">;
  shareText: string;
  unlockText: string;
  isActive: boolean;
  onSelect: (tier: Exclude<Membership, "out">) => void;
};

export function TierCard({ tier, shareText, unlockText, isActive, onSelect }: TierCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(tier)}
      className={cn(
        "w-full rounded-2xl border p-5 text-left transition",
        isActive
          ? "border-[#2F1D21] bg-[#fffaf0] shadow-panel"
          : "border-[#836A6C]/30 bg-[#fbf8ed] hover:border-[#2F1D21]/50"
      )}
    >
      <p className="text-sm uppercase tracking-[0.2em] text-[#836A6C]">{tier}</p>
      <h3 className="mt-1 text-2xl font-semibold text-[#2F1D21]">{tier} Tier</h3>
      <p className="mt-4 text-sm text-[#2F1D21]"><strong>You share:</strong> {shareText}</p>
      <p className="mt-2 text-sm text-[#2F1D21]"><strong>You unlock:</strong> {unlockText}</p>
    </button>
  );
}
