import React from "react";
import image from "../../assets/images/Mask Group.png";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ id, name, foodImage, price }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="search__card--container"
        onClick={() => navigate(`/detail-page/${id}`)}
      >
        <img
          src={foodImage ? `http://localhost:5000${foodImage}` : image}
          className="search__card--image"
        />

        <div className="search__card--content">
          <p className="search__card--title">{name ? name : "Veggie tomato"}</p>

          <p className="search__card--price">
            {price ? `Rs. ${price}` : "Rs. ---"}
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
