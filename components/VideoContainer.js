import React, { useEffect, useState } from "react";
import { youtubeVideoApi } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(youtubeVideoApi);
    const Jsondata = await data.json();
    console.log(Jsondata.items);
    setVideos(Jsondata.items);
  };

  return (
    <div className="flex flex-wrap ">
      {videos.map((video, i) => (
        <VideoCard key={i} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
