import { api } from "~/trpc/server";
import Carousel from "./Carousel";
import Feature from "./Feature";
import Ranking from "./Ranking";

const BlogPage = async ({ id }: { id: number }) => {
  const post = await api.post.getOne.query({ id }, {});

  // const title = "The quick, brown fox jumps over a lazy dog";
  const title = post.title;
  const wordCount = title.split(" ").length;

  let leadingWords = "";
  let middleWords = "";
  let accentWords = "";

  if (wordCount <= 5) {
    leadingWords = title;
  } else if (wordCount <= 10) {
    const words = title.split(" ");
    leadingWords = words.slice(0, 4).join(" ");
    middleWords = words.slice(4, 6).join(" ");
    accentWords = words.slice(6).join(" ");
  } else {
    const leadingWordsCount = Math.ceil(wordCount * 0.5);
    const middleWordsCount = Math.ceil(wordCount * 0.2);
    const words = title.split(" ");
    leadingWords = words.slice(0, leadingWordsCount).join(" ");
    middleWords = words
      .slice(leadingWordsCount, leadingWordsCount + middleWordsCount)
      .join(" ");
    accentWords = words.slice(leadingWordsCount + middleWordsCount).join(" ");
  }

  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10">
      <div className="row-gap-5 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              {leadingWords}
              {middleWords && (
                <span>
                  <br className="hidden md:block" />
                  {middleWords}
                </span>
              )}
              {accentWords && (
                <span className="relative px-1">
                  <div className="accent-content absolute inset-x-0 bottom-0 h-3 -skew-x-12 transform" />
                  <span className="relative inline-block text-accent">
                    {accentWords}
                  </span>
                </span>
              )}
            </h2>
            <div className="mb-4 border-b pb-4">
              <h6 className="mb-2 font-semibold leading-5">
                {post.playground?.address} {post.playground?.city},{" "}
                {post.playground?.state} {post.playground?.zip}
              </h6>
              <div className="text-sm">
                <Ranking rating={post?.playground?.rating} />
              </div>
            </div>
            <p className="text-base  md:text-lg">{post.content}</p>
          </div>
        </div>
        <div>
          <Carousel photos={post.photos} type={"content"} />

          <Feature playground={post?.playground} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
