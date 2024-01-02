import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
      <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
        {/* First Row */}
        <div className="breadcrumbs flex justify-center text-sm">
          <ul>
            <li>
              <Link className="link-hover link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" href="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
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
          <div className="border-l-4 border-secondary bg-secondary-content shadow-sm">
            <div className="h-full rounded-r border border-l-0 p-5">
              <h6 className="mb-2 font-semibold leading-5">
                Our goal is simple
              </h6>
              <p className="text-sm text-gray-900">
                It&apos;s the idea that y&apos;all will be able to find new
                parks and playgrounds + learn a little about them before packing
                up your whole family only to discover that a certain park
                has—gasp—sand!
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex items-center justify-center lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56"
              src="https://znmzqhaphohpkdunuiqu.supabase.co/storage/v1/object/public/omaha-playground-collective/3165024884908351240-01.jpg"
              alt=""
              width="1260"
              height="750"
            />
            <Image
              className="h-20 w-20 rounded object-cover shadow-lg sm:h-32 sm:w-32 xl:h-40 xl:w-40"
              src="https://znmzqhaphohpkdunuiqu.supabase.co/storage/v1/object/public/omaha-playground-collective/3180264634149933232-02.jpg"
              alt=""
              width="1260"
              height="750"
            />
          </div>
          <div className="px-3">
            <Image
              className="h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80"
              src="https://znmzqhaphohpkdunuiqu.supabase.co/storage/v1/object/public/omaha-playground-collective/3166501207455559856-06.jpg"
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
