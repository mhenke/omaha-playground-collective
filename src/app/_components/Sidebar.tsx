const Sidebar = () => {
  return (
    <aside className="col-span-4 flex flex-col border-r border-gray-300">
      <section className="col-span-4 flex flex-col items-center space-y-8 p-10">
        <div className="grid grid-cols-12 rounded-xl bg-gradient-to-br from-gray-200 via-gray-200/50 to-gray-300 p-8">
          <div className="col-span-9 grid grid-cols-1 gap-y-4">
            <div>
              <div className="font-lg font-bold text-gray-900">
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
          <div className="flex flex-col space-y-4">{/* Playground list */}</div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
