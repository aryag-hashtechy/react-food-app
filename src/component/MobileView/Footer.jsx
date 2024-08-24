import React from "react";
import image from "../../assets/images/Home.svg";
import image1 from "../../assets/images/heart2.svg";
import image2 from "../../assets/images/user.svg";
import image3 from "../../assets/images/ic_sharp-history.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer__mobile">
        <img src={image} className="footer__home " />
        <img src={image1} className="footer__heart" onClick={() => navigate('/wishlist')}/>
        <img src={image2} className="footer__user" onClick={()=> navigate("/my-profile")}/>
        <img src={image3} className="footer__history" />
      </div>
    </>
  );
};

export default Footer;
