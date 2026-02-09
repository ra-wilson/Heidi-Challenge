import Link from "next/link";
import { Patient } from "@/lib/mock-data";
import { Badge } from "@/components/badge";

type PatientRowProps = {
  patient: Patient;
  isLocked: boolean;
};

export function PatientRow({ patient, isLocked }: PatientRowProps) {
  const hasExternal = patient.externalHistory.length > 0;

  return (
    <Link
      href={`/patients/${patient.id}`}
      className="grid gap-2 rounded-xl border border-[#836A6C]/20 bg-[#fffaf0] p-4 transition hover:border-[#2F1D21]/40 md:grid-cols-[1.4fr_1fr_auto] md:items-center"
    >
      <p className="font-medium text-[#2F1D21]">{patient.name}</p>
      <p className="text-sm text-[#836A6C]">External history: {hasExternal ? "Yes" : "No"}</p>
      {isLocked && hasExternal ? <Badge className="w-fit">Locked</Badge> : <span />}
    </Link>
  );
}
