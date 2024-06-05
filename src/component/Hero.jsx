import React from "react";
import BaseButton from "./base/BaseButton";
import Phone from "../assets/images/phones.png";

const Hero = () => {
  return (
    <>
      <div className="hero-main main-container">
        <div className="hero-text">
          <h2 className="h2">Food App</h2>

          <h1 className="h1 font-poppins">
            Why stay hungry when <br /> you can order from Bella Onojie
          </h1>

          <h2 className="h2">Download the bella onoje's food app now on</h2>

          <div className="btn-center">
            <BaseButton />

            <BaseButton
              buttonText={"App Store"}
              variant={"btn-secondary-orange"}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="hero-body">
          <img src={Phone} alt="Phone Images" className="hero-image" />
        </div>

        <div className="hero-border" />
      </div>
    </>
  );
};

export default Hero;
