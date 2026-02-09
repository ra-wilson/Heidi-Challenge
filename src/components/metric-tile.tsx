type MetricTileProps = {
  label: string;
  value: string | number;
  helper?: string;
};

export function MetricTile({ label, value, helper }: MetricTileProps) {
  return (
    <div className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-4 shadow-panel">
      <p className="text-xs uppercase tracking-[0.2em] text-[#836A6C]">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-[#2F1D21]">{value}</p>
      {helper ? <p className="mt-1 text-sm text-[#836A6C]">{helper}</p> : null}
    </div>
  );
}
