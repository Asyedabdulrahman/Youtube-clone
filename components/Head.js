import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1  ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 m-1 cursor-pointer"
          alt="hamburger-img"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png"
        />
        <a href="/">
          <img
            className="h-12 m"
            alt="youtube-img"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </a>
      </div>
      <div className=" col-span-10 px-10 p-1">
        <input
          className="w-1/2 border border-gray-400 p-1 rounded-l-3xl bg-gray-200 
          "
          type="text"
        />
        <button className="border border-gray-400 p-1 rounded-r-lg bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
