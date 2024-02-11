import React, { useEffect, useState } from "react";
import { youtubeVideoApi } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { AddvideoCard } from "./VideoCard";

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
      <AddvideoCard ininin={videos[0]} />
      {videos.map((video, i) => (
        <Link key={i} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
// {
//   suggestion[1]?.map((s) => <li> {s}</li>) || [];
// }
