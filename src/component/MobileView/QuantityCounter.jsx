import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const QuantityCounter = ({
  image,
  name,
  price,
  id,
  handleDelete,
  foodId,
  no_of_items,
  increaseQuantity,
  decreaseQuantity,
}) => {

  return (
    <div className="item-card__card-main">
    <img src={`http://localhost:5000${image}`} alt={"img"} className="item-card__card-image" />
    
      <div className="item-card__card-details">
        <div className="item-card__card-price">
          <h2 className="item-card__card-name">{name}</h2>
          <p className="item-card__card-price">{`Rs. ${price}`}</p>
        </div>
        <div className="item-card__cross">
          <TiDeleteOutline onClick={() => handleDelete(foodId, id)} />
        </div>
        <div className="item-card__quantity-container">
          <button
            onClick={() => decreaseQuantity(id)}
            className="item-card__quantity-btn"
          >
            -
          </button>
          <span className="item-card__quantity">{no_of_items}</span>
          <button
            onClick={() => increaseQuantity(id)}
            className="item-card__quantity-btn"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
