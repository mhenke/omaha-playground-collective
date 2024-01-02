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
      <div className="row-gap-8 grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="mb-6 max-w-xl">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let&apos;s Collaborate!
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
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
          <div className="row-gap-8 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                <svg
                  className="text-deep-purple-accent-400 h-10 w-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                I'll be sure to note that in my log
              </h6>
              <p className="text-sm text-gray-900">
                Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly got in a gaum
                Powrtland stove up dooryahd
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                <svg
                  className="text-deep-purple-accent-400 h-10 w-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Iterative approaches to corporate strategy
              </h6>
              <p className="text-sm text-gray-900">
                A slice of heaven. O for awesome, this chocka full cuzzie is as
                rip-off as a cracker.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-56 w-full rounded object-cover shadow-lg sm:h-96"
            src="https://znmzqhaphohpkdunuiqu.supabase.co/storage/v1/object/public/omaha-playground-collective/3183381106770001397-02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
