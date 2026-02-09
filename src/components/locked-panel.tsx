import Link from "next/link";

type LockedPanelProps = {
  hasExternalHistory: boolean;
};

export function LockedPanel({ hasExternalHistory }: LockedPanelProps) {
  return (
    <div className="rounded-2xl border border-[#836A6C]/25 bg-[#fffaf0] p-5">
      <h3 className="text-lg font-semibold text-[#2F1D21]">Network data locked</h3>
      <p className="mt-2 text-sm text-[#836A6C]">
        {hasExternalHistory
          ? "External history exists but is unavailable at your current contribution level."
          : "No external history has been contributed for this patient yet."}
      </p>
      <Link
        href="/join"
        className="mt-4 inline-flex rounded-md bg-[#2F1D21] px-4 py-2 text-sm font-medium text-[#FBF8ED]"
      >
        Join network
      </Link>
    </div>
  );
}
