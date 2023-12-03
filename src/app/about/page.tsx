import Image from "next/image";

export default function LeadBlog() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0">
          <div className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              Let us handle <br className="hidden md:block" />
              your next{" "}
              <span className="inline-block text-accent">playground fun</span>
            </h2>
            <p className="text-base  md:text-lg">
              Welcome to the Omaha Playground Collective, your go-to resource
              for discovering the best playgrounds, parks, and family-friendly
              fun in Omaha, Nebraska. We&apos;re passionate about creating
              unforgettable play experiences for families and providing a
              comprehensive guide to help you navigate the vast recreational
              spaces our city has to offer.
            </p>
          </div>
          <div className="mt-4 border-t pb-4">
            <h6 className="mb-2 font-normal leading-5">
              Our mission is simple: to be your ultimate source for all things
              play-related in Omaha. Whether you&apos;re a local resident or a
              visitor, we&apos;ve got you covered with detailed insights,
              reviews, and recommendations to make your playtime adventures
              memorable and stress-free.
            </h6>
          </div>
        </div>
        <div className="-mx-4 flex items-center justify-center lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              width="1260"
              height="750"
            />
            <Image
              className="h-20 w-20 rounded object-cover shadow-lg sm:h-32 sm:w-32 xl:h-40 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              width="1260"
              height="750"
            />
          </div>
          <div className="px-3">
            <Image
              className="h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
              width="500"
              height="750"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
