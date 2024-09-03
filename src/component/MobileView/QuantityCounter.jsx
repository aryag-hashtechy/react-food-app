import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const QuantityCounter = ({
  image,
  name,
  price,
  id,
  handleDelete,
  foodId,
  no_of_item,
  increaseQuantity,
  decreaseQuantity,
  handleWishlist,
}) => {
  return (
    <div className="item-card__card-main">
      <img
        src={`http://localhost:5000${image}`}
        alt={"img"}
        className="item-card__card-image"
      />

      <div className="item-card__details">
        <div className="item-card__details-container">
          <p className="item-card__card-name">{name}</p>

          <TiDeleteOutline
            className="item-card__cross"
            onClick={() => handleDelete(id, foodId)}
          />
        </div>

        <p className="item-card__card-price">{`Rs. ${price}`}</p>

        <div className="item-card__btn-container">
          {!handleWishlist && (
            <div className="item-card__quantity-container">
              <button
                onClick={() => decreaseQuantity(id)}
                className="item-card__quantity-btn"
              >
                -
              </button>
              <span className="item-card__quantity">{no_of_item}</span>
              <button
                onClick={() => increaseQuantity(id)}
                className="item-card__quantity-btn"
              >
                +
              </button>
            </div>
          )}

          {handleWishlist && (
            <button
              className="item-card__btn-cart"
              onClick={() => handleWishlist(id)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;
