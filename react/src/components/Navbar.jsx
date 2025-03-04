import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-24 py-3 bg-cyan-300">
      <Link to="/">
        <div className="text-2xl font-bold">
          <h2>HPG PROPERTIES</h2>
        </div>
      </Link>
      <div>
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:text-cyan-500 cursor-pointer">Home</li>
          <li className="hover:text-cyan-500 cursor-pointer">About</li>
          <li className="hover:text-cyan-500 cursor-pointer">Properties</li>
          <li className="hover:text-cyan-500 cursor-pointer">Goal</li>
        </ul>
      </div>
      <div>
        <button className="border border-cyan-400 px-10 font-semibold rounded-full hover:bg-sky-400">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
