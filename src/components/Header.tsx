import { signIn, signOut, useSession } from "next-auth/react";
import { Menu } from "react-feather";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar flex items-center justify-around bg-primary text-primary-content">
      <div>
        <Menu />
      </div>
      <div className="pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Posts for ${sessionData.user.name}` : ""}
      </div>
      <div className="gap-2">
        <div className="dropdown dropdown-end">
          {sessionData?.user ? (
            <label
              tabIndex={0}
              className="avatar btn btn-circle btn-ghost"
              onClick={() => signOut()}
            >
              <div className="w-10 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </label>
          ) : (
            <button
              className="btn btn-ghost rounded-btn"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
