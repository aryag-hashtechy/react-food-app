import React, { useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import bannerImage from "../../assets/images/Mask Group.png";
import BaseButton from "../../component/base/BaseButton";
import heartIcon from "../../assets/icons/heartIcon.svg";
import vegIcon from "../../assets/icons/veg-icon.svg";
import nonVegIcon from "../../assets/icons/non-veg-icon.png";
import { Rating } from "react-simple-star-rating";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import endPoints from "../../common/endPoints";
import axios from "axios";

const FoodPage = () => {
  const [rating, setRating] = useState(0);
  const [ foodData, setFoodData ] = useState();
  const navigate = useNavigate();
  const {id} = useParams();

  const handleRating = (rate) => {
    setRating(rate);
  };


  const handleFetch = async () =>{
    try{
      const response = await axios.get(`${endPoints.getSingleFood}${id}`)
      if( response && response?.status === 200){
        setFoodData(response?.data?.data);
      }else{
        console.log(response?.data?.message);
      }
    }catch(err){
      console.log(err)
    }
  }

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) =>
    console.log(value, index);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(()=>{
    handleFetch()
  },[])

  return (
    <div className="food">
      <div className="food__container">
        <img src={backIcon} alt="back-icon" onClick={()=>navigate("/dashboard")} className="food__back-icon" />

        <div className="food__body">
          <div className="food__banner-container">
            <img 
            src={ foodData?.foodImage ? `http://localhost:5000${foodData?.foodImage}` : bannerImage} 
            alt="food-img" 
            className="food__banner-img" 
            />
          </div>

          <div className="food__img-container">
            <img src={ foodData?.type === "Veg" ? vegIcon : nonVegIcon } alt="veg-con" className="food__veg-icon" />

            <p className="food__img-description">{ foodData?.type ? foodData?.type : "Veg"}</p>
          </div>

          <div className="food__header-container">
            <p className="food__header">{ foodData?.name ? foodData?.name : "Veggie tomato mix"}</p>

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
              className="food__ratings"
            />

          <p className="food__price">
            <span className="food__price-heading">Price: </span>{foodData?.price ? `Rs. ${foodData?.price}` : "Rs. 500" }
          </p>
          <p className="food__description-header">Description:</p>

          <p className="food__description-body">
            {foodData?.description ? foodData?.description : 
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            }
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
