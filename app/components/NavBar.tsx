import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProfileToggle from "../components/ProfileToggle";
const NavBar = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div className="flex justify-between px-10 py-2  border-b-2 h-fit items-center fixed w-full  bg-white  z-20">
      <div>
        <img src="/logo.png" className="h-16 w-auto" />
      </div>

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
        {/* {session && (
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src={session?.user?.image}
              alt=""
            />
          </div>
        )} */}

        <ProfileToggle />
      </div>
    </div>
  );
};

export default NavBar;
