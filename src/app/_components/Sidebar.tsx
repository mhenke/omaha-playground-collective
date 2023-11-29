import { Bookmark, Share } from "react-feather";

const Sidebar = () => {
  return (
    <aside className="hidden border-r  lg:col-span-4 lg:flex lg:flex-col">
      <section className="space-y-8 p-5">
        <div className="flex flex-col lg:flex-row">
          <div className="mx-auto mb-2 max-w-xl pr-16">
            <h5 className="mb-6 text-lg font-extrabold leading-none">
              The quick, brown fox jumps over a lazy dog
            </h5>
            <p className="mb-6 text-sm ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
              omnis iste natus.
            </p>
            <div className="flex items-center">
              <button className="btn btn-secondary">Get Started</button>
              <button className="btn btn-link">Learn more</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="font-bold">Playgrounds you might be interested</div>
          <div className="flex flex-col space-y-4">
            <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="group flex items-center rounded border border-accent p-2 shadow transition-colors duration-200 hover:bg-base-200"
                >
                  <div className="mr-2">
                    <Bookmark className="h-6 w-6 text-accent transition-colors duration-200  sm:h-6 sm:w-6" />
                  </div>{" "}
                  <span className="text-sm  transition-colors duration-200 ">
                    Change the world by being yourself.{" "}
                    <a className="link-primary link">Learn More</a>
                  </span>{" "}
                  <Share className="h-6 w-6 text-accent transition-colors duration-200  sm:h-6 sm:w-6" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="font-bold">My playground list</div>

          <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
            <div className="group flex items-center rounded border border-accent p-2 shadow transition-colors duration-200 hover:bg-base-200">
              <div className="mr-2">
                <svg
                  className="h-6 w-6 text-accent transition-colors duration-200  sm:h-8 sm:w-8"
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
              <span className="text-sm transition-colors duration-200 ">
                Change the world by being yourself 2.{" "}
                <a className="link-primary link">Learn More</a>
              </span>
              <button className="btn btn-outline btn-secondary btn-xs">
                UnBookmark
              </button>
            </div>
            <div className="group flex items-center rounded border border-accent p-2 shadow transition-colors duration-200 hover:bg-base-200">
              <div className="mr-2">
                <svg
                  className="h-6 w-6 text-accent transition-colors duration-200  sm:h-8 sm:w-8"
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
              <span className="text-sm  transition-colors duration-200 ">
                Die with memories, not dreams.
              </span>
            </div>
            <div className="group flex items-center rounded border border-accent p-2 shadow transition-colors duration-200 hover:bg-base-200">
              <div className="mr-2">
                <svg
                  className="h-6 w-6 text-accent transition-colors duration-200  sm:h-8 sm:w-8"
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
              <span className="text-sm transition-colors duration-200 ">
                What we think, we become.
              </span>
            </div>
            <div className="group flex items-center rounded border border-accent p-2 shadow transition-colors duration-200 hover:bg-base-200">
              <div className="mr-2">
                <svg
                  className="h-6 w-6 text-accent transition-colors duration-200  sm:h-8 sm:w-8"
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
              <span className="text-sm transition-colors duration-200 ">
                Be so good they can’t ignore you.
              </span>
            </div>
            <div className="group flex items-center rounded border border-accent p-2 shadow transition-colors duration-200 hover:bg-base-200">
              <div className="mr-2">
                <svg
                  className="h-6 w-6 text-accent transition-colors duration-200  sm:h-8 sm:w-8"
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
              <span className="text-sm transition-colors duration-200 ">
                Simplicity is the ultimate sophistication.
              </span>
            </div>
            <div className="group flex items-center rounded border border-accent p-2 shadow transition-colors duration-200 hover:bg-base-200">
              <div className="mr-2">
                <svg
                  className="h-6 w-6 text-accent transition-colors duration-200  sm:h-8 sm:w-8"
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
              <span className="text-sm transition-colors duration-200 ">
                Yesterday you said tomorrow. Just do it today.
              </span>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
