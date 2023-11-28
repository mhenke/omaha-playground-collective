import type { Post } from "@prisma/client";
import { create } from "zustand";

type State = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
};

export const usePostsStore = create<State>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
