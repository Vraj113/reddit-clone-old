import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import randomstring from "randomstring";
export const GET = async () => {
  const posts = await prisma.posts.findMany({});
  return NextResponse.json(posts);

  // try {
  //   const posts = await prisma.posts.findMany({});
  //   const users = await prisma.user.findMany({});

  //   const userMap = users.reduce((acc, user) => {
  //     acc[user.id] = user.name;
  //     return acc;
  //   }, {});
  //   const postsWithUsernames = posts.map((post) => ({
  //     ...post,
  //     username: userMap[post.userId] || "Unknown User", // Add username or "Unknown User" if not found
  //   }));

  //   return NextResponse.json(postsWithUsernames);
  // } catch (error) {
  //   return NextResponse.json(
  //     { error: "Failed to fetch posts", error },
  //     { status: 500 }
  //   );
  // }
};

export const POST = async (req) => {
  const body = await req.json();
  const slug = randomstring.generate({
    length: 12,
    charset: "alphabetic",
  });
  await prisma.posts.create({
    data: {
      title: body.title,
      description: body.description,
      type: body.type,
      userId: body.userId,
      postedBy: body.name,
      subredditId: body.subredditId,
      slug: slug,
    },
  });

  const posts = await prisma.posts.findMany({});

  return NextResponse.json(posts);
};
