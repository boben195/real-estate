import React from "react";
import { FaDollarSign, FaMapMArkerAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Search = () => {
  return (
    <div>
      <div>
        <FaMapMArkerAlt />
        <div>
          <p>Location (any)</p>
          <select>
            <option value="default">Select your place</option>
            <option value="USA">USA</option>
            <option value="CANADA">CANADA</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </div>
      <div>
        <FaHome />
        <div>
          <p>Property type (any)</p>
          <select>
            <option value="default">Select your place</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
          </select>
        </div>
      </div>
      <div>
        <FaDollarSign />
        <div>
          <p>Price range (any)</p>
          <select>
            <option value="default">Select price range</option>
            <option value="0-200000">0-200000</option>
            <option value="200001-300000">200001-300000</option>
            <option value="300001-400000">300001-400000</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
