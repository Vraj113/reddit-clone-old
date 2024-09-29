import React from "react";

export const Create = () => {
  return (
    <div className="  flex-col flex gap-y-4 py-4 px-8">
      <div className="font-semibold text-3xl">Create Post</div>

      <div className="flex gap-x-2 items-center text-lg">
        <div className="text-3xl">r/</div>
        <input
          type="text"
          className="outline-1 border-2 p-1 rounded-[5px] outline-blue-600 w-[200px] border-zinc-400 my-2"
        />
      </div>
      <div className="flex gap-x-2 p-2 my-2">
        <div className="border-b-2 border-blue-700 cursor-pointer">Text</div>
        <div>Images </div>
        <div>Link</div>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="title"
            className="outline-1 border-2 p-2 text-lg rounded-[10px] w-[500px] border-zinc-400 my-2"
          />
        </div>
        <div>
          <textarea
            name=""
            placeholder="description"
            className="outline-1 border-2 p-2 text-lg rounded-[10px] w-[500px] border-zinc-400 my-2"
            id=""
          ></textarea>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700  p-2 text-white rounded-md px-4"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Create;
