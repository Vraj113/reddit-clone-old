import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function PUT(req) {
  const cookieStore = cookies();
  const body = await req.json();
  const token = cookieStore.get("next-auth.session-token");

  if (!token || !token.value) {
    return NextResponse.json({ message: "Token not found" }, { status: 401 });
  }

  const decoded = jwt.verify(token.value, process.env.NEXTAUTH_SECRET);
  if (!decoded || !decoded.email) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
  const user = await prisma.user.findFirst({
    where: {
      email: decoded.email,
    },
    select: {
      joinedSubs: true,
    },
  });

  const currentSubs = user.joinedSubs || [];
  if (currentSubs.includes(body.slug)) {
    return NextResponse.json({ joined: true }, { status: 200 });
  } else {
    return NextResponse.json({ joined: false }, { status: 200 });
  }
}

export async function POST(req) {
  try {
    const cookieStore = cookies();
    const body = await req.json();
    const token = cookieStore.get("next-auth.session-token");

    if (!token || !token.value) {
      return NextResponse.json({ message: "Token not found" }, { status: 401 });
    }

    const decoded = jwt.verify(token.value, process.env.NEXTAUTH_SECRET);
    if (!decoded || !decoded.email) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: decoded.email,
      },
      select: {
        joinedSubs: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const currentSubs = user.joinedSubs || [];
    if (currentSubs.includes(body.slug)) {
      const updatedSubs = currentSubs.filter((sub) => sub !== body.slug);

      await prisma.user.update({
        where: {
          email: decoded.email,
        },
        data: {
          joinedSubs: updatedSubs,
        },
      });

      return NextResponse.json({ code: 0, message: "Left successfully" });
    }
    if (currentSubs.includes(body.slug)) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 409 }
      );
    }

    const updatedSubs = Array.from(new Set([...currentSubs, body.slug]));

    await prisma.user.update({
      where: {
        email: decoded.email,
      },
      data: {
        joinedSubs: updatedSubs,
      },
    });

    return NextResponse.json({ code: 1, message: "Joined successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
