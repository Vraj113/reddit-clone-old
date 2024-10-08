import React from "react";
import prisma from "@/lib/prisma";
import Post from "@/app/components/Post";
import SubredditTop from "@/app/components/SubredditTop";

const SubReddit = async ({ params }) => {
  let posts = [];
  let subredditData;
  const subreddit = params.slug;
  if (subreddit) {
    subredditData = await prisma.subreddit.findUnique({
      where: {
        name: subreddit,
      },
    });

    if (subreddit) {
      // Fetch posts for the subreddit
      posts = await prisma.posts.findMany({
        where: {
          subredditId: subreddit, // Use the ID from the subreddit data
        },
        orderBy: {
          createdAt: "desc", // Change this to the field you want to sort by
        },
      });
    }
  }

  return (
    <div className="mx-28">
      {subredditData && (
        <SubredditTop
          slug={params.slug}
          name={subredditData.name}
          description={subredditData.description}
          image={subredditData.image}
          bannerImage={subredditData.bannerImage}
        />
      )}
      <div className="w-full border-t-2 mb-4 border-zinc-400 "></div>
      <div className="text-4xl font-semibold rounded bg-zinc-50 w-fit p-2 hover:bg-zinc-100    ">
        Posts
      </div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            link={post.link}
            postedBy={post.postedBy}
            votes={post.votes}
            subredditId={post.subredditId}
            slug={post.slug}
            createdAt={post.createdAt}
            imageURL={post.imageURL}
          />
        ))
      ) : (
        <p>No posts found for this subreddit.</p>
      )}
    </div>
  );
};

export default SubReddit;
