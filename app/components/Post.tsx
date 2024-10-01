import React from "react";

const Post = ({
  key,
  title,
  img,
  description,
  postedBy,
  votes,
  subredditId,
}) => {
  return (
    <div className="border-t-2 m-4 p-1 w-fit">
      <div className=" bg-white p-4 hover:bg-gray-200 rounded-xl flex flex-col gap-y-3 w-[50vw] h-fit py-2 cursor-pointer">
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
        <div className="flex gap-x-2">
          <div>upvote</div>
          <div>{votes}</div>
          <div>downvote</div>
          <div>Comments</div>
          <div>Share</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
