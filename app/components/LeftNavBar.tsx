import Link from "next/link";
import React from "react";

const LeftNavBar = () => {
  return (
    <div className="h-[100vh] border-r-2 p-4 text-lg">
      <Link href="/">
        <div className="py-2 px-4 font-semibold bg-gray-100 rounded my-2 min-w-48 cursor-pointer hover:bg-gray-100">
          Home
        </div>
      </Link>
      <Link href="/popular">
        <div className="py-2 px-4 font-semibold  rounded my-2 min-w-48 cursor-pointer hover:bg-gray-100">
          Popular
        </div>
      </Link>
      <Link href="/explore">
        <div className="py-2 px-4 font-semibold  rounded my-2 min-w-48 cursor-pointer hover:bg-gray-100">
          Explore
        </div>
      </Link>
      <Link href="/all">
        <div className="py-2 px-4 font-semibold  rounded my-2 min-w-48 cursor-pointer hover:bg-gray-100">
          All
        </div>
      </Link>
    </div>
  );
};

export default LeftNavBar;
