import Link from "next/link";

export default function JoinPage() {
  return (
    <section className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-6 shadow-panel">
      <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">Why join the network?</p>
      <h2 className="mt-2 text-3xl font-semibold text-[#2F1D21]">Contribute to access. Access to treat better.</h2>
      <ul className="mt-4 space-y-2 text-sm text-[#2F1D21]">
        <li>Access external history when members contribute. Patients expect continuity, Members deliver it.</li>
        <li>
          You <strong>control</strong> what you share.
        </li>
        <li>Start with summaries, upgrade later.</li>
      </ul>
      <Link href="/tiers" className="mt-6 inline-flex rounded-md bg-[#2F1D21] px-4 py-2 text-sm font-medium text-[#FBF8ED]">
        View tiers
      </Link>
    </section>
  );
}
