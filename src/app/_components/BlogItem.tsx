import { Bookmark } from "react-feather";
import Tag from "./Tag";

const BlogItem = ({ isLastItem }: { isLastItem: boolean }) => {
  return (
    <div className="flex h-max w-full flex-col px-10 py-1 last:border-none">
      <a href="/user" className="group flex w-full items-center space-x-4">
        <div>
          <div className="relative h-10 w-10 rounded-full bg-gray-400">
            <img
              src="photo-1534528741775-53994a69daeb.jpg"
              alt="User"
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <div>
            <span className="group-hover:underline">John Doe</span> &#x2022;{" "}
            {new Date().toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div>The founder & teacher @ clubofcoders.com</div>
        </div>
      </a>
      <a href="/post">
        <div className="group grid grid-cols-12 pt-4">
          <div className="col-span-8 flex flex-col justify-center space-x-4 space-y-4">
            <div className="text-xl font-extrabold decoration-indigo-600 group-hover:underline">
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
              aliquet nec, vulputate eget, arcu.
            </div>
            <div className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
              vulputate eleifend tellus.
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
        </div>
      </a>
      <div className="flex w-full items-center justify-between space-x-4 pt-4">
        <div className="flex flex-row flex-wrap space-x-2">
          <Tag />
        </div>
        <div>
          <i className="text-2xl text-indigo-700">
            <Bookmark />
          </i>
        </div>
      </div>
      {!isLastItem && (
        <div className="divider flex w-full items-center justify-between"></div>
      )}
    </div>
  );
};

export default BlogItem;
