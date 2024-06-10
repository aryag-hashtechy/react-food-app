import React from "react";
import image from "../../assets/images/Vector.svg";
import image1 from "../../assets/images/shopping-cart.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="main-header">
          <img
            src={image}
            className="header-image"
            onClick={() => {
              navigate("/my-profile");
            }}
          />

          <img src={image1} className="header-image1" />
        </div>
      </section>
    </>
  );
};

export default Header;
