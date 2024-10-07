"use client";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const Comment = ({ name, email, content, postedOn }) => {
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
    <div>
      {" "}
      <div className="bg-zinc-100 p-4 rounded-xl my-2">
        <div className="flex gap-x-5 text-xl items-center font-semibold">
          <div>{name}</div>
          <div className="text-sm">{convertISOToRelativeTime(postedOn)}</div>
        </div>
        <div className="font-semibold text-xl mt-2 text-zinc-700">
          {content}
        </div>
        <div className="flex   mt-2     w-fit py-2    ">
          <div className="group p-1 px-2 rounded-xl   border-black cursor-pointer ">
            <div className="group-hover:hidden">
              <ThumbUpOutlinedIcon />
            </div>
            <div className="hidden group-hover:block">
              <ThumbUpIcon />
            </div>
          </div>
          <div className="p-1 px-2 rounded-xl   border-black cursor-pointer ">
            {0}
          </div>
          <div className=" group p-1 px-2 rounded-xl  border-black cursor-pointer ">
            <ThumbDownOutlinedIcon className="group-hover:hidden" />
            <div className="hidden group-hover:block">
              <ThumbDownIcon />
            </div>
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
    </div>
  );
};

export default Comment;
