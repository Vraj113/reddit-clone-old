"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";
const ProfileToggle = () => {
  const { data: session, status } = useSession();
  const [profileToggle, setProfileToggle] = useState(false);

  return (
    <div>
      {" "}
      {status === "authenticated" ? (
        <>
          <p
            onClick={() => setProfileToggle(!profileToggle)}
            className="cursor-pointer"
          >
            {session.user.name}
          </p>
        </>
      ) : (
        <Link href="/api/auth/signin" className="text-xl">
          Login
        </Link>
      )}
      {profileToggle && (
        <div className="absolute bg-white p-2 border-2 right-10">
          <p>
            <img src={session.user.image} className="w-10 h-10 rounded-full" />
          </p>
          <p className="hover:bg-zinc-300 cursor-pointer rounded p-2 my-2">
            {session.user.email}
          </p>
          <Link href="/profile">
            <div className="hover:bg-zinc-300 cursor-pointer rounded p-2 my-2">
              Profile
            </div>
          </Link>
          <Link href="/settings">
            <div className="hover:bg-zinc-300 cursor-pointer rounded p-2 my-2">
              Settings
            </div>
          </Link>

          <div className="hover:bg-zinc-300 cursor-pointer rounded p-2 my-2">
            Joined Subreddits
          </div>
          <button
            onClick={() => signOut()}
            className="hover:bg-red-600 hover:text-white cursor-pointer rounded p-2 my-2 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileToggle;
