const child = (
  <div className="flex h-full flex-col rounded-md bg-white shadow-md">
    <div className="flex-grow p-4">
      Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
    </div>
  </div>
);

export default function LeadGrid() {
  return (
    <div class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div class="grid gap-5 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
        <div class="overflow-hidden rounded bg-white transition-shadow duration-300">
          <a href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              class="h-64 w-full rounded object-cover"
              alt=""
            />
          </a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold uppercase text-gray-600">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="hover:text-deep-purple-accent-700 mb-3 inline-block text-black transition-colors duration-200"
            >
              <p class="text-2xl font-bold leading-5">Diving to the deep</p>
            </a>
            <p class="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div class="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                class="hover:text-deep-purple-accent-700 group flex items-start text-gray-800 transition-colors duration-200"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="group-hover:text-deep-purple-accent-700 h-5 w-5 text-gray-600 transition-colors duration-200"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      stroke-miterlimit="10"
                    ></polyline>
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></path>
                  </svg>
                </div>
                <p class="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                class="hover:text-deep-purple-accent-700 group flex items-start text-gray-800 transition-colors duration-200"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    class="group-hover:text-deep-purple-accent-700 h-5 w-5 text-gray-600 transition-colors duration-200"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      stroke-miterlimit="10"
                    ></polyline>
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></polygon>
                  </svg>
                </div>
                <p class="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded bg-white transition-shadow duration-300">
          <a href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              class="h-64 w-full rounded object-cover"
              alt=""
            />
          </a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold uppercase text-gray-600">
              4 Nov 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="hover:text-deep-purple-accent-700 mb-3 inline-block text-black transition-colors duration-200"
            >
              <p class="text-2xl font-bold leading-5">Conquer the World</p>
            </a>
            <p class="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div class="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                class="hover:text-deep-purple-accent-700 group flex items-start text-gray-800 transition-colors duration-200"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="group-hover:text-deep-purple-accent-700 h-5 w-5 text-gray-600 transition-colors duration-200"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      stroke-miterlimit="10"
                    ></polyline>
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></path>
                  </svg>
                </div>
                <p class="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                class="hover:text-deep-purple-accent-700 group flex items-start text-gray-800 transition-colors duration-200"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    class="group-hover:text-deep-purple-accent-700 h-5 w-5 text-gray-600 transition-colors duration-200"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      stroke-miterlimit="10"
                    ></polyline>
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></polygon>
                  </svg>
                </div>
                <p class="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded bg-white transition-shadow duration-300">
          <a href="/" aria-label="Article">
            <img
              src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              class="h-64 w-full rounded object-cover"
              alt=""
            />
          </a>
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold uppercase text-gray-600">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Article"
              class="hover:text-deep-purple-accent-700 mb-3 inline-block text-black transition-colors duration-200"
            >
              <p class="text-2xl font-bold leading-5">Explore the beautiful</p>
            </a>
            <p class="mb-4 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <div class="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                class="hover:text-deep-purple-accent-700 group flex items-start text-gray-800 transition-colors duration-200"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="group-hover:text-deep-purple-accent-700 h-5 w-5 text-gray-600 transition-colors duration-200"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      stroke-miterlimit="10"
                    ></polyline>
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></path>
                  </svg>
                </div>
                <p class="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                class="hover:text-deep-purple-accent-700 group flex items-start text-gray-800 transition-colors duration-200"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    class="group-hover:text-deep-purple-accent-700 h-5 w-5 text-gray-600 transition-colors duration-200"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      stroke-miterlimit="10"
                    ></polyline>
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                    ></polygon>
                  </svg>
                </div>
                <p class="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
