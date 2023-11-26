import { create } from "zustand";

export const useModalStore = create<{
  isWriteModalOpen: boolean;
  setIsWriteModalOpen: (isWriteModalOpen: boolean) => void;
}>((set) => ({
  isWriteModalOpen: false,
  setIsWriteModalOpen: (isWriteModalOpen: boolean) => set({ isWriteModalOpen }),
}));
