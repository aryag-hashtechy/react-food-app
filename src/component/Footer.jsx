import React from "react";
import logo from "../assets/icons/logo.svg";
import image1 from "../assets/images/ant-design_twitter-outlined.svg";
import image2 from "../assets/images/facebook.svg";
import image3 from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <img src={logo} alt="logo" className="footer-image" />
        <div className="flex items-center gap-8">
          <img src={image1} alt="img" className="twiter-icon" />
          <img src={image2} alt="img" className="facebook-icon" />
          <img src={image3} alt="img" className="instagram-icon" />
        </div>
        <p>Copywrite 2020 Bella Onojie.com</p>
      </div>
    </>
  );
};

export default Footer;
