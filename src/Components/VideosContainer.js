import React from "react";
import VideoFilterButtons from "./VideoFilterButtons";
import VideoCardsHolder from "./VideoCardsHolder";

function VideosContainer() {
  const buttonData = [
    "All",
    "Live",
    "Programming",
    "Gaming",
    "News",
    "Hacking",
    "Doraemon",
    "Linux",
  ];
  return (
    <div className="flex flex-col w-[100%] items-center">
      <div className="flex overflow-x-scroll w-[100%] justify-center">
        {buttonData.map((name, idx) => (
          <VideoFilterButtons name={name} key={idx} />
        ))}
      </div>
      <div className="flex justify-center">
        <VideoCardsHolder />
      </div>
    </div>
  );
}

export default VideosContainer;
