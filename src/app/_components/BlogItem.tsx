// BlogItem component
import type {
  AgeRange,
  Photo,
  Playground,
  Post,
  Surface,
} from "@prisma/client";
import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";
import Ranking from "./Ranking";

type ExtendedPost = Post & {
  playground:
    | (Playground & { ageRange: AgeRange | null; Surface: Surface | null })
    | null;
  photos: Photo[] | [];
};
interface BlogItemProps {
  post: ExtendedPost;
}

const BlogItem: React.FC<BlogItemProps> = ({ post }) => {
  return (
    <div className="overflow-hidden rounded border border-t-0 shadow-sm transition-shadow duration-200">
      <Carousel photos={post.photos} type={"blog"} />
      <div className="p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
          <span>— {post.createdAt.toDateString()}</span>
        </p>
        <Link
          href={`/playground/${post?.id}/${post?.title}`}
          aria-label="Category"
          title={post.title}
          className="link-hover link mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
        >
          {post.title}
        </Link>

        {post.playground && (
          <div className="mb-4 border-b pb-4">
            <h6 className="mb-2 text-xs font-semibold leading-5">
              {post.playground?.address} {post.playground?.city},{" "}
              {post.playground?.state} {post.playground?.zip}
            </h6>
            <div className="rating-xs text-sm">
              <Ranking rating={post?.playground?.rating} />
            </div>
          </div>
        )}

        <p className="mb-2 ">{post.content.substring(0, 100)}...</p>
        <p className="mb-2 ">
          <Link
            href={`/playground/${post?.id}/${post?.title}`}
            className="link link-primary inline-flex items-center font-semibold transition-colors duration-200"
          >
            Learn more
          </Link>
        </p>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
          {post.playground?.ageRange?.name && (
            <button className="btn btn-neutral btn-xs m-px">
              {post.playground.ageRange.name}
            </button>
          )}
          {post.playground?.accessibleEquip && (
            <button className="btn btn-secondary btn-xs m-px">
              Assessible
            </button>
          )}
          {post.playground?.Surface?.name && (
            <button className="btn btn-accent btn-xs m-px">
              {post.playground.Surface.name}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
