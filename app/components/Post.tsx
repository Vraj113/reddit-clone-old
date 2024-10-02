import Link from "next/link";
import React from "react";

const Post = ({
  key,
  title,
  img,
  description,
  postedBy,
  votes,
  slug,
  subredditId,
}) => {
  return (
    <Link href={`/r/${subredditId}/posts/${slug}`}>
      <div className=" my-4 w-fit border-b-2">
        <div className=" bg-white p-4  hover:bg-gray-200 rounded-xl flex flex-col gap-y-3 w-[50vw] h-fit py-2 cursor-pointer">
          <div className="text-sm">
            r/{subredditId} • 4 days ago • Posted By <b>{postedBy}</b>
          </div>
          <div className="text-lg font-semibold">{title}</div>
          {img && (
            <img
              className="rounded-xl"
              src="https://preview.redd.it/was-rewatching-wandavision-and-noticed-this-black-heart-v0-5ftbeku9hqqd1.jpg?width=1080&crop=smart&auto=webp&s=0761e434a76e603e6964465bd1ee3e20f42d8183"
            />
          )}
          <div className="text-xl">{description}</div>
          <div className="flex gap-x-2 mt-8">
            <div className="p-1 px-2 rounded-xl border-2 border-black cursor-pointer hover:bg-zinc-50">
              upvote
            </div>
            <div className="p-1 px-2 rounded-xl border-2 border-black cursor-pointer hover:bg-zinc-50">
              {votes}
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
      </div>
    </Link>
  );
};

export default Post;
