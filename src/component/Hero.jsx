import React from "react";
import image from "../assets/images/Rectangle 48.png";
import BaseButton from "./base/BaseButton";

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <img src={image} />

        <div className="hero-text">
          <h2 className="h2">Food App</h2>
          <h1 className="h1 font-poppins">
            Why stay hungry when you can order form Bella Onojie
          </h1>
          <h3 className="h3">Download the bella onoje's food app now on</h3>
          <div className="hero-button">
            <BaseButton />

            <BaseButton buttonText={"App Store"} variant={"btn-secondary"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
