import React from "react";
import Logo from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <header className="headMain">
      <img className="headImg" src={Logo} alt="Logo" />

      <ul className="headItems">
        <li className="active">Home</li>
        <li>Product</li>
        <li>Faq</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
