"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { HistoryCard } from "@/components/history-card";
import { LockedPanel } from "@/components/locked-panel";
import { patients } from "@/lib/mock-data";
import { canAccessAnyExternal, visibleExternalItems } from "@/lib/network";
import { useAppStore } from "@/lib/store";

export default function PatientProfilePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const patient = patients.find((entry) => entry.id === params.id);
  const [activeTab, setActiveTab] = useState<"local" | "external">("local");
  const membership = useAppStore((state) => state.membership);
  const sharingEnabled = useAppStore((state) => state.sharingEnabled);
  const addExternalView = useAppStore((state) => state.addExternalView);
  const incrementLockedHits = useAppStore((state) => state.incrementLockedHits);

  if (!patient) {
    return (
      <section className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-6">
        <h2 className="text-2xl font-semibold text-[#2F1D21]">Patient not found</h2>
        <Link href="/patients" className="mt-4 inline-flex rounded-md border border-[#2F1D21] px-3 py-2 text-sm text-[#2F1D21]">
          Back to patients
        </Link>
      </section>
    );
  }

  const unlocked = canAccessAnyExternal(membership, sharingEnabled);
  const visibleItems = visibleExternalItems(membership, sharingEnabled, patient.externalHistory);
  const visibleIds = useMemo(() => new Set(visibleItems.map((item) => item.id)), [visibleItems]);
  const restrictedItems = patient.externalHistory.filter((item) => !visibleIds.has(item.id));

  const openExternalTab = () => {
    setActiveTab("external");
    if (!unlocked) {
      incrementLockedHits();
    } else {
      addExternalView(patient.estimatedMinutesSaved);
    }
  };

  const handleRestrictedViewClick = () => {
    incrementLockedHits();
    router.push("/tiers");
  };

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Patient profile</p>
          <h2 className="mt-1 text-3xl font-semibold text-[#2F1D21]">{patient.name}</h2>
          <p className="mt-1 text-sm text-[#836A6C]">DOB: {patient.dob}</p>
        </div>
        <Link href="/patients" className="rounded-md border border-[#2F1D21] px-3 py-2 text-sm text-[#2F1D21]">
          Back to patients
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("local")}
          className={`rounded-md px-4 py-2 text-sm ${
            activeTab === "local" ? "bg-[#2F1D21] text-[#FBF8ED]" : "border border-[#836A6C]/30 text-[#2F1D21]"
          }`}
        >
          Local History
        </button>
        <button
          type="button"
          onClick={openExternalTab}
          className={`rounded-md px-4 py-2 text-sm ${
            activeTab === "external" ? "bg-[#2F1D21] text-[#FBF8ED]" : "border border-[#836A6C]/30 text-[#2F1D21]"
          }`}
        >
          External History
        </button>
      </div>

      {activeTab === "local" ? (
        <div className="space-y-2 rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-5">
          {patient.localHistory.map((entry) => (
            <p key={entry} className="text-sm text-[#2F1D21]">
              {entry}
            </p>
          ))}
        </div>
      ) : null}

      {activeTab === "external" && !unlocked ? (
        <LockedPanel hasExternalHistory={patient.externalHistory.length > 0} />
      ) : null}

      {activeTab === "external" && unlocked ? (
        <div className="space-y-4">
          <p className="rounded-lg bg-[#BBAD64]/20 px-3 py-2 text-sm text-[#2F1D21]">
            Estimated {patient.estimatedMinutesSaved} minutes saved on assessment.
          </p>

          {patient.externalHistory.length === 0 ? (
            <div className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-5 text-sm text-[#836A6C]">
              No external history has been contributed for this patient.
            </div>
          ) : (
            <>
              {visibleItems.length > 0 ? (
                <div className="space-y-3">
                  {visibleItems.map((item) => (
                    <HistoryCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-5 text-sm text-[#836A6C]">
                  No external entries are available at your current tier.
                </div>
              )}

              {restrictedItems.length > 0 ? (
                <div className="space-y-3">
                  {restrictedItems.map((item) => (
                    <article key={item.id} className="rounded-2xl border border-[#836A6C]/20 bg-[#f3ede2] p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium capitalize text-[#2F1D21]">{item.type}</p>
                        <span className="text-xs text-[#836A6C]">{item.date}</span>
                      </div>
                      <p className="mt-2 text-sm text-[#836A6C]">
                        Restricted at this tier. Upgrade to <strong className="capitalize">{item.visibilityRequired}</strong> to
                        view.
                      </p>
                      <button
                        type="button"
                        onClick={handleRestrictedViewClick}
                        className="mt-3 rounded-md border border-[#2F1D21] px-3 py-2 text-sm font-medium text-[#2F1D21]"
                      >
                        Upgrade to view
                      </button>
                    </article>
                  ))}
                </div>
              ) : null}
            </>
          )}
        </div>
      ) : null}
    </section>
  );
}
