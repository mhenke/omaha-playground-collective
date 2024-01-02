"use client";

import type { Photo } from "@prisma/client";
import Image from "next/image";
import { useRef } from "react";

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

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (targetImageNumber: number) => {
    if (carouselRef.current) {
      const targetXPixel = carouselRef.current.clientWidth * targetImageNumber;
      carouselRef.current.scrollLeft = targetXPixel;
    }
  };

  return (
    <div className="carousel w-full" ref={carouselRef}>
      {photos.map((photo, index) => (
        <div
          key={photo.postId}
          id={`slide${photo.postId}-${index}`}
          className="carousel-item relative w-full"
        >
          <Image
            src={photo.url}
            className={photoClass}
            alt=""
            width="1260"
            height="750"
          />
          {totalPhotos === 1 ? null : (
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() =>
                  scrollCarousel(index === 0 ? totalPhotos - 1 : index - 1)
                }
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() =>
                  scrollCarousel(index === totalPhotos - 1 ? 0 : index + 1)
                }
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
