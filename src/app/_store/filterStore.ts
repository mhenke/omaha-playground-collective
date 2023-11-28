import { create } from "zustand";

type State = {
  ageRange: number | null;
  surface: number | null;
  accessible: boolean | null;
};

type Action = {
  updateAgeRange: (ageRange: State["ageRange"]) => void;
  updateSurface: (surface: State["surface"]) => void;
  updateAccessible: (accessible: State["accessible"]) => void;
};

export const useFilterStore = create<State & Action>((set) => ({
  ageRange: null,
  surface: null,
  accessible: false,
  updateAgeRange: (ageRange) => set(() => ({ ageRange })),
  updateSurface: (surface) => set(() => ({ surface })),
  updateAccessible: (accessible) => set(() => ({ accessible })),
}));
