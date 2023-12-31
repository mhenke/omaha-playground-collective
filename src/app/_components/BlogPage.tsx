import Link from "next/link";
import { Instagram } from "react-feather";
import { api } from "~/trpc/server";
import Carousel from "./Carousel";
import Feature from "./Feature";

const BlogPage = async ({ id }: { id: number }) => {
  const post = await api.post.getOne.query({ id }, {});

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
    <div>
      <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
        {/* First Row */}

        <div className="breadcrumbs flex justify-center text-sm">
          <ul>
            <li>
              <Link className="link-hover link" href="/">
                Home
              </Link>
            </li>

            {!post.playground && <li>{post.title}</li>}
            {post.playground && (
              <>
                <li>Playground</li>
                <li>
                  <Link className="link" href="#">
                    {post.playground?.name}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
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
              {post.playground && (
                <div className="mb-4 border-b bg-secondary-content pb-4">
                  <h6 className="mb-2 font-semibold leading-5 text-secondary">
                    {post.playground?.address} {post.playground?.city},{" "}
                    {post.playground?.state} {post.playground?.zip}
                  </h6>
                </div>
              )}
              <p className="text-base  md:text-lg">{post.content}</p>
            </div>
          </div>
          <div>
            <Carousel photos={post.photos} type={"content"} />
            <Feature playground={post?.playground} />
            <div className="flex items-center justify-center sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
              <Link
                href="https://www.instagram.com/p/Cz_Z5BiOtBB/?utm_source=ig_web_copy_link"
                className="link link-primary flex items-center"
              >
                <Instagram className="mr-2" />{" "}
                {/* Add margin to create space between icon and text */}
                Original Instagram Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
