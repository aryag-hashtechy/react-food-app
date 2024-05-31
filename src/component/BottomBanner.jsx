import React from "react";
import image from "../assets/images/Rectangle 47.png";
import BaseButton from "./base/BaseButton";

const BottomBanner = () => {
  return (
    <>
      <div className="banner-main">
        <img src={image} />
        <div className="banner-text">
          <h1 className="h1">Download the app now.</h1>
          <h3 className="h3 font-mont tracking-[0.2px]">
            Available on your favourite store. Start your premium experience now
          </h3>
          <div className="banner-btn">
            <BaseButton
              buttonText={"Playstore"}
              variant={"btn-primary-square"}
            />
            <BaseButton
              buttonText={"App Store"}
              variant={"btn-secondary-square"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBanner;
