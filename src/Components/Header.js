import React from "react";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Header() {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between p-5 shadow-lg sticky top-0 z-10 bg-white">
      {/* For logo and hamburger */}
      <div className="flex items-center">
        {/* for hamburger */}
        <div className="cursor-pointer" onClick={() => toggleMenuHandler()}>
          <div className="w-6 bg-black h-1 m-1"></div>
          <div className="w-6 bg-black h-1 m-1"></div>
          <div className="w-6 bg-black h-1 m-1"></div>
        </div>
        <Logo />
      </div>
      {/* For input button and microphone */}
      <input
        type="text"
        placeholder="search videos"
        className="border border-black px-4 py-2 w-1/4 rounded-full"
      />

      {/* For user info */}
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-gray-300 h-[40px] w-[40px]"></div>
        <h2 className="font-bold">Khaliq ansari</h2>
      </div>
    </div>
  );
}

export default Header;
