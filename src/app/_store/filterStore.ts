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
  color:
    | "badge-neutral"
    | "badge-secondary"
    | "badge-accent"
    | "badge-ghost"
    | "default";
};

const includeKeys: IncludeKeys = {
  restrooms: {
    displayName: "Restrooms",
    value: false,
    showOnFilter: true,
    color: "badge-ghost",
  },
  shade: {
    displayName: "Shade",
    value: false,
    showOnFilter: true,
    color: "badge-accent",
  },
  accessibleEquip: {
    displayName: "Accessible Equipment",
    value: false,
    showOnFilter: true,
    color: "badge-neutral",
  },
  picnicAreas: {
    displayName: "Picnic Area",
    value: false,
    showOnFilter: false,
    color: "badge-accent",
  },
  benches: {
    displayName: "Benches",
    value: false,
    showOnFilter: false,
    color: "badge-ghost",
  },
  adaCompliance: {
    displayName: "ADA Compliance",
    value: false,
    showOnFilter: false,
    color: "badge-accent",
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
      const displayName = state.keys[key]?.displayName ?? "";
      const showOnFilter = state.keys[key]?.showOnFilter ?? false;
      const color = state.keys[key]?.color ?? "default";

      return {
        keys: {
          ...state.keys,
          [key]: {
            ...state.keys[key],
            value: !previousValue,
            displayName,
            showOnFilter,
            color,
          },
        },
      };
    }),
}));
