import React, { useState } from "react";
import ReactPlayer from "react-player";

function VideoCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);
  const { snippet, statistics, id } = data;
  //   console.log(data);
  const { thumbnails, channelTitle, localized } = snippet;
  const videoUrl = "https://www.youtube.com/watch?v=" + id;
  let title = localized.title.split(" ").slice(0, 4).join(" ");
  return (
    <div
      className="flex flex-col p-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <>
          {" "}
          <ReactPlayer
            url={videoUrl}
            playing={true}
            loop={true}
            muted={true}
            width="300px"
            height="200px"
          />
          <div className="font-bold max-w-[250px] flex justify-start">
            {title}
          </div>
          <div className="text-l font-bold">{channelTitle}</div>
          <div>{Math.floor(statistics.viewCount / 1000) + " H Views"}</div>
        </>
      ) : (
        <div>
          <img
            src={thumbnails.medium.url}
            alt="Video thumbnail"
            className="rounded-lg"
          />
          <div className="font-bold max-w-[250px] flex justify-start">
            {title}
          </div>
          <div className="text-l font-bold">{channelTitle}</div>
          <div>{Math.floor(statistics.viewCount / 1000) + "K Views"}</div>
        </div>
      )}
    </div>
  );
}

export default VideoCard;
