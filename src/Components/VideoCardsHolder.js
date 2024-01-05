import React, { useState, useEffect } from "react";
import { YOUTUBE_API_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoCardsHolder() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosData();
  }, []);

  const getVideosData = async () => {
    try {
      const response = await fetch(YOUTUBE_API_URL);
      const data = await response.json();
      // console.log(data?.items);
      setVideos(data?.items);
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  if (!videos.length) return;
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((data) => (
        <Link to={"/watch?v=" + data.id} key={data.id}>
          {" "}
          <VideoCard data={data} />
        </Link>
      ))}
    </div>
  );
}

export default VideoCardsHolder;
