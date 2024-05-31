import React from "react";
import Header from "./Header";
import HeroImg from "../assets/images/Hero.png";
import BaseButton from "./base/BaseButton";

const Hero = () => {
  return (
    <>
      <Header />

      <div className="heroMain">
        <img src={HeroImg} alt="Hero Section Image" />

        <div className="heroText">
          <h2 className="h2">Food App</h2>
          <h1 className="h1 font-poppins">
            Why stay hungry when you can order from Bella Onojie
          </h1>
          <h3 className="h3">Download the bella onoje's food app now on</h3>
          <div className="btnCenter">
            <BaseButton />

            <BaseButton buttonText={"App Store"} variant={"btnSecondary"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
