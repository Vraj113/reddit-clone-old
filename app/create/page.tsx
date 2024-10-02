"use client";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";

export const Create = () => {
  const [data, setData] = useState({
    userId: "",
    title: "",
    description: "",
    type: "TEXT",
    subredditId: "",
  });

  useEffect(() => {
    // Get the session and set the userId when the component mounts
    const fetchSession = async () => {
      const session = await getSession();
      if (session?.user?.id) {
        setData((prevData) => ({ ...prevData, userId: session.user.id }));
      }
    };
    fetchSession();
  }, []);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    await fetch("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Send userId along with other post data
    });
  };

  return (
    <div className="flex-col flex gap-y-4 py-4 px-8">
      <div className="font-semibold text-3xl">Create Post</div>

      <div className="flex gap-x-2 items-center text-lg">
        <div className="text-3xl">r/</div>
        <input
          type="text"
          name="subredditId"
          value={data.subredditId}
          onChange={onChange}
          className="outline-1 border-2 p-1 rounded-[5px] outline-blue-600 w-[200px] border-zinc-400 my-2"
        />
      </div>
      <div className="flex gap-x-2 p-2 my-2">
        <div className="border-b-2 border-blue-700 cursor-pointer">Text</div>
        <div>Images</div>
        <div>Link</div>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={data.title}
            className="outline-1 border-2 p-2 text-lg rounded-[10px] w-[500px] border-zinc-400 my-2"
            onChange={onChange}
          />
        </div>
        <div>
          <textarea
            placeholder="description"
            name="description"
            value={data.description}
            onChange={onChange}
            className="outline-1 border-2 p-2 text-lg rounded-[10px] w-[500px] border-zinc-400 my-2"
          ></textarea>
        </div>
      </div>
      <div>
        <button
          onClick={onSubmit}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 p-2 text-white rounded-md px-4"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Create;
