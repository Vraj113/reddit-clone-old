"use client";
import React from "react";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
const Comments = () => {
  return (
    <div>
      <div className="  p-4 border2  mt-8 shadow-lg  bg-white rounded-lg mx-28  ">
        <div className="text-3xl font-semibold">Comments</div>
        <div className="bg-zinc-100 p-4 rounded-xl my-2  font-semibold text-xl flex items-center ">
          <input
            placeholder="Add Comment"
            className="outline-1 font-semibold text-xl p-2 w-full rounded-md outline-blue-500 border-2 border-zinc-400"
          />
          <button className="bg-blue-600 text-white h-full p-2 rounded-md ml-2">
            Post
          </button>
        </div>

        <div className="bg-zinc-100 p-4 rounded-xl my-2">
          <div className="flex gap-x-5 text-xl items-center font-semibold">
            <div>Vraj</div>
            <div className="text-sm">1 day ago</div>
          </div>
          <div className="font-semibold text-xl mt-2 text-zinc-700">
            This Post is hilarious af... hahahah
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
        <div className="bg-zinc-100 p-4 rounded-xl my-2">
          <div className="flex gap-x-5 text-xl items-center font-semibold">
            <div>Vraj</div>
            <div className="text-sm">1 day ago</div>
          </div>
          <div className="font-semibold text-xl mt-2 text-zinc-700">
            This Post is hilarious af... hahahah
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
        <div className="bg-zinc-100 p-4 rounded-xl my-2">
          <div className="flex gap-x-5 text-xl items-center font-semibold">
            <div>Vraj</div>
            <div className="text-sm">1 day ago</div>
          </div>
          <div className="font-semibold text-xl mt-2 text-zinc-700">
            This Post is hilarious af... hahahah
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
    </div>
  );
};

export default Comments;
