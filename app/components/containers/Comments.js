"use client";
import React, { useEffect, useState } from "react";
import Comment from "../Comment";

const Comments = ({ slug }) => {
  const [commentsData, setCommentsData] = useState([]);
  const getComments = async () => {
    const res = await fetch("../../../api/comments", {
      method: "PUT",
      body: JSON.stringify({ slug }),
    });
    const data = await res.json();
    console.log(data);
    setCommentsData(data.comments);
  };
  useEffect(() => {
    console.log(slug);
    getComments();
  }, []);

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
        {commentsData.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.postedByName}
              email={comment.email}
              content={comment.content}
              postedOn={comment.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
