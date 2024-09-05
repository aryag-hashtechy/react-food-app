import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";
import vector from "../assets/icons/header-vector.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header__main">
        <img src={logo} alt="logo" className="header__image" />

        <ul className="header__list">
          <li className="header--active">Home</li>
          <li onClick={()=> navigate('/dashboard')}>Dashboard</li>
          <li className="header__btn" onClick={()=>navigate('/auth/login')}>Login/Signup</li>
        </ul>

        <img src={vector} className="header__icon" onClick={toggleMenu} />
      </header>
      {isOpen && (
        <div>
          <ul className="hamburger__menu">
            <li onClick={() =>navigate('/auth/login')}>Login</li>
            <li onClick={()=>navigate("/dashboard")}>dashboard</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
