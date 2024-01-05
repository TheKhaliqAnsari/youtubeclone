import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // Slide bar toggle functionality :-
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const performApiSearch = async (searchString) => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchString);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performApiSearch(search);
  }, [search]);

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
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
