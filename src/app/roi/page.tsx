"use client";

import { MetricTile } from "@/components/metric-tile";
import { useAppStore } from "@/lib/store";

export default function RoiPage() {
  const roi = useAppStore((state) => state.roi);

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Commercial ROI</p>
        <h2 className="mt-1 text-3xl font-semibold text-[#2F1D21]">Network value dashboard</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricTile label="External histories viewed" value={roi.externalViews} />
        <MetricTile label="Minutes saved" value={roi.minutesSaved} helper="Estimated clinician time saved" />
        <MetricTile label="Locked history attempts" value={roi.lockedHits} helper="Commercial pressure indicator" />
      </div>
    </section>
  );
}
