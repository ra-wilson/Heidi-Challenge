"use client";

import { Membership } from "@/lib/mock-data";
import { useAppStore } from "@/lib/store";

export default function NetworkSettingsPage() {
  const membership = useAppStore((state) => state.membership);
  const sharingEnabled = useAppStore((state) => state.sharingEnabled);
  const setMembership = useAppStore((state) => state.setMembership);
  const setSharingEnabled = useAppStore((state) => state.setSharingEnabled);

  return (
    <section className="space-y-4 rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Network settings</p>
        <h2 className="mt-1 text-3xl font-semibold text-[#2F1D21]">Opt-in behavior controls</h2>
      </div>

      <label className="flex items-center gap-2 text-sm text-[#2F1D21]">
        <input type="checkbox" checked={sharingEnabled} onChange={(e) => setSharingEnabled(e.target.checked)} />
        Sharing enabled
      </label>

      <div>
        <label className="text-sm text-[#2F1D21]">Tier</label>
        <select
          value={membership}
          onChange={(e) => setMembership(e.target.value as Membership)}
          className="mt-1 block w-full rounded-md border border-[#836A6C]/30 bg-white px-3 py-2 text-sm"
        >
          <option value="out">Out</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Full">Full</option>
        </select>
      </div>

      <div>
        <p className="text-sm font-medium text-[#2F1D21]">Data types shared</p>
        <div className="mt-2 space-y-2 text-sm text-[#836A6C]">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked /> Summaries
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked={membership !== "Basic"} /> Care plans
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked={membership === "Full"} /> Clinical notes
          </label>
        </div>
      </div>
    </section>
  );
}
