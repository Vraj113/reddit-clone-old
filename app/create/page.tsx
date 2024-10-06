"use client";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import Select from "react-select";
export const Create = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [data, setData] = useState({
    email: "",
    name: "",
    title: "",
    description: "",
    type: "TEXT",
    subredditId: "",
    imageURL: "",
  });

  const options = [
    { value: "All", label: "All" },
    { value: "AskReddit", label: "AskReddit" },
    { value: "Vent", label: "Vent" },
    { value: "DarkReddit", label: "DarkReddit" },
    { value: "NewToReddit", label: "NewToReddit" },
  ];

  const fetchSession = async () => {
    const session = await getSession();

    if (session) {
      setData((prevData) => ({
        ...prevData,
        email: session.user?.email || "",
        name: session.user?.name || "",
      }));
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    // Get the session and set the userId when the component mounts
    fetchSession();
  }, []);

  // General input change handler for text inputs
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Separate onChange handler for react-select
  const onSelectChange = (selectedOption) => {
    setData({ ...data, subredditId: selectedOption.value });
  };

  const onSubmit = async () => {
    console.log("onSubmit Ran");

    let imageURL = data.imageURL;
    if (selectedImage) {
      const fd = new FormData();
      fd.append("file", selectedImage);
      fd.append("upload_preset", "szsvcewb");

      const resCloud = await fetch(
        "https://api.cloudinary.com/v1_1/dz5tq2gjz/image/upload",
        {
          method: "POST",
          body: fd,
        }
      );
      const imageData = await resCloud.json();
      imageURL = imageData.url;
    }

    const updatedData = {
      ...data,
      imageURL,
    };

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const response = await res.json();
    if (response.success) {
      setData({
        email: updatedData.email,
        name: updatedData.name,
        title: "",
        description: "",
        type: "TEXT",
        subredditId: "",
        imageURL: "",
      });
      setSelectedImage(null); // Clear selected image after submission
      setPreviewImage(null); // Clear image preview after submission
    }
  };

  return (
    <div className="flex-col flex gap-y-4 py-4 px-8 bg-zinc-50 h-full">
      <div className="font-semibold text-3xl">Create Post</div>

      <div className="flex gap-x-2 items-center text-lg">
        <div className="text-3xl">r/</div>
        <Select
          value={options.find((option) => option.value === data.subredditId)}
          onChange={onSelectChange} // Use the new onSelectChange handler here
          options={options}
          className="outline-1 p-1 rounded-[5px] outline-blue-600 w-[200px] border-zinc-400 my-2"
        />
      </div>

      <div className="flex gap-x-2 p-2 my-2">
        <div
          className={`cursor-pointer ${
            data.type === "TEXT" ? "border-b-2 border-blue-700" : ""
          }`}
          onClick={() => {
            setData({ ...data, type: "TEXT" });
          }}
        >
          Text
        </div>
        <div
          className={`cursor-pointer ${
            data.type === "IMAGE" ? "border-b-2 border-blue-700" : ""
          }`}
          onClick={() => {
            setData({ ...data, type: "IMAGE" });
          }}
        >
          Images
        </div>
        <div
          className={`cursor-pointer ${
            data.type === "LINK" ? "border-b-2 border-blue-700" : " "
          }`}
          onClick={() => {
            setData({ ...data, type: "LINK" });
          }}
        >
          Link
        </div>
      </div>

      {data.type == "TEXT" && (
        <div className="textClass">
          <div>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={data.title}
              className="outline-1 border-2 p-2 text-lg rounded-[10px] w-[500px] border-zinc-400 my-2"
              onChange={onChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Description"
              name="description"
              value={data.description}
              onChange={onChange}
              className="outline-1 border-2 p-2 text-lg rounded-[10px] w-[500px] border-zinc-400 my-2"
            ></textarea>
          </div>
        </div>
      )}
      {data.type == "IMAGE" && (
        <div className="imageClass">
          <div>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={data.title}
              className="outline-1 border-2 p-2 text-lg rounded-[10px] w-[500px] border-zinc-400 my-2"
              onChange={onChange}
            />
          </div>{" "}
          <div>
            <input
              type="file"
              id="imgInput"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="imgInput"
              className="border-2 border-blue-500 border-dashed w-[500px] h-auto min-h-[200px] max-h-[500px] rounded-lg overflow-hidden justify-center items-center flex"
            >
              {!previewImage && (
                <div className="font-semibold w-fit">
                  Please Upload an image
                </div>
              )}
              {previewImage && (
                <div>
                  <img
                    src={previewImage}
                    alt="Selected"
                    className="w-full h-full"
                  />
                </div>
              )}
            </label>
          </div>
        </div>
      )}
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
