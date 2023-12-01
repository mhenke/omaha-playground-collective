import { api } from "~/trpc/server";
import Carousel from "./Carousel";

const BlogPage = async ({ id }: { id: number }) => {
  const post = await api.post.getOne.query({ id }, {});

  const includeKeys = [
    "rating",
    "restrooms",
    "picnicAreas",
    "benches",
    "shade",
    "accessibleEquip",
    "adaCompliance",
  ];

  let features = {};

  if (post?.playground) {
    features = Object.fromEntries(
      Object.entries(post.playground)
        .filter(([key]) => includeKeys.includes(key))
        .map(([key, value]) => [key, value]),
    );
  }

  console.log("hola features", features);

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
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              {leadingWords}
              {middleWords && (
                <span>
                  <br className="hidden md:block" />
                  {middleWords}
                </span>
              )}
              {accentWords && (
                <span className="relative px-1">
                  <div className="bg-teal-accent absolute inset-x-0 bottom-0 h-3 -skew-x-12 transform" />
                  <span className="relative inline-block text-accent">
                    {accentWords}
                  </span>
                </span>
              )}
            </h2>
            <p className="text-base  md:text-lg">{post.content}</p>
          </div>
        </div>
        <div>
          <Carousel photos={post.photos} type={"content"} />

          {Object.values(features).some((value) => value) && (
            <div className="mt-8 flex flex-col space-y-6">
              <p className="text-sm font-bold uppercase tracking-widest">
                Features
              </p>
              <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
                {Object.entries(features).map(([key, value], index) => {
                  if (value) {
                    return (
                      <ul key={index} className="space-y-3">
                        <li className="flex">
                          <span className="mr-1">
                            <svg
                              className="mt-px h-5 w-5 text-accent"
                              stroke="currentColor"
                              viewBox="0 0 52 52"
                            >
                              <polygon
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                              />
                            </svg>
                          </span>{" "}
                          {key}{" "}
                          {/* Optional chaining to handle null or undefined */}
                        </li>
                      </ul>
                    );
                  }
                  return null; // return null when value is falsy
                })}
              </div>
            </div>
          )}
          {!Object.values(features).some((value) => value) &&
            post?.playground && (
              <div className="mt-8 flex flex-col space-y-6">
                <p className="text-sm font-bold uppercase tracking-widest">
                  Parks are great
                </p>
                <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
                  blurb about parks in general
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
