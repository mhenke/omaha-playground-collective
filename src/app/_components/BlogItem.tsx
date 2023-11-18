// BlogItem component
import { Post } from "@prisma/client";
import React from "react";

interface BlogItemProps {
  isLastItem: boolean;
  post: Post;
}

const BlogItem: React.FC<BlogItemProps> = ({ isLastItem, post }) => {
  return (
    <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
      <img
        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
        className="h-64 w-full object-cover"
        alt=""
      />
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
