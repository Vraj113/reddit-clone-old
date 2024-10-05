import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function middleware(request) {
  console.log("middleware ran2");
  const cookieStore = cookies();

  const token =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  if (token) {
    try {
      // Convert the secret into a Uint8Array
      const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

      // Verify the token with the secret
      var decoded = await jose.jwtVerify(token, secret);
      console.log(decoded);
    } catch (error) {
      console.error("Token verification error:", error);
      // return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const { pathname } = request.nextUrl;

  // Allow access to the login page without a token
  if (pathname === "/") {
    let username = decoded?.payload.username;

    if (username !== "") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/createaccount", request.url));
  }
  //   if (pathname === "/login") {
  //     if (token) {
  //       // If logged in, redirect away from login page to home
  //       return NextResponse.redirect(new URL("/", request.url));
  //     }
  //     return NextResponse.next();
  //   }

  // Redirect to login if not authenticated for other protected routes
  //   if (!token && pathname !== "/login") {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Define paths for middleware
};
