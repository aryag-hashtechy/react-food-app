import React from "react";
import image from "../../assets/icons/back-icon.svg";
import { useNavigate } from "react-router-dom";

const DeliveryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mobile__container">
      <div className="delivery__main">
        <div className="delivery__back-icon">
          <img src={image} alt="back-icon" onClick={() => navigate("/Cart")} />
        </div>
        <div className="delivery__title">
          <p>Checkout</p>
        </div>
      </div>
      <div className="delivery__text">
        <p>Delivery</p>
        <div className="delivery__address">
          <p>Address details</p>
          <p className="delivery__text-change">change</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
