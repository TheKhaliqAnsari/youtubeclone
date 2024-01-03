import React from "react";

function VideoFilterButtons({ name }) {
  return (
    <button className="bg-gray-100 m-5 px-8 font-bold rounded-lg hover:bg-black hover:text-white">
      {name}
    </button>
  );
}

export default VideoFilterButtons;
