import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
const NavBar = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div className="flex justify-between px-10 py-2  border-b-2 h-fit items-center fixed w-full  bg-white  z-20">
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
        {/* {session && (
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src={session?.user?.image}
              alt=""
            />
          </div>
        )} */}

        <div>{session?.user?.name}</div>
        {!session ? (
          <div>
            <Link href="api/auth/signin">Login</Link>
          </div>
        ) : (
          <div>
            <Link href="api/auth/signout">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
