const Sidebar = () => {
  return (
    <aside className="col-span-4 flex flex-col border-r border-gray-300">
      <section className="col-span-4 flex flex-col items-center space-y-8 p-10">
        <div className="grid grid-cols-12 rounded-xl bg-gradient-to-br from-gray-200 via-gray-200/50 to-gray-300 p-8">
          <div className="col-span-9 grid grid-cols-1 gap-y-4">
            <div>
              <div className="text-lg font-bold text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur.
              </div>
              <div className="text-sm font-medium text-gray-600">
                Lorem ipsum dolor sit Lorem, ipsum.
              </div>
            </div>
            <div>
              <div className="w-fit rounded-3xl bg-gray-300 px-4 py-2 text-sm text-gray-700">
                Get unlimited access
              </div>
            </div>
          </div>
          <div className="col-span-3 grid w-full place-items-center">
            <i
              className="feather feather-book"
              style={{ fontSize: "115px", color: "white" }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col space-y-6">
          <div className="font-bold">People you might be interested</div>
          <div className="flex w-full flex-col space-y-4">
            {/* User suggestions */}
          </div>
        </div>

        <div className="flex w-full flex-col space-y-6">
          <div className="font-bold">My Playground list</div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className="grid grid-cols-12" key={i}>
              <div className="col-span-4 max-w-xs">
                <div className="relative aspect-square rounded-xl bg-gray-400">
                  <img src="https://placehold.co/600x400" alt="Dummy Post" />
                </div>
              </div>
              <div className="col-span-4 w-full max-w-sm">
            <div className="relative aspect-video transform rounded-xl bg-gray-400 shadow-xl transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl">
              <img
                src="https://placehold.co/600x400"
                alt="Dummy Post"
                className="rounded-xl"
              />
            </div>
          </div>
              <div className="col-span-8 flex flex-col space-y-4">
                <div className="text-base font-bold text-gray-900 decoration-indigo-600 group-hover:underline">
                  Nulla consequat massa...
                </div>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="h-8 w-8 rounded-full bg-gray-400">
                    <img
                      src="photo-1534528741775-53994a69daeb.jpg"
                      alt="User"
                      className="rounded-full"
                    />
                  </div>
                  <div>John Doe</div>
                  <div>&#x2022;</div>
                  <div>
                    {" "}
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
