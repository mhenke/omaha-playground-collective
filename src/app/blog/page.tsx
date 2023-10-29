export default function LeadBlog() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900">
            Brand new
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="text-blue-gray-100 absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="row-gap-8 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
            20 Nov 2020
          </p>
          <div className="mb-3">
            <a
              href="/"
              aria-label="Article"
              className="hover:text-deep-purple-accent-400 inline-block text-black transition-colors duration-200"
            >
              <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                What it means when a man falls from outer space
              </p>
            </a>
          </div>
          <p className="mb-4 text-base text-gray-700 md:text-lg">
            Call it magical realism, call it realistic fantasy—call it whatever
            you want, but Arimah's playfully subversive style is wholly her own.
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" className="mr-3">
              <img
                alt="avatar"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="h-10 w-10 rounded-full object-cover shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                className="hover:text-deep-purple-accent-400 font-semibold text-gray-800 transition-colors duration-200"
              >
                Petru Vîrtos
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                Author
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 lg:col-span-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
              14 Jul 2020
            </p>
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="hover:text-deep-purple-accent-400 inline-block text-black transition-colors duration-200"
              >
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                  Mascarpone cheese triangles taleggio
                </p>
              </a>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              Brie cheese triangles cheesecake. Cauliflower cheese cheese and
              wine manchego bocconcini croque monsieur queso airedale brie.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" className="mr-3">
                <img
                  alt="avatar"
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  className="h-10 w-10 rounded-full object-cover shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  className="hover:text-deep-purple-accent-400 font-semibold text-gray-800 transition-colors duration-200"
                >
                  Alex Stratulat
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
              18 Mar 2020
            </p>
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="hover:text-deep-purple-accent-400 inline-block text-black transition-colors duration-200"
              >
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                  The quick, brown fox jumps over a lazy dog
                </p>
              </a>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              "A kitten, a nice little, sleek playful kitten, that I can play
              with, and teach, and feed--and feed--and feed!" I was not
              unprepared for this request, for I had noticed how his pets went
              on increasing in size.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" className="mr-3">
                <img
                  alt="avatar"
                  src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  className="h-10 w-10 rounded-full object-cover shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  className="hover:text-deep-purple-accent-400 font-semibold text-gray-800 transition-colors duration-200"
                >
                  Susie the Cat
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
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
    </div>
  );
}
