import React from "react";
import JoinButton from "./JoinButton";
const SubredditTop = ({ slug, name, description, image, bannerImage }) => {
  return (
    <div className="mt-8 mr-4">
      <div>
        <img className="rounded-xl" src={bannerImage} />
      </div>
      <div className="flex items-center ml-4 mt-4">
        <img src={image} className="w-24   h-24 rounded-full" />
        <div className="text-4xl font-bold ml-4">r/{name}</div>
        <div className="text-lg font-bold ml-4">
          <JoinButton slug={slug} />
        </div>
      </div>
      <div className="border-2 text-lg   p-2 my-4  rounded-xl">
        {description}
      </div>
    </div>
  );
};

export default SubredditTop;
