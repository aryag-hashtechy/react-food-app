import React from "react";
import logo from "../assets/icons/logo.svg";
import image1 from "../assets/images/twitter.svg";
import image2 from "../assets/images/facebook.svg";
import image3 from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="footer__main">
        <img src={logo} alt="logo" className="footer__image" />

        <div className="footer__socialmedia">
          <img src={image1} alt="img" className="footer__twitter" />
          <img src={image2} alt="img" className="footer__facebook" />
          <img src={image3} alt="img" className="footer__instagram" />
        </div>

        <p>Copywrite 2020 Bella Onojie.com</p>
      </div>
    </>
  );
};

export default Footer;
