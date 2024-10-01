import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export const GET = async () => {
  try {
    const posts = await prisma.posts.findMany({});
    const users = await prisma.user.findMany({});

    const userMap = users.reduce((acc, user) => {
      acc[user.id] = user.name;
      return acc;
    }, {});

    const postsWithUsernames = posts.map((post) => ({
      ...post,
      username: userMap[post.userId] || "Unknown User", // Add username or "Unknown User" if not found
    }));

    return NextResponse.json(postsWithUsernames);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const body = await req.json();

  const session = await getServerSession(authOptions);

  await prisma.posts.create({
    data: {
      title: body.title,
      description: body.description,
      type: body.type,
      userId: body.userId,
      subredditId: body.subredditId,
    },
  });

  const posts = await prisma.posts.findMany();
  console.log(posts);
  return NextResponse.json(posts);
};
