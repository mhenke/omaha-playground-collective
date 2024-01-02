import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
              <Link className="link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0">
          <div className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              Let’s Collaborate!
            </h2>
            <p className="text-base  md:text-lg">
              Have a question, suggestion, or just want to say hello? We&apos;d
              love to hear from you! DM for inquiries on our{" "}
              <Link
                href="https://www.instagram.com/omahaplaygroundcollective/"
                className="link-hover link text-secondary"
              >
                Instagram account
              </Link>{" "}
              and we&apos;ll will get back to you faster than a slide ride.
            </p>
          </div>
        </div>

        <div className="-mx-4 flex items-center justify-center lg:pl-8">
          <div className="px-3">
            <Image
              className="h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80"
              src="https://znmzqhaphohpkdunuiqu.supabase.co/storage/v1/object/public/omaha-playground-collective/3183381106770001397-02.jpg"
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
