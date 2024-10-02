import React from "react";
import prisma from "@/lib/prisma";

const Post = async ({ params }) => {
  const post = await prisma.posts.findMany({
    where: {
      slug: params.postSlug,
    },
  });
  const user = await prisma.user.findUnique({
    where: {
      id: post[0].userId,
    },
  });
  const subredditData = await prisma.subreddit.findUnique({
    where: {
      name: post[0].subredditId,
    },
  });

  console.log(post);
  return (
    <div className=" rounded p-4 border-2 mr-8 mt-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div>
            <img className="rounded-full w-8 h-8 " src={subredditData.image} />
          </div>
          <div className="text-xl ml-2">r/{post[0].subredditId}</div>
        </div>
        <div>
          Posted By <b>{user.name}</b>
        </div>
      </div>
      <div className="text-4xl font-semibold">{post[0].title}</div>
      <div className="text-lg text-zinc-700 mt-4">{post[0].description}</div>
      <div className="flex gap-x-2 mt-8">
        <div className="p-1 px-2 rounded-xl border-2 border-black cursor-pointer hover:bg-zinc-50">
          upvote
        </div>
        <div className="p-1 px-2 rounded-xl border-2 border-black cursor-pointer hover:bg-zinc-50">
          {post[0].votes}
        </div>
        <div className="p-1 px-2 rounded-xl border-2 border-black cursor-pointer hover:bg-zinc-50">
          downvote
        </div>
        <div className="p-1 px-2 rounded-xl border-2 border-black cursor-pointer hover:bg-zinc-50">
          Comments
        </div>
        <div className="p-1 px-2 rounded-xl border-2 border-black cursor-pointer hover:bg-zinc-50">
          Share
        </div>
      </div>
    </div>
  );
};

export default Post;
