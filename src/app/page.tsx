"use client";

import { AgeRange, Photo, Playground, Post, Surface } from "@prisma/client";
import { useEffect, useState } from "react";
import { api } from "~/trpc/react";
import BlogItem from "./_components/BlogItem";
import { useFilterStore } from "./_store/filterStore";

type ExtendedPost = Post & {
  playground:
    | (Playground & { ageRange: AgeRange | null; Surface: Surface | null })
    | null;
  photos: Photo[] | [];
};

export default function Home() {
  try {
    const selectedAgeRange = useFilterStore((state) =>
      state.ageRange === 1 ? null : state.ageRange,
    );

    const selectedSurface = useFilterStore((state) => state.surface);

    const [posts, setPosts] = useState<ExtendedPost[]>([]);

    const filterOptions = {
      ageRangeId:
        typeof selectedAgeRange === "number" ? selectedAgeRange : undefined,
      surfaceId:
        typeof selectedSurface === "number" ? selectedSurface : undefined,
    };
    const newPostsQuery = api.post.getAll.useQuery(filterOptions, {});

    useEffect(() => {
      if (newPostsQuery.data) {
        setPosts(newPostsQuery.data);
      }
    }, [newPostsQuery.data, selectedAgeRange]);

    return (
      <div className="flex min-h-screen flex-col py-2">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10">
          <div className="grid gap-8 sm:mx-auto sm:max-w-sm md:max-w-full md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogItem
                key={post.id}
                isLastItem={index === posts.length - 1}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("An error occurred:", error);
    return <div>An error occurred</div>;
  }
}
