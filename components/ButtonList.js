import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const lists = [
    "all",
    "gaming",
    "songs",
    "live",
    "sports",
    "quran",
    "news",
    "cooking",
    "cooking",
  ];

  return (
    <div className="flex">
      {lists.map((list, i) => (
        <Button key={i} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
