import { ExternalHistoryItem } from "@/lib/mock-data";
import { Badge } from "@/components/badge";

type HistoryCardProps = {
  item: ExternalHistoryItem;
};

export function HistoryCard({ item }: HistoryCardProps) {
  return (
    <article className="rounded-2xl border border-[#836A6C]/20 bg-[#fffaf0] p-4">
      <div className="flex items-center justify-between gap-3">
        <Badge className="capitalize">{item.type}</Badge>
        <span className="text-xs text-[#836A6C]">{item.date}</span>
      </div>
      <p className="mt-3 text-sm text-[#2F1D21]">{item.content}</p>
      <p className="mt-3 text-xs text-[#836A6C]">Source: {item.clinicName}</p>
    </article>
  );
}
