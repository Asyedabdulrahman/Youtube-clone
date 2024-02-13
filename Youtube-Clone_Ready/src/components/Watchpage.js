import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import YouTubeComments from "./youtubeComments";
import { GOOGLE_API_KEY } from "../utils/constants";
import LiveChat from "./LiveChat";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  const dispatch = useDispatch();

  const searchparamsGetV = searchparams.get("v");

  useEffect(() => {
    dispatch(closemenu());
  }, []);

  return (
    <div className="flex flex-col  ">
      <div className="px-5 flex w-full">
        <div> 
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchparamsGetV}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ></iframe>
        </div>
        <div >
          <LiveChat />
        </div>
        </div>
      <YouTubeComments  videoId={searchparamsGetV} apiKey={GOOGLE_API_KEY} />
    </div>
  );
};

export default Watchpage;
