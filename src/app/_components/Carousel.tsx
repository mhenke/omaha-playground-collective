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
          key={`slide-${photo.id}`}
          id={`slide-${photo.postId}-${index}`}
          className="carousel-item relative w-full"
        >
          <Image
            src={photo.url}
            className={photoClass}
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABSAFIDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAGRABAQEBAQEAAAAAAAAAAAAAAAECEQMS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9WpbWsT3EHL6OX0js9I5t5Ac1gkUuRMhNzFswucq5yC2Q8EhpAi8BuAJ22J6i1hNRsuXcc+8uvcR1lBzXLZhX5bMpEzlXOTZyeZRLMm+TTJuBJ8CnAA6bCaitJolz7iWovpKxBPjZlvDSEiZPIJDyJM43jQEzgaEnRSaPSaSR0lpTaWqkw0J00pSkNCSnlRMGdZ0AwL0BOmp6UqWmkltHSu0NJM6aUhoSrKaVOHgRujrGAG6CgJ2VLYDZQ2joAAhsgEqQ0ACaAAAAAn/2Q=="
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
