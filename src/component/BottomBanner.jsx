import React from "react";

import BaseButton from "./base/BaseButton";

const BottomBanner = () => {
  return (
    <>
      <div className="banner-main">
        <div className="banner-text">
          <h1 className="h1">Download the app now.</h1>
          <h3 className="h3 font-mont tracking-[0.2px]">
            Available on your favourite store. Start your premium experience now
          </h3>

          <div className="banner-btn-window">
            <BaseButton
              buttonText={"Playstore"}
              variant={"btn-primary-square"}
            />
            <BaseButton
              buttonText={"App Store"}
              variant={"btn-secondary-square"}
            />
          </div>
          <div className="banner-btn-mobile">
            <BaseButton buttonText={"Buy now"} variant={"btn-primary-square"} />
            <BaseButton
              buttonText={"Try for free"}
              variant={"btn-secondary-square"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBanner;
