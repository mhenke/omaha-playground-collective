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
interface BlogItemProps {
  isLastItem: boolean;
  // i need ageRange in Playground
  post: Post & {
    playground:
      | (Playground & { ageRange: AgeRange | null; Surface: Surface | null })
      | null;
    photos: Photo[] | [];
  };
}

const BlogItem: React.FC<BlogItemProps> = ({ isLastItem, post }) => {
  const totalPhotos = post.photos.length;

  console.log("hola post", post);

  return (
    <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
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
      <div className="border border-t-0 p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
          <a
            href="/"
            className="text-blue-gray-900 hover:text-deep-purple-accent-700 transition-colors duration-200"
            aria-label="Category"
            title="traveling"
          >
            {post.playground?.ageRange?.name && (
              <button className="btn btn-neutral btn-xs mr-px">
                {post.playground.ageRange.name}
              </button>
            )}
            {post.playground?.accessibleEquip && (
              <button className="btn btn-secondary btn-xs mr-px">
                Assessible
              </button>
            )}
            {post.playground?.Surface?.name && (
              <button className="btn btn-accent btn-xs mr-px">
                {post.playground.Surface.name}
              </button>
            )}
          </a>
        </p>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
          <span className="text-gray-600">
            — {post.createdAt.toDateString()}
          </span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
        >
          {post.title}
        </a>
        <p className="mb-2 text-gray-700">
          {post.content.substring(0, 100)}...
        </p>
        <a
          href="/"
          aria-label=""
          className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
