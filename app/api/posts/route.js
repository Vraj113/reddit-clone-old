import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export const GET = async () => {
  const posts = await prisma.posts.findMany();
  return NextResponse.json(posts);
};

export const POST = async (req) => {
  const body = await req.json();
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
  return NextResponse.json(posts);
};
