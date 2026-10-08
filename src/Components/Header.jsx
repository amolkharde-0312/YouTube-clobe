import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { toggleMenu } from "../Utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";
import { cacheResults } from "../Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  console.log("Search Cache:", searchCache);
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      // Cache check
      if (searchCache[searchQuery]) {
        console.log("CACHE HIT");
        setSuggestions(searchCache[searchQuery]);
      } else {
        console.log("API CALL");
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSuggestions(json[1]);

    // Save in Redux Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="sticky top-0 z-50 bg-white grid grid-flow-col p-3 px-5 shadow-md items-center">
      {/* Left */}
      <div className="flex col-span-1 items-center gap-4">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer"
          src="https://classictravelling.com/wp-content/uploads/2019/05/Hamburger_icon.svg-850x850.png"
          alt="hamburger"
        />

        <a href="/">
          <img
            className="h-6 w-32 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
          />
        </a>
      </div>

      {/* Search */}
      <div className="flex w-[600px]">
        <div className="relative flex-1">
          <input
            className="w-full border border-gray-400 p-2 rounded-l-full outline-none focus:border-blue-600"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
          />

          {showSuggestion && suggestions.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg z-50">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="p-2 hover:bg-gray-100 flex items-center gap-3 cursor-pointer"
                  >
                    <IoSearchOutline className="text-lg text-gray-700" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button className="border border-gray-300 px-5 rounded-r-full bg-gray-100 hover:bg-gray-200">
          <MdSearch className="text-2xl" />
        </button>
      </div>

      {/* Profile */}
      <div className="flex justify-center">
        <img
          className="h-9 w-9 rounded-full cursor-pointer object-cover hover:opacity-90"
          src="https://i.pravatar.cc/150"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
