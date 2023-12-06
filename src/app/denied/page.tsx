import Link from "next/link";

export default function Denied() {
  return (
    <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
      <div className="rounded bg-base-100 p-8 shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-error sm:text-4xl sm:leading-none">
              Denied
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4 text-base">
              It seems the playground you were searching for took a spontaneous
              trip to another dimension or got caught up in the vast playgrounds
              of the internet.
            </p>
            <p className="mb-4 text-base">
              Don&apos;t worry, though! You can always swing back to our home
              page and continue your exploration of Omaha&apos;s finest play
              spaces with the{" "}
              <span className="relative inline-block text-accent">
                Omaha Playground Collective
              </span>
              .
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
