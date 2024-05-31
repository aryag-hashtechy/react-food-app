import React from "react";
import image from "../assets/images/Bella Olonje logo 111 1.svg";
import image1 from "../assets/images/ant-design_twitter-outlined.svg";
import image2 from "../assets/images/facebook.svg";
import image3 from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <img src={image} className="footer-image" />
        <div className="flex items-center gap-8">
          <img src={image1} className="twiter-icon" />
          <img src={image2} className="facebook-icon" />
          <img src={image3} className="instagram-icon" />
        </div>
        <p>Copywrite 2020 Bella Onojie.com</p>
      </div>
    </>
  );
};

export default Footer;
