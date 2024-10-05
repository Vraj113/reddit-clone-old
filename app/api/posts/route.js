import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import randomstring from "randomstring";
export const GET = async () => {
  const posts = await prisma.posts.findMany({});
  return NextResponse.json(posts);
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
      postedByEmail: body.email,
      postedBy: body.name,
      subredditId: body.subredditId,
      slug: slug,
    },
  });

  return NextResponse.json({ success: true });
};
