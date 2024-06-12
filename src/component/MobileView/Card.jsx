import React from "react";
import image from "../../assets/images/Mask Group.png";

const Card = () => {
  return (
    <>
      <div className="card__main">
        <img src={image} className="card__image" />

        <div className="card__content">
          <p className=" card__title">
            Veggie <br />
            tomato mix
          </p>

          <p className="card__price">Rs.1,900</p>
        </div>
      </div>
    </>
  );
};

export default Card;
