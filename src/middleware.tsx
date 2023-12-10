import { withAuth, type NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(function middleware(request: NextRequestWithAuth) {
  const url = request.url;
  const pathname = request.nextUrl?.pathname;
  const token = request.nextauth.token;

  console.log("middleware", request.nextauth);

  // if the user is not authenticated, redirect to /api/auth/signin
  if (!token) {
    return NextResponse.rewrite(new URL("/api/auth/signin", request.url));
  }
  // if the user is authenticated but not authorized, redirect to /denied
  if (pathname === "/admin" && token?.role !== "ADMIN") {
    console.log("do something", url, pathname, token);
    return NextResponse.rewrite(new URL("/denied", request.url));
  }
});

export const config = {
  matcher: ["/admin"],
};
