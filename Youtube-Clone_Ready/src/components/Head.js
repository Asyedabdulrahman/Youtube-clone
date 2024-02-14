import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { json } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [showSuggestion, setshowsuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const fetchapi = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const apijson = await fetchapi.json();
    setsuggestion(apijson[1]);
    console.log(apijson[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-md">
      <div className="flex col-span-1 ">
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
        <div>
          <input
            className="w-1/2 border border-gray-100 p-1 px-3 rounded-l-3xl bg-gray-200
          "
            placeholder="Search"
            type="text "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowsuggestion(true)}
            onBlur={() => setshowsuggestion(false)}
          />
          <button className="border  bg-gray-200 p-1 rounded-r-lg ">
            🔍
          </button>
        </div>

        {showSuggestion && suggestion.length > 0 && (
          <div className="fixed bg-white py-1 px-2 w-[32rem] shadow-lg rounded-md ">
            <ul>
              {Array.isArray(suggestion) &&
                suggestion.map((S, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray-300 rounded-md px-2 cursor-default "
                  >
                    {S}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
        <div className="col-span-1  ">
        <img
          className="h-11  "
          alt="noti-icon"
          src="https://static.thenounproject.com/png/3282528-200.png"
        />
      </div>

      <div className="col-span-1  ">
        <img
          className="h-11  "
          alt="noti-icon"
          src="https://t4.ftcdn.net/jpg/01/98/33/63/360_F_198336329_D3JsfuSGm5UBTXR9fwcr2WhKNebr7SiB.jpg"
        />
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
