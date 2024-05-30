import react from "react";
import logo from "../../assets/images/Bella Olonje logo 111 1.svg";

const Header = () => {
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
      </header>
    </>
  );
};

export default Header;
