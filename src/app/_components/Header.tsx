import Image from "next/image";
import { Edit } from "react-feather";

const Header = () => {
  return (
    <header className="relative flex h-24 w-full select-none items-center justify-between border-b border-gray-300 px-10 text-gray-900">
      <div className="navbar bg-base-100">
        <div className="navbar-start text-primary">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-circle btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center text-neutral-400">
          <a className="btn-ghost btn-lg rounded text-6xl normal-case">
            Mike22
          </a>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              <div className="w-10 rounded-full">
                <Image
                  src="/photo-1534528741775-53994a69daeb.jpg"
                  alt="User"
                  width={48}
                  height={48}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary btn-outline px-2 py-1 text-sm ">
            <Edit /> Write
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
