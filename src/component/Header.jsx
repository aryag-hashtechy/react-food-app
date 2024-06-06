import react, { useState } from "react";
import logo from "../assets/images/Bella Olonje logo 111 1.svg";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="header-main">
        <img src={logo} className="header-image" />

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
