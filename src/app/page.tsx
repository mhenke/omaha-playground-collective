import { api } from "~/trpc/server";
import BlogItem from "./_components/BlogItem";

export default async function Home() {
  try {
    // Fetch posts from the server
    const posts = await api.post.getAll.query(undefined, {});

    console.log("hola posts", posts);

    return (
      <div className="flex min-h-screen flex-col py-2">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10">
          <div className="grid gap-8 sm:mx-auto sm:max-w-sm md:max-w-full md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogItem
                key={post.id}
                isLastItem={index === posts.length - 1}
                post={post}
                photos={post?.playground?.photos ?? []}
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
