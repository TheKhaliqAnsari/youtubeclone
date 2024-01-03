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
      <div>
        {buttonData.map((name, idx) => (
          <VideoFilterButtons name={name} key={idx} />
        ))}
      </div>
      <VideoCardsHolder />
    </div>
  );
}

export default VideosContainer;
