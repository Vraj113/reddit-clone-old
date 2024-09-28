import React from "react";

const Post = () => {
  return (
    <div className=" bg-white p-4 hover:bg-gray-200 rounded-xl m-4 flex flex-col gap-y-3 w-[50vw] h-fit border-t-2 py-2">
      <div className="text-sm">r/marvelstudios • 4 days ago</div>
      <div className="text-lg font-semibold">
        Was Rewatching WandaVision and noticed this Black Heart
      </div>
      <img
        className="rounded-xl"
        src="https://preview.redd.it/was-rewatching-wandavision-and-noticed-this-black-heart-v0-5ftbeku9hqqd1.jpg?width=1080&crop=smart&auto=webp&s=0761e434a76e603e6964465bd1ee3e20f42d8183"
      />
      <div className="flex gap-x-2">
        <div>upvote</div>
        <div>1.7k</div>
        <div>downvote</div>
        <div>Comments</div>
        <div>Share</div>
      </div>
    </div>
  );
};

export default Post;
