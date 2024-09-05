import React from "react";
import BaseButton from "./base/BaseButton";
import Phone from "../assets/images/phones.png";

const Hero = () => {
  return (
    <>
      <div className="hero-main main-container">
        <div className="hero-text">
          <h3 className="h3">Food App</h3>

          <h1 className="h1 font-poppins">
            Why stay hungry when you can order from Bella Onojie
          </h1>

          <h3 className="h3">Download the bella onoje's food app now on</h3>

          <div className="btn--container">
            <BaseButton buttonText={"Play Store"} variant={"btn btn--primary"}/>

            <BaseButton
              buttonText={"App Store"}
              variant={"btn btn--outline"}
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
