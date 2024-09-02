import React from "react";
import image from "../../assets/images/Mask Group.png";
import { useNavigate } from "react-router-dom";
import image2 from "../../assets/images/heart2.svg";
import image3 from "../../assets/icons/heart-icon.svg";

const Card = ({
  name,
  foodImage,
  price,
  id,
  is_in_wishlist,
  createCart,
  is_in_cart,
  handleDeleteWishlist,
  handleCreateWishlist,
}) => {
  const navigate = useNavigate();

  return (
    <div className="card__main">
      <div
        className="card__body"
        onClick={() => navigate(`/detail-page/${id}`)}
      >
        <img
          src={foodImage ? `http://localhost:5000${foodImage}` : image}
          className="card__image"
        />

        <p className="card__title">{name ? name : "Veggie tomato mix"}</p>

        <p className="card__price">{price ? `Rs. ${price}` : "Rs. ---"}</p>
      </div>

      <div className="card__footer">
        <button
          className={"card__btn-primary"}
          onClick={() => {
            is_in_cart ? navigate("/cart") : createCart(id);
          }}
        >
          {is_in_cart ? "Go to Cart" : "Add to Cart"}
        </button>

        <img
          src={is_in_wishlist ? image3 : image2}
          alt="fav"
          className="card__wishlist"
          onClick={() => {
            is_in_wishlist
              ? handleDeleteWishlist.mutate(id)
              : handleCreateWishlist.mutate(id);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
