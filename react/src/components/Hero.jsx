import React from "react";
import hero_img from "../assets/hero2.png";

const Hero = () => {
  return (
    <div>
      <div>
        <div>
          <h1>
            Find your Dream Home <br /> with Ease
          </h1>
          <img src={hero_img} alt="Home of your dream" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
