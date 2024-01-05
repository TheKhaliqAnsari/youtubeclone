import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png"
        alt="logo"
        className="w-[60px]"
      />

      <a href="/">
        <h3 className="font-bold text-2xl">YouTube</h3>
      </a>
    </>
  );
}

export default Logo;
