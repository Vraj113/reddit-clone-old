import React from "react";
import prisma from "@/lib/prisma";
import Comments from "../../../../components/containers/Comments";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Link from "next/link";
const Post = async ({ params }) => {
  const post = await prisma.posts.findFirst({
    where: {
      slug: params.postSlug,
    },
  });
  const subredditData = await prisma.subreddit.findUnique({
    where: {
      name: post.subredditId,
    },
  });

  console.log(post);
  if (!subredditData) {
    // console.log();
    return (
      <>
        <div className="w-full h-full flex justify-center items-center text-4xl font-semibold">
          <div className="-mt-10 -ml-10">Something went wrong</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="  p-4 border2  mt-8 shadow-lg  bg-white rounded-lg mx-28">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div>
                {
                  <img
                    className="rounded-full w-8 h-8 "
                    src={subredditData.image}
                  />
                }
              </div>
              <Link href={"/r/" + post.subredditId}>
                <div className="text-xl ml-2">r/{post.subredditId}</div>
              </Link>
            </div>
            <div>
              Posted By <b>{post.postedBy}</b>
              {/* Posted By <b>{user.name ? user.name : "[Deleted Account]"}</b> */}
            </div>
          </div>
          <div className="text-4xl font-semibold">{post.title}</div>
          <div className="text-lg text-zinc-700 mt-4">{post.description}</div>
          <div className="  overflow-hidden justify-center flex  ">
            {post.imageURL && (
              <img
                className="w-auto h-[400px] rounded-xl"
                src={post.imageURL}
              />
            )}
          </div>
          <div className="flex gap-x-2   border-2 rounded-full bg-zinc-50 w-fit p-2 border-zinc-500 m-4">
            <div className="group p-1 px-2 rounded-xl   border-black cursor-pointer ">
              <div className="group-hover:hidden">
                <ThumbUpOutlinedIcon />
              </div>
              <div className="hidden group-hover:block">
                <ThumbUpIcon />
              </div>
            </div>
            <div className="p-1 px-2 rounded-xl   border-black cursor-pointer ">
              {post.votes}
            </div>
            <div className=" group p-1 px-2 rounded-xl  border-black cursor-pointer ">
              <ThumbDownOutlinedIcon className="group-hover:hidden" />
              <div className="hidden group-hover:block">
                <ThumbDownIcon />
              </div>
            </div>
            <div className="p-1 px-2 rounded-xl  border-black cursor-pointer pt-2 ">
              <svg
                fill="white"
                height="20"
                viewBox="-2 -2 52 52"
                width="20"
                className=""
              >
                <path
                  clipRule="evenodd"
                  d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                  stroke="black"
                  strokeWidth="3"
                ></path>
              </svg>
            </div>
            <div className=" group p-1 px-2 rounded-xl  border-black cursor-pointer ">
              <div className="group-hover:hidden">
                <ShareOutlinedIcon />
              </div>
              <div className="hidden group-hover:block">
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
        <Comments slug={params.postSlug} />
      </>
    );
  }
};

export default Post;
