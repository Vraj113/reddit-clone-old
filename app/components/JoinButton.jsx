"use client";
import React, { useState, useEffect } from "react";

const JoinButton = ({ slug }) => {
  const [joined, setJoined] = useState("");
  const onJoin = async () => {
    const res = await fetch("../api/join", {
      method: "POST",
      body: JSON.stringify({ slug }),
    });
    const response = await res.json();
  };
  const isJoin = async () => {
    const res = await fetch("../api/join", {
      method: "PUT",
      body: JSON.stringify({ slug }),
    });
    const response = await res.json();
    if (response.joined) {
      setJoined(true);
    } else {
      setJoined(false);
    }
  };
  useEffect(() => {
    isJoin();
  }, []);
  if (joined === "") {
    return;
  }
  return (
    <div>
      {!joined && (
        <button
          onClick={() => {
            onJoin();
            setJoined(true);
          }}
          className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
        >
          Join
        </button>
      )}
      {joined && (
        <button
          onClick={() => {
            onJoin();
            setJoined(false);
          }}
          className="py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
        >
          Joined
        </button>
      )}
    </div>
  );
};

export default JoinButton;
