import { create } from "zustand";

export const useFilterStore = create<{
  selectedAgeRange: number | null;
  selectedSurface: number | null;
  selectedAccessible: boolean | null;
}>((set) => ({
  selectedAgeRange: null,
  selectedSurface: null,
  selectedAccessible: null,
}));
