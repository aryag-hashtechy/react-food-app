import React, { useState } from "react";
import image from "../../assets/icons/back-icon.svg";
import image1 from "../../assets/images/Food.png";
import BaseButton from "../../component/base/BaseButton";
import image2 from "../../assets/images/veg.png";
import image3 from "../../assets/images/heart.png";
import { Rating } from "react-simple-star-rating";

const DetailPage = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <>
      <section className="mobile__container">
        <div>
          <img src={image} alt="back-icon" className="detail__back-icon" />
        </div>
        <div className="detail__main">
          <img
            src={image1}
            alt="banner-image"
            className="detail__banner-image"
          />
        </div>
        <div>
          <img src={image2} alt="veg-icon" className="detail__veg-icon" />
          <div className="detail__title">
            <p className="detail__title-content">Veggie tomato mix</p>
            <img src={image3} className="detail__heart" />
          </div>
          <p className="detail__price">Rs. 550</p>
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            /* Available Props */
          />

          <p className="detail__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            voluptatem numquam iste debitis provident magnam repellat, ipsa
            vitae excepturi, culpa commodi.
          </p>
        </div>

        <div>
          <BaseButton buttonText={"Add to cart"} variant={"btn detail__btn"} />
        </div>
      </section>
    </>
  );
};

export default DetailPage;
