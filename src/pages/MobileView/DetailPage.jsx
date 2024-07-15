import React, { useState } from "react";
import image from "../../assets/icons/back-icon.svg";
import image1 from "../../assets/images/Food.png";
import BaseButton from "../../component/base/BaseButton";
import veg from "../../assets/images/veg.png";
import nonveg from "../../assets/images/non-veg-icon.png";
import image3 from "../../assets/images/heart.png";
import { Rating } from "react-simple-star-rating";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import apiPath from "../../apiPath";

const DetailPage = () => {
  const [rating, setRating] = useState(0);
  const [foodData, setFoodData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleFetch = async () => {
    try {
      const response = await axios.get(`${apiPath.getSingleFood}/${id}`);
      if (response && response.status === 200) {
        setFoodData(response?.data?.data);
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(foodData);

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <section className="mobile__container">
        <div>
          <img
            src={image}
            alt="back-icon"
            onClick={() => navigate("/dashboard")}
            className="detail__back-icon"
          />
        </div>

        <div className="detail__main">
          <img
            src={
              foodData?.foodImage
                ? `http://localhost:5000${foodData?.foodImage}`
                : image1
            }
            alt="banner-image"
            className="detail__banner-image"
          />
        </div>

        <div>
          <div className="detail__img-container">
            <img
              src={foodData?.type === "Veg" ? veg : nonveg}
              alt="veg-icon"
              className="detail__veg-icon"
            />
            <p className="detail__veg-title">
              {foodData?.type ? foodData?.type : "Veg"}
            </p>
          </div>

          <div className="detail__title">
            <p className="detail__title-content">
              {foodData?.name ? foodData.name : "Veggie tomato mix"}
            </p>
            <img src={image3} className="detail__heart" />
          </div>

          <p className="detail__price">
            {foodData?.price ? `Rs. ${foodData.price}` : "Rs. 550"}
          </p>
          <Rating
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
          />

          <p className="detail__description">
            {foodData?.description
              ? foodData.description
              : "Lorem ipsum dolor sit amet consectetur adipisicing"}
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
