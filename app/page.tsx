import Post from "./components/Post";

export default function Home() {
  return (
    <>
      <div className="flex  flex-col ">
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
