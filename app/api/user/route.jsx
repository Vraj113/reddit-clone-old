import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import * as jose from "jose";
import { getToken } from "next-auth/jwt"; // To verify the token

export const POST = async (req) => {
  try {
    const body = await req.json();

    // Find if the username already exists
    const isUser = await prisma.user.findFirst({
      where: {
        username: body.username,
      },
    });

    // Get the token from the request
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!isUser) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({
        success: false,
        message: "Username already exists",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
};

export const PUT = async (req) => {
  try {
    const body = await req.json();
    const cookieStore = cookies();

    // Find if the username already exists
    const isUser = await prisma.user.findFirst({
      where: {
        username: body.username,
      },
    });

    // Retrieve the session token from cookies
    const token =
      cookieStore.get("next-auth.session-token")?.value ||
      cookieStore.get("__Secure-next-auth.session-token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "No session token found" },
        { status: 401 }
      );
    }

    // Decode JWT
    const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);
    const decoded = await jose.jwtVerify(token, secret);
    const userId = decoded.payload?.sub; // 'sub' contains the user ID in NextAuth tokens

    if (!isUser) {
      // Update user with the new username
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          username: body.username,
        },
      });

      // Create a new JWT with the updated username
      const newToken = await new jose.SignJWT({
        ...decoded.payload, // Include existing token payload
        username: body.username, // Update username
      })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h") // Set token expiration time
        .sign(secret);

      // Set the new JWT as a cookie
      const response = NextResponse.json({ success: true });
      response.cookies.set("next-auth.session-token", newToken, {
        httpOnly: true, // For security
        secure: process.env.NODE_ENV === "production", // Use secure cookie in production
        path: "/", // Set the path for the cookie
        maxAge: 60 * 60 * 2, // 2 hours
      });

      return response;
    } else {
      return NextResponse.json({ message: "Username already exists" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
};
