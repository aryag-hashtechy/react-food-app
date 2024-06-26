import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const QuantityCounter = ({ image, name, mrp, id, handleDelete }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-card__card-main">
      <img src={image} alt={name} className="item-card__card-image" />
      <div className="item-card__card-details">
        <div className="item-card__card-price">
          <h2 className="item-card__card-name">{name}</h2>
          <p className="item-card__card-price">${mrp.toFixed(2)}</p>
        </div>
        <div className="item-card__cross">
          <TiDeleteOutline onClick={() => handleDelete(id)} />
        </div>
        <div className="item-card__quantity-container">
          <button
            onClick={decreaseQuantity}
            className="item-card__quantity-btn"
          >
            -
          </button>
          <span className="item-card__quantity">{quantity}</span>
          <button
            onClick={increaseQuantity}
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
