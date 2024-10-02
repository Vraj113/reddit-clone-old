"use client";
import React, { useEffect, useState } from "react";
import Post from "../Post";
const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const getPosts = async () => {
    const resonse = await fetch("api/posts", { method: "GET" });
    const data = await resonse.json();
    setPostsData(data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsData.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
          postedBy={post.username}
          votes={post.votes}
          slug={post.slug}
          subredditId={post.subredditId}
        />
      ))}
    </div>
  );
};

export default Posts;
