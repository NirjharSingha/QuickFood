"use client";

import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FavIcon from "@/public/favicon.ico";

const Searchbar = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ]);
  const [showSearchList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleInputChange = async (value) => {
    setInputValue(value);
    if (value.length > 0) {
      setShowList(true);
    } else {
      setShowList(false);
    }
  };

  return (
    <div className="flex items-center ml-10 navbar-start">
      <Image src={FavIcon} alt="logo" width={30} className="mr-2" />
      <div className="flex w-full">
        <div className="h-[1.8rem] w-16 bg-white border-2 border-solid border-gray-500 flex justify-center items-center mt-0.5rem rounded-l-full border-r-0 max-w-14">
          <IoSearchOutline className="text-gray-500 text-[1.1rem]" />
        </div>
        <input
          type="text"
          className="bg-white w-80 h-[1.8rem] border-2 border-solid border-gray-500 rounded-r-full pl-2 border-l-0 focus:border-gray-500 focus:outline-none max-w-48"
          placeholder="Search in chat"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
      {showSearchList && (
        <div className="absolute top-16 left-14 w-[17.3rem] h-2/5 bg-gray-200 rounded-lg rounded-t-none border-0 border-gray-500 shadow-md overflow-x-hidden overflow-y-auto z-50">
          {filteredData.map((searchItem) => (
            <div className="w-[100%] h-[42px] p-[5px] pb-[2.5px] pt-[2.5px] mb-1 ml-1 flex items-center rounded hover:cursor-pointer hover:bg-gray-400">
              <img
                src={"/favicon.ico"}
                alt=""
                className="w-[2rem] h-[2rem] rounded-[50%] bg-blue-400 border-2 border-solid border-white"
              />
              <p className="ml-[8px] truncate">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
