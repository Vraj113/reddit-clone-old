import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between px-10 py-2  border-b-2 h-fit items-center">
      <div>Logo</div>
      <div>
        <input
          type="text"
          name=""
          placeholder="Search Reddit"
          id=""
          className="bg-gray-100 w-[500px] h-[40px] rounded-full px-4"
        />
      </div>
      <div>
        <div>Profile pic</div>
        <div>
          <Link href="api/auth/signin">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
