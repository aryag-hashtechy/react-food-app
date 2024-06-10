import React from "react";
import Swiper from "swiper";
import image from "../../assets/images/Mask Group.png";

const Card = () => {
  return (
    <>
      <div>
        <img src={image} className="card-image" />

        <div className="main-card">
          <p className=" card-title">
            Veggie <br />
            tomato mix
          </p>
          <p className="card-price">Rs.1,900</p>
        </div>
      </div>
    </>
  );
};

export default Card;
