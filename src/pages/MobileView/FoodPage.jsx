import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import bannerImage from "../../assets/images/Mask Group.png";
import BaseButton from "../../component/base/BaseButton";
import heartIcon from "../../assets/icons/heartIcon.svg";
import vegIcon from "../../assets/icons/veg-icon.svg";
import { Rating } from "react-simple-star-rating";

const FoodPage = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="food">
      <div className="food__container">
        <img src={backIcon} alt="back-icon" className="food__back-icon" />

        <div className="food__body">
          <div className="food__banner-container">
            <img src={bannerImage} alt="" className="food__banner-img" />
          </div>

          <img src={vegIcon} alt="veg-con" className="food__veg-icon" />

          <div className="food__header-container">
            <p className="food__header">Veggie tomato mix</p>

            <img
              src={heartIcon}
              alt="heart-icon"
              className="food__heart-icon"
            />
          </div>

          <Rating
              onClick={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              onPointerMove={onPointerMove}
              ClassName="food__ratings"
            />

          <p className="food__price">
            <span className="food__price-heading">Price: </span>Rs. 500
          </p>
          <p className="food__description-header">Description:</p>

          <p className="food__description-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum
            architecto debitis fugiat adipisci labore blanditiis suscipit alias,
            modi deserunt, optio assumenda ipsam delectus quibusdam mollitia ab
            sapiente animi? Facilis neque illum, culpa cupiditate inventore
            nulla unde illo officiis amet.
          </p>
        </div>

        <BaseButton
          buttonText={"Add to Cart"}
          variant="food__btn btn--primary-large"
        />
      </div>
    </div>
  );
};

export default FoodPage;
