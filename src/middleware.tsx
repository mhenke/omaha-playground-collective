// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(request: NextRequestWithAuth) {
        console.log('hola request.nextUrl.pathname', request.nextUrl.pathname)
        console.log('hola request.nextauth.token', request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/admin")
            && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/denied", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/admin"] }
