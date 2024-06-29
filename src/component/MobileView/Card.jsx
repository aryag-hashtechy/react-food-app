import React from "react";
import image from "../../assets/images/Mask Group.png";

const Card = ({ name, foodImage, price }) => {
  return (
    <>
      <div className="card__main">
        <img
          src={foodImage ? `http://localhost:5000${foodImage}` : image}
          className="card__image"
        />

        <div className="card__content">
          <p className=" card__title">{name ? name : "Veggie tomato mix"}</p>

          <p className="card__price">{price ? `Rs. ${price}` : "Rs. ---"}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
