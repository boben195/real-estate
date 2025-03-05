import React from "react";
import { FaDollarSign, FaMapMarkerAlt, FaSearch, FaHome } from "react-icons/fa";

const Search = () => {
  return (
    <div className="absolute flex items-center gap-4 flex-1 w-[80%] bg-white p-4 rounded-lg -mt-8 ml-28">
      <div className="flex items-center gap-4 p-2 flex-1 border border-gra-300 rounded-lg">
        <FaMapMarkerAlt className="text-cyan-500 text-2xl" />
        <div>
          <p className="text-gray-800 font-semibold">Location (any)</p>
          <select className="border-none outline-none bg-transperent text-gray-700 w-full mt-1">
            <option value="default">Select your place</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-4 p-2 flex-1 border border-gra-300 rounded-lg">
        <FaHome className="text-cyan-500 text-2xl" />
        <div>
          <p className="text-gray-800 font-semibold">Property type (any)</p>
          <select className="border-none outline-none bg-transperent text-gray-700 w-full mt-1">
            <option value="default">Select your place</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-4 p-2 flex-1 border border-gra-300 rounded-lg">
        <FaDollarSign className="text-cyan-500 text-2xl" />
        <div>
          <p className="text-gray-800 font-semibold">Price range (any)</p>
          <select className="border-none outline-none bg-transperent text-gray-700 w-full mt-1">
            <option value="default">Select price range</option>
            <option value="0-200000">0-200000</option>
            <option value="200001-300000">200001-300000</option>
            <option value="300001-400000">300001-400000</option>
          </select>
        </div>
      </div>
      <button className="bg-cyan-500 text-white px-6 py-3 rounded-lg cursor-pointer text-xl flex item-center justify-center hover:bg-cyan-700 transition">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
