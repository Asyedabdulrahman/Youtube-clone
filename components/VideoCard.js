import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  if (!info || !info.snippet) {
    return null;
  }
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  if (!channelTitle || !title || !thumbnails || !thumbnails.medium) {
    return null;
  }

  return (
    <div className="p-2 m-2 w-[325px] shadow-md">
      <img alt={title} src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold ">{title}</li>
        <li>{channelTitle} </li>
      </ul>
    </div>
  );
};

export default VideoCard;
