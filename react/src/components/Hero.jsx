import React from "react";
import hero_img from "../assets/hero2.png";

const Hero = () => {
  return (
    <div>
      <div className="grid h-screen w-full place-items-center bg-cyan-300 rounded-br-[30%] rounded-bl-[30%]">
        <div className="text-center">
          <h1 className="text-6xl font-semibold mt-3">
            Find your Dream Home <br /> with Ease
          </h1>
          <img
            src={hero_img}
            alt="Home of your dream"
            className="w-[1400px] h-[750px] object-contain -mt-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
