import { withAuth, type NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
console.log("hola middleware");

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    console.log("hola req.nextUrl.pathname", req.nextUrl.pathname);
    console.log("hola req?.nextauth?.token?.role", req?.nextauth?.token?.role);

    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req?.nextauth?.token?.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
  },
  {
    secret: process.env.NEXTAUTH_SECRET,
  },
);
console.log("hola middleware 2");
export const config = { matcher: ["/admin"] };
