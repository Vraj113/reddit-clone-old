"use client";
import React, { useEffect, useState } from "react";
import Post from "../Post";
const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const getPosts = async () => {
    const resonse = await fetch("api/posts", { method: "GET" });
    const data = await resonse.json();
    console.log(data);
    setPostsData(data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="ml-28">
      {postsData.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
          postedBy={post.postedBy}
          votes={post.votes}
          slug={post.slug}
          createdAt={post.createdAt}
          imageURL={post.imageURL}
          subredditId={post.subredditId}
        />
      ))}
    </div>
  );
};

export default Posts;
