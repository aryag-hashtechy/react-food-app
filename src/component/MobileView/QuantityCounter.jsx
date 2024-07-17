import React, { useEffect, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import axiosProvider from "../../common/axiosProvider";
import apiPath from "../../apiPath";
import { useNavigate } from "react-router-dom";

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
    <img src={foodImage ? `http://localhost:5000${foodImage}` : img} alt={"img"} className="item-card__card-image" />
    
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
          <span className="item-card__quantity">{quantity}</span>
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
