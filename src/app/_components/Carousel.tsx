"use client";

import type { Photo } from "@prisma/client";

type CarouselProps = {
  photos: Photo[];
  type: "blog" | "content"; // add this line
};

const Carousel: React.FC<CarouselProps> = ({ photos, type }) => {
  const totalPhotos = photos.length;
  const photoClass =
    type === "blog"
      ? "object-cover w-full h-64"
      : "object-cover w-full h-56 rounded shadow-lg sm:h-96";

  return (
    <div className="carousel w-full">
      {photos.map((photo, index) => (
        <div
          key={photo.postId}
          id={`slide${photo.postId}-${index}`}
          className="carousel-item relative w-full"
        >
          {" "}
          {/* 278 and 750 */}
          {/* className={`h-[${size.height}px] w-full object-cover`}
          contents and blog
          className="" */}
          <img src={photo.url} className={photoClass} />
          {totalPhotos === 1 ? null : (
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a
                href={`#slide${photo.postId}-${
                  index === 0 ? totalPhotos - 1 : index - 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${photo.postId}-${
                  index === totalPhotos - 1 ? 0 : index + 1
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
  );
};

export default Carousel;
