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
          <div className="font-bold">My Playground list</div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="grid grid-cols-12" key={i}>
              <div className="col-span-4 flex max-w-sm flex-col justify-center pr-2 ">
                <Image
                  src="/photo-1534528741775-53994a69daeb.jpg"
                  alt="Dummy Post"
                  className="h-full w-full rounded-xl object-cover"
                  width={48}
                  height={48}
                />
              </div>

              <div className="col-span-8 mt-4 flex flex-col space-y-4">
                <div className="text-base font-bold text-gray-900 decoration-indigo-600 group-hover:underline">
                  Nulla consequat massa...
                </div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="h-8 w-8 rounded-full bg-gray-400">
                    <Image
                      src="/photo-1534528741775-53994a69daeb.jpg"
                      alt="User"
                      className="rounded-full"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>John Doe</div>
                  <div>&#x2022;</div>
                  <div>
                    {new Date().toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
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
