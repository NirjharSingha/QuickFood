"use client";

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FavIcon from "@/public/favicon.ico";

const Searchbar = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <div className="flex items-center ml-10 navbar-start">
      {/* {showResult && selectedItem.flag === "user" && (
        <SearchResult
          selectedItem={selectedItem}
          setShowResult={setShowResult}
        />
      )} */}
      <Image src={FavIcon} alt="logo" width={30} className="mr-2" />
      <div className="flex w-full">
        <div className="h-1.8rem w-16 bg-white border-2 border-solid border-gray-500 flex justify-center items-center mt-0.5rem rounded-l-full border-r-0 max-w-14">
          <IoSearchOutline className="text-gray-500 text-1.1rem" />
        </div>
        <input
          type="text"
          className="bg-white mt-0.5rem w-80 h-1.8rem border-2 border-solid border-gray-500 rounded-r-full pl-2 border-l-0 focus:border-gray-500 focus:outline-none max-w-48"
          placeholder="Search in chat"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>

      {/* {windowWidth <= 500 && (
        <SearchIcon
          style={{ color: "#4d4f52", cursor: "pointer" }}
          onClick={() => {
            setShowList(true);
          }}
        />
      )} */}
      {/* {showSearchList && (
        <div className="searchList absolute top-16 left-4 w-64 h-2/5 bg-gray-300 rounded-lg border-2 border-gray-500 shadow-md overflow-x-hidden overflow-y-auto z-50">
          {windowWidth <= 500 && (
            <div className="flex items-center mt-2">
              <FaArrowLeft
                className="searchListIcon text-gray-500 cursor-pointer ml-2"
                onClick={() => {
                  setShowList(false);
                  setInputValue("");
                  setFilteredData([]);
                }}
              />
              <input
                type="text"
                className="border-none rounded-full px-7 h-6 searchListInput"
                placeholder="Search here"
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>
          )}
          {filteredData.map((searchItem) => (
            <div
              key={searchItem._id}
              onClick={() => handleSearchClick(searchItem)}
            >
              <ItemCard
                key={searchItem._id}
                containerClass="searchLine"
                imgClass="optionListImg"
                nameClass="optionListName"
                shouldDisplayImg={!(searchItem.pic === "")}
                imgSrc={searchItem.pic}
                icon={
                  searchItem.flag === "user"
                    ? "/profilePicIcon.svg"
                    : "/group.png"
                }
                name={searchItem.name}
              />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Searchbar;
