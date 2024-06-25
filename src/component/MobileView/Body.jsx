import React, { useState } from "react";
import SearchBar from "./SeachBar";
import Card from "./Card";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import axios from "axios";
import apiPath from "../../apiPath";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";

const Body = () => {
  const [foodItems, setFoodItems] = useState();
  const navigate = useNavigate();

  const handleFetch = async () => {
    try {
      const response = await axios.get(apiPath.getAllFood);
      if (response && response?.status === 200) {
        if (response?.data?.code === 200) {
          setFoodItems(response?.data?.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div className="body__main">
        <h1 className="body__title ">
          Delicious <br />
          food for you
        </h1>
      </div>

      <SearchBar navigateTo = {"/search-page"}/>
      <Title />

      <div>
        <p className="body__text">See more</p>
      </div>

      <div className="slider__main">
        <Swiper
          spaceBetween={-100}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {foodItems?.map((items) => (
            <SwiperSlide>
              <Card
                name={items.name}
                foodImage={items.foodImage}
                price={items.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Body;
