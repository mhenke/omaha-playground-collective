export default function Home() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-10">
      <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-1">
        <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="h-64 w-full object-cover"
            alt=""
          />
          <div className="border border-t-0 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              <a
                href="/"
                className="text-blue-gray-900 hover:text-deep-purple-accent-700 transition-colors duration-200"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
            >
              Visit the East
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-1">
        <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="h-64 w-full object-cover"
            alt=""
          />
          <div className="border border-t-0 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              <a
                href="/"
                className="text-blue-gray-900 hover:text-deep-purple-accent-700 transition-colors duration-200"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Simple is better"
              className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
            >
              Simple is better
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-1">
        <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="h-64 w-full object-cover"
            alt=""
          />
          <div className="border border-t-0 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide">
              <a
                href="/"
                className="text-blue-gray-900 hover:text-deep-purple-accent-700 transition-colors duration-200"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Film It!"
              className="hover:text-deep-purple-accent-700 mb-3 inline-block text-2xl font-bold leading-5 transition-colors duration-200"
            >
              Film It!
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
