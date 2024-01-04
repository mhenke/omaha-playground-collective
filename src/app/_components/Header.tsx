import Image from "next/image";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import HeaderMenu from "./HeaderMenu";

export default async function Header({ title }: { readonly title: string }) {
  const session = await getServerAuthSession();
  console.log(session);
  return (
    <header className="navbar ">
      <div className="navbar-start">
        <HeaderMenu />
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
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABSAFIDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/8QAGRABAQEBAQEAAAAAAAAAAAAAAAECEQMS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9WpbWsT3EHL6OX0js9I5t5Ac1gkUuRMhNzFswucq5yC2Q8EhpAi8BuAJ22J6i1hNRsuXcc+8uvcR1lBzXLZhX5bMpEzlXOTZyeZRLMm+TTJuBJ8CnAA6bCaitJolz7iWovpKxBPjZlvDSEiZPIJDyJM43jQEzgaEnRSaPSaSR0lpTaWqkw0J00pSkNCSnlRMGdZ0AwL0BOmp6UqWmkltHSu0NJM6aUhoSrKaVOHgRujrGAG6CgJ2VLYDZQ2joAAhsgEqQ0ACaAAAAAn/2Q=="
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
