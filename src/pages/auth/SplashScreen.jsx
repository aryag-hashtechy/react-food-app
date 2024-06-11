import React from "react";
import logo from "../../assets/icons/logo.svg";

const SplashScreen = () => {
  return (
    <div className="splash__layout">
      <div className="splash__body">
        <img src={logo} alt="logo" className="icon" />

        <div className="text">Food for Everyone</div>

        <div className="loader"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
