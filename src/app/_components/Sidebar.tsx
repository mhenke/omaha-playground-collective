import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="col-span-4 flex flex-col border-r border-gray-300">
      <section className="space-y-8 p-10">
        <div className="grid grid-cols-12 rounded-xl bg-gradient-to-br from-gray-200 via-gray-200/50 to-gray-300 p-8">
          <div className="col-span-9 space-y-4">
            <div>
              <div className="text-lg font-bold text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur.
              </div>
              <div className="text-sm font-medium text-gray-600">
                Lorem ipsum dolor sit Lorem, ipsum.
              </div>
            </div>
            <div className="w-fit rounded-3xl bg-gray-300 px-4 py-2 text-sm text-gray-700">
              Get unlimited access
            </div>
          </div>
          <div className="col-span-3 grid place-items-center">
            <i
              className="feather feather-book"
              style={{ fontSize: "115px", color: "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="font-bold">Playgrounds you might be interested</div>
          <div className="flex flex-col space-y-4">
            <div className="flex w-full flex-col space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="grid w-full grid-cols-12 gap-2" key={index}>
                  <div className="col-span-2">
                    <div className="h-12 w-12 rounded-full bg-gray-400">
                      <Image
                        src="/photo-1534528741775-53994a69daeb.jpg"
                        alt="User"
                        className="rounded-full"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                  <div className="col-span-7 flex flex-col">
                    <div className="text-sm font-bold">John Doe</div>
                    <div className="text-xs font-normal">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Illo, ut.
                    </div>
                  </div>
                  <div className="col-span-3">
                    <button className="flex items-center space-x-2 rounded-lg px-4 py-2 ring-1 ring-gray-400">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="font-bold">My playground list</div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key="{i}" className="mx-auto">
              <div className="grid gap-8 sm:mx-auto sm:max-w-sm lg:max-w-full">
                <div className="flex flex-col">
                  <div className="mb-2">
                    <a
                      href="/"
                      aria-label="Article"
                      className="hover:text-deep-purple-accent-400 inline-block text-sm font-bold leading-5 text-black transition-colors duration-200"
                    >
                      Why I love Laravel
                    </a>
                  </div>
                  <p className="mb-5 text-xs  text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                  </p>
                  <div className="overflow-hidden rounded bg-white shadow-sm transition-shadow duration-300">
                    <img
                      src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                      className="h-64 w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
