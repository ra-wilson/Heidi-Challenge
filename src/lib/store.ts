import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Membership } from "@/lib/mock-data";

type RoiState = {
  externalViews: number;
  minutesSaved: number;
  lockedHits: number;
};

type AppState = {
  membership: Membership;
  sharingEnabled: boolean;
  roi: RoiState;
  setMembership: (membership: Membership) => void;
  setSharingEnabled: (enabled: boolean) => void;
  addExternalView: (minutesSaved: number) => void;
  incrementLockedHits: () => void;
  resetDemo: () => void;
};

const initialRoi: RoiState = {
  externalViews: 0,
  minutesSaved: 0,
  lockedHits: 0
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      membership: "out",
      sharingEnabled: false,
      roi: initialRoi,
      setMembership: (membership) => set({ membership }),
      setSharingEnabled: (sharingEnabled) => set({ sharingEnabled }),
      addExternalView: (minutesSaved) =>
        set((state) => ({
          roi: {
            ...state.roi,
            externalViews: state.roi.externalViews + 1,
            minutesSaved: state.roi.minutesSaved + minutesSaved
          }
        })),
      incrementLockedHits: () =>
        set((state) => ({
          roi: {
            ...state.roi,
            lockedHits: state.roi.lockedHits + 1
          }
        })),
      resetDemo: () =>
        set({
          membership: "out",
          sharingEnabled: false,
          roi: initialRoi
        })
    }),
    {
      name: "kinetic-share-state"
    }
  )
);
