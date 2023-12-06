import {
  type AgeRange,
  type Photo,
  type Playground,
  type Post,
  type Surface,
} from "@prisma/client";
import { create } from "zustand";

type ExtendedPost = Post & {
  playground:
    | (Playground & { ageRange: AgeRange | null; surface: Surface | null })
    | null;
  photos: Photo[] | [];
};

type State = {
  posts: ExtendedPost[];
  isLoading: boolean;
  setPosts: (posts: ExtendedPost[]) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const usePostsStore = create<State>((set) => ({
  posts: [],
  isLoading: false,
  setPosts: (posts) => set({ posts }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
