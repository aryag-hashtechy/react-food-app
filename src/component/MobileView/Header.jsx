import React from "react";
import image from "../../assets/images/Vector.svg";
import image1 from "../../assets/images/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mobile__header__main">
        <img
          src={image}
          className="mobile__header__hamburger"
          onClick={() => {
            navigate("/my-profile");
          }}
        />

        <img
          src={logo}
          alt="logo"
          className="mobile__header__logo"
        />

        <img
          src={image1}
          className="mobile__header__cart"
          onClick={() => {
            navigate("/cart");
          }}
        />
      </div>
    </>
  );
};

export default Header;
