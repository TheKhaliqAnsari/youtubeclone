import React from "react";
import Slidebar from "./Slidebar";
import { Outlet } from "react-router-dom";
// import VideosContainer from "./VideosContainer";

function MainCoontainer() {
  return (
    <div className="flex">
      <Slidebar />
      {/* <VideosContainer /> */}
      <Outlet />
    </div>
  );
}

export default MainCoontainer;
