import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header-main">
        <img src={logo} alt="logo" className="image-header" />

        <ul className="header-list">
          <li className="active">Home</li>
          <li>Product</li>
          <li>Faq</li>
          <li>Contact</li>
        </ul>

        <FiMenu className="header-icon" onClick={toggleMenu} />
      </header>
      {isOpen && (
        <div>
          <ul className="hamburger-menu">
            <li>Home</li>
            <li>Product</li>
            <li>Faq</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
