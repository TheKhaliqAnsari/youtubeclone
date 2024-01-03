import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

function Slidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen ? (
    <div className="flex flex-col shadow-lg p-4 h-[100vh] w-48 sticky top-28" >
      <h1 className="font-bold text-2xl">Explore</h1>
      <ul className="m-3 flex flex-col">
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Trending
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Shopping
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Music
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Movies
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Live
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Gaming{" "}
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          News
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Sports
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Learning
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Fashion & <br></br> Beauty
        </li>
        <li className="text-lg p-2 font-bold cursor-pointer hover:bg-black hover:text-white w-[100%]">
          Podcasts
        </li>
      </ul>
    </div>
  ) : null;
}

export default Slidebar;
