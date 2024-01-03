import React from "react";
import Slidebar from "./Slidebar";
import VideosContainer from "./VideosContainer";

function MainCoontainer() {
  return (
    <div className="flex">
      <Slidebar />
      <VideosContainer />
    </div>
  );
}

export default MainCoontainer;
