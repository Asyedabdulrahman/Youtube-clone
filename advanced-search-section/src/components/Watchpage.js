import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closemenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import YouTubeComments from "./youtubeComments";
import { GOOGLE_API_KEY } from "../utils/constants";
import CommentContainer from "./CommentContainer";

const Watchpage = () => {
  const [searchparams] = useSearchParams();
  const dispatch = useDispatch();

  const searchparamsGetV = searchparams.get("v");

  useEffect(() => {
    dispatch(closemenu());
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchparamsGetV}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <YouTubeComments videoId={searchparamsGetV} apiKey={GOOGLE_API_KEY} />
    </div>
  );
};

export default Watchpage;
