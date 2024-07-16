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
  handleSubmit,
}) => {
  const [quantity, setQuantity] = useState(no_of_items);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    handleSubmit(quantity + 1, id);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handleSubmit(quantity - 1, id);
    }
  };

  return (
    <div className="item-card__card-main">
      <img
        src={`http://localhost:5000${image}`}
        alt={name}
        className="item-card__card-image"
      />
      <div className="item-card__card-details">
        <div className="item-card__card-price">
          <h2 className="item-card__card-name">{name}</h2>
          <p>{price}</p>

          <p className="item-card__card-price"></p>
        </div>
        <div className="item-card__cross">
          <TiDeleteOutline onClick={() => handleDelete(foodId, id)} />
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
