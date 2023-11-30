import { api } from "~/trpc/server";
import Carousel from "./Carousel";

const BlogPage = async ({ id }: { id: number }) => {
  const post = await api.post.getOne.query({ id }, {});

  console.log("hola post from page", post);
  const displayedTitle = post.title;
  const remainingWords = undefined;
  const accentWords = undefined;

  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10">
      <div className="row-gap-5 grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              {displayedTitle}
              {remainingWords && (
                <span>
                  <br className="hidden md:block" />
                  {remainingWords}
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
          <Carousel photos={post.photos} />

          <div className="mt-8 flex flex-col space-y-6">
            <p className="text-sm font-bold uppercase tracking-widest">
              Features
            </p>
            <div className="grid space-y-3 sm:grid-cols-2 sm:gap-2 sm:space-y-0">
              <ul className="space-y-3">
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
                  </span>
                  A slice of heaven 222
                </li>
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
                  </span>
                  Disrupt inspire
                </li>
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
                  </span>
                  Preliminary thinking
                </li>
              </ul>
              <ul className="space-y-3">
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
                  </span>
                  Flipboard curmudgeon
                </li>
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
                  </span>
                  Storage shed
                </li>
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
                  </span>
                  Satoshi Nakamoto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
