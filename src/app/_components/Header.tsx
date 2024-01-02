import Image from "next/image";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";

export default async function Header({ title }: { readonly title: string }) {
  const session = await getServerAuthSession();
  console.log(session);
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-neutral-content p-2 text-neutral shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          className="btn-xls btn btn-ghost sm:btn-sm md:btn-md lg:btn-lg"
          href="/"
        >
          {title}
        </Link>
      </div>
      <div className="navbar-end">
        {session ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              <div className="w-10 rounded-full">
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="User"
                    width={48}
                    height={48}
                  />
                ) : (
                  <span className="text-3xl">
                    {session?.user?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-neutral-content p-2 text-neutral shadow"
            >
              {session?.role === "ADMIN" ? (
                <li>
                  <Link href="/admin">Admin Panel</Link>
                </li>
              ) : null}

              <li>
                <Link href="/api/auth/signout">Signout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/api/auth/signin" className="btn btn-ghost">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
