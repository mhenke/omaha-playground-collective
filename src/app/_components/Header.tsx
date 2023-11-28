import Image from "next/image";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function Header({ title }: { readonly title: string }) {
  const session = await getServerAuthSession();
  return (
    <header className="navbar ">
      <div className="navbar-start">
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box  p-2 shadow"
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
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="navbar-end">
        {session ? (
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
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box  p-2 shadow"
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
                <Link href="/api/auth/signout">Signout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/api/auth/signin"
            className="/10 hover:/20 rounded-full px-10 py-3 font-semibold no-underline transition"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
