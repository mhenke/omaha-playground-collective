import { create } from "zustand";

type IncludeKeys = Record<string, IncludeKey>;

type State = {
  ageRange: number | null;
  surface: number | null;
  keys: IncludeKeys;
};

export type IncludeKey = {
  displayName: string;
  value: boolean;
  showOnFilter: boolean;
};

const includeKeys: IncludeKeys = {
  restrooms: { displayName: "Restrooms", value: false, showOnFilter: true },
  shade: { displayName: "Shade", value: false, showOnFilter: true },
  accessibleEquip: {
    displayName: "Accessible Equipment",
    value: false,
    showOnFilter: true,
  },
  picnicAreas: {
    displayName: "Picnic Areas",
    value: false,
    showOnFilter: false,
  },
  benches: { displayName: "Benches", value: false, showOnFilter: false },
  adaCompliance: {
    displayName: "ADA Compliance",
    value: false,
    showOnFilter: false,
  },
};

type Action = {
  updateAgeRange: (ageRange: State["ageRange"]) => void;
  updateSurface: (surface: State["surface"]) => void;
  updateKey: (key: string, value: boolean) => void;
};

export const useFilterStore = create<State & Action>((set) => ({
  ageRange: null,
  surface: null,
  keys: includeKeys,
  updateAgeRange: (ageRange) => set({ ageRange }),
  updateSurface: (surface) => set({ surface }),
  updateKey: (key) =>
    set((state) => {
      const previousValue = state.keys[key]?.value ?? false;

      // Ensure that displayName is always defined
      const displayName = state.keys[key]?.displayName ?? "";
      const showOnFilter = state.keys[key]?.showOnFilter ?? false;

      return {
        keys: {
          ...state.keys,
          [key]: {
            ...state.keys[key],
            value: !previousValue,
            displayName: displayName,
            showOnFilter: showOnFilter,
          },
        },
      };
    }),
}));
