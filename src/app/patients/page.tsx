"use client";

import { PatientRow } from "@/components/patient-row";
import { patients } from "@/lib/mock-data";
import { canAccessAnyExternal } from "@/lib/network";
import { useAppStore } from "@/lib/store";

export default function PatientsPage() {
  const membership = useAppStore((state) => state.membership);
  const sharingEnabled = useAppStore((state) => state.sharingEnabled);
  const locked = !canAccessAnyExternal(membership, sharingEnabled);

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Patients</p>
        <h2 className="mt-1 text-3xl font-semibold text-[#2F1D21]">Patient list</h2>
      </div>

      <div className="space-y-3">
        {patients.map((patient) => (
          <PatientRow key={patient.id} patient={patient} isLocked={locked} />
        ))}
      </div>
    </section>
  );
}
