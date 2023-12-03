"use client";

import { useEffect } from "react";
import { api } from "~/trpc/react";
import BlogItem from "./_components/BlogItem";
import Loading from "./_components/Loading";
import { useFilterStore } from "./_store/filterStore";
import { usePostsStore } from "./_store/postsStore";

export default function Home() {
  const { posts, isLoading, setPosts, setIsLoading } = usePostsStore();
  const ageRange = useFilterStore((state) => state.ageRange);
  const surface = useFilterStore((state) => state.surface);

  const includeKeys = useFilterStore((state) => {
    const keys: {
      [key: string]: {
        value: boolean;
        displayName: string;
        showOnFilter: boolean;
      };
    } = state.keys;
    const filteredKeys = Object.entries(keys)
      .filter(
        ([_key, value]: [
          string,
          { value: boolean; displayName: string; showOnFilter: boolean },
        ]) => value.showOnFilter,
      )
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value.value }), {});
    return filteredKeys;
  });

  const selectedAgeRange = ageRange === 1 ? null : ageRange;
  const selectedSurface = surface;

  const filterOptions = {
    ageRangeId:
      typeof selectedAgeRange === "number" ? selectedAgeRange : undefined,
    surfaceId:
      typeof selectedSurface === "number" ? selectedSurface : undefined,
    ...Object.fromEntries(
      Object.entries(includeKeys).filter(([key, value]) => value),
    ),
  };

  console.log("hola filterOptions", filterOptions);

  const newPostsQuery = api.post.getAll.useQuery(filterOptions, {});

  useEffect(() => {
    setIsLoading(true); // Set loading to true when starting to fetch posts
    if (newPostsQuery.data) {
      setPosts(newPostsQuery.data);
      setIsLoading(false); // Set loading to false when posts have been fetched
    }
  }, [
    newPostsQuery.data,
    selectedAgeRange,
    selectedSurface,
    setIsLoading,
    setPosts,
  ]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col py-2">
        <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
          <Loading />
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex min-h-screen flex-col py-2">
        <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
          <p>No posts found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col py-2">
      <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
        <div className="grid gap-8 sm:mx-auto sm:max-w-sm md:max-w-full md:grid-cols-3 lg:max-w-full lg:grid-cols-4">
          {posts.map((post) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
