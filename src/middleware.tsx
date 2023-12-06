import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  console.log("hola req.nextUrl.pathname", req.nextUrl.pathname);
  console.log("hola req?.nextauth?.token?.role", req?.nextauth?.token?.role);

  if (
    req.nextUrl.pathname.startsWith("/admin") &&
    req?.nextauth?.token?.role != "admin"
  ) {
    return NextResponse.rewrite(new URL("/denied", req.url));
  }
});

export const config = { matcher: ["/admin"] };
