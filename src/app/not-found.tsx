import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="rounded bg-base-100 p-8 shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-error sm:text-4xl sm:leading-none">
              404 - Not Found
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base">
              The page you are looking for might be in{" "}
              <span className="relative inline-block text-accent">
                another dimension
              </span>
              , or it could have been eaten by the{" "}
              <span className="relative inline-block text-accent">
                Internet&apos;s equivalent of a black hole.
              </span>
            </p>

            <Link
              href="/"
              className="line-flex link link-primary items-center text-2xl font-bold"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
