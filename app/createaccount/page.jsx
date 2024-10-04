"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const router = useRouter();
  const check = async () => {
    let res = await fetch("/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    let response = await res.json();

    if (response.success) {
      setIsUsernameAvailable(true);
    } else {
      setIsUsernameAvailable(false);
    }
  };
  const onSubmit = async () => {
    let res = await fetch("/api/user/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    let response = await res.json();
    if (response.success) {
      router.push("/");
    }
  };
  useEffect(() => {
    check();
  }, [username]);

  return (
    <div>
      <div>Create Account</div>

      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        name="username"
        value={username}
        className="text-xl border-2 block"
        placeholder="choose username"
      />
      {username !== "" && (
        <div>
          {isUsernameAvailable ? (
            <div className="text-green-600 font-semibold">
              Username Available
            </div>
          ) : (
            <div className="text-red-600 font-semibold">
              Username Not Available
            </div>
          )}
        </div>
      )}
      <button className="block" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateAccount;
