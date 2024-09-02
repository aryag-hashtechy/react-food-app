import React from "react";
import image from "../../assets/images/Vector.svg";
import image1 from "../../assets/images/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Counter from "./Counter";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartCounter = useSelector((state) => state.cart.cartCount);

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

        <img src={logo} alt="logo" className="mobile__header__logo" />

        <div
          className="mobile__header__container"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <img src={image1} className="mobile__header__cart" />

          {cartCounter > 0 && <Counter cartCounter={cartCounter} />}
        </div>
      </div>
    </>
  );
};

export default Header;
