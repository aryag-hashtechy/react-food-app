import React from "react";
import image from "../../assets/images/Home.svg";
import image1 from "../../assets/images/heart.svg";
import image2 from "../../assets/images/user.svg";
import image3 from "../../assets/images/ic_sharp-history.svg";

const Footer = () => {
  return (
    <>
      <div className="Mobile-footer">
        <img src={image} className="footer-home " />

        <img src={image1} className="footer-image1" />

        <img src={image2} className="footer-image2" />

        <img src={image3} className="footer-image3" />
      </div>
    </>
  );
};

export default Footer;
