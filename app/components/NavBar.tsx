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
      <div>Options</div>
    </div>
  );
};

export default NavBar;
