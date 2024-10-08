import Link from "next/link";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LinkPreview from "./LinkPreview";
const Post = ({
  title,
  img,
  link,
  description,
  postedBy,
  votes,
  slug,
  createdAt,
  imageURL,
  subredditId,
}) => {
  function convertISOToRelativeTime(isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = {
      year: 31536000, // 365 days
      month: 2592000, // 30 days
      week: 604800, // 7 days
      day: 86400, // 1 day
      hour: 3600, // 1 hour
      minute: 60, // 1 minute
      second: 1, // 1 second
    };

    for (const interval in intervals) {
      const count = Math.floor(seconds / intervals[interval]);
      if (count > 0) {
        return count === 1
          ? `${count} ${interval} ago`
          : `${count} ${interval}s ago`;
      }
    }

    return "just now"; // In case the time difference is very small
  }

  return (
    <div className=" my-4 w-fit border-b-2 hover:bg-gray-100 bg-white shadow-md shadow-zinc-100 rounded-lg  ">
      {" "}
      <Link href={`/r/${subredditId}/posts/${slug}`}>
        <div className="  p-4  rounded-xl flex flex-col gap-y-3 w-[50vw] h-fit py-2 cursor-pointer">
          <div className="text-sm">
            r/{subredditId} • {convertISOToRelativeTime(createdAt)} • Posted By{" "}
            <b>{postedBy}</b>
          </div>
          <div className="text-lg font-semibold">{title}</div>
          {img && (
            <img
              className="rounded-xl"
              src="https://preview.redd.it/was-rewatching-wandavision-and-noticed-this-black-heart-v0-5ftbeku9hqqd1.jpg?width=1080&crop=smart&auto=webp&s=0761e434a76e603e6964465bd1ee3e20f42d8183"
            />
          )}
          {description && <div className="text-xl">{description}</div>}
          {link && <LinkPreview link={link} />}
          {imageURL && (
            <div className="flex justify-center ">
              <img className="rounded-xl" src={imageURL} />
            </div>
          )}
        </div>
      </Link>
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
          {votes}
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
  );
};

export default Post;
