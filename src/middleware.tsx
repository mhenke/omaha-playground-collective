import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log("middleware");
    const url = request.url;
    const pathname = request.nextUrl?.pathname;
    const token = request.nextauth.token;
    if (pathname === "/admin") {
      console.log("do something", request.nextauth);
    }
  },
  {
    callbacks: {
      authorized: () => {
        console.log("run");
        return true;
      },
    },
  },
);

export const config = {
  matcher: ["/admin"],
};
