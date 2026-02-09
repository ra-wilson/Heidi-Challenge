import { ExternalHistoryItem, Membership } from "@/lib/mock-data";

const membershipRank: Record<Membership, number> = {
  out: 0,
  Basic: 1,
  Standard: 2,
  Full: 3
};

export function canAccessAnyExternal(membership: Membership, sharingEnabled: boolean) {
  return membership !== "out" && sharingEnabled;
}

export function canViewItem(
  membership: Membership,
  sharingEnabled: boolean,
  required: Exclude<Membership, "out">
) {
  if (!canAccessAnyExternal(membership, sharingEnabled)) {
    return false;
  }

  return membershipRank[membership] >= membershipRank[required];
}

export function visibleExternalItems(
  membership: Membership,
  sharingEnabled: boolean,
  items: ExternalHistoryItem[]
) {
  return items.filter((item) => canViewItem(membership, sharingEnabled, item.visibilityRequired));
}
