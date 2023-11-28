// BlogItem component
import type {
  AgeRange,
  Photo,
  Playground,
  Post,
  Surface,
} from "@prisma/client";
import Image from "next/image";
import React from "react";

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
  const totalPhotos = post.photos.length;

  return (
    <div className="overflow-hidden rounded border border-t-0 shadow-sm transition-shadow duration-200">
      <div className="carousel w-full">
        {post.photos.map((photo, index) => (
          <div
            key={photo.id}
            id={`slide${post.id}${index + 1}`}
            className="carousel-item relative w-full"
          >
            <Image
              src={photo.url}
              className="w-full"
              alt={`Photo ${photo.id}`}
              width="1440"
              height="1800"
            />
            {post.photos.length > 1 && (
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${post.id}${index === 0 ? totalPhotos : index}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${post.id}${
                    index === totalPhotos - 1 ? 1 : index + 2
                  }`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
          <a
            href="/"
            className="transition-colors duration-200 hover:text-accent"
            aria-label="Category"
            title="traveling"
          >
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
          </a>
        </p>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
          <span>— {post.createdAt.toDateString()}</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="link-hover link mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
        >
          {post.title}
        </a>
        <p className="mb-2 ">{post.content.substring(0, 100)}...</p>
        <a
          href="/"
          className="link-primary link inline-flex items-center font-semibold transition-colors duration-200"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
