// BlogItem component
import { Photo, Post } from "@prisma/client";
import React from "react";

interface BlogItemProps {
  isLastItem: boolean;
  post: Post;
  photos: Photo[];
}

const BlogItem: React.FC<BlogItemProps> = ({ isLastItem, post, photos }) => {
  const totalPhotos = photos.length;

  return (
    <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
      <div className="carousel w-full">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            id={`slide${post.id}${index + 1}`}
            className="carousel-item relative w-full"
          >
            <img src={photo.url} className="w-full" alt={`Photo ${photo.id}`} />
            {photos.length > 1 && (
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
            traveling
          </a>
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
