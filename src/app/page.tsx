import { api } from "~/trpc/server";
import BlogItem from "./_components/BlogItem";
import { useFilterStore } from "./_store/filterStore";

export default async function Home() {
  try {
    type FilterOptions = {
      ageRangeId?: number;
      surfaceId?: number;
    };

    const filterOptions: FilterOptions = {};

    const selectedAgeRange = useFilterStore.getState().selectedAgeRange;
    const selectedSurface = useFilterStore.getState().selectedSurface;

    if (typeof selectedAgeRange === "number") {
      filterOptions.ageRangeId = selectedAgeRange;
    }

    if (typeof selectedSurface === "number") {
      filterOptions.surfaceId = selectedSurface;
    }

    const posts = await api.post.getAll.query(filterOptions, {});

    console.log("hola posts from page", posts);

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
