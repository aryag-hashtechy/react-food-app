import React from "react";
import image from "../../assets/images/Home.svg";
import image1 from "../../assets/images/heart.svg";
import image2 from "../../assets/images/user.svg";
import image3 from "../../assets/images/ic_sharp-history.svg";

const Footer = () => {
  return (
    <>
      <div className="footer__mobile">
        <img src={image} className="footer__home " />
        <img src={image1} className="footer__heart" />
        <img src={image2} className="footer__user" />
        <img src={image3} className="footer__history" />
      </div>
    </>
  );
};

export default Footer;
