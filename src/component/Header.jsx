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
          <li>Home</li>
          <li>Product</li>
          <li>Faq</li>
          <li>Contact</li>
        </ul>

        <FiMenu className="header-icon" onClick={toggleMenu} />
      </header>
      {isOpen && (
        <div>
          <ul className="bg-white w-full pl-4 pr-2 md:hidden  pr-16 pb-4">
            <li className="border-b-2 border-black">Home</li>
            <li className="border-b-2 border-black ">Product</li>
            <li className="border-b-2 border-black">Faq</li>
            <li className="border-b-2 border-black">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
