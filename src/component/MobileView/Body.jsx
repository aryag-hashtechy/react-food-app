import React from "react";
import SearchBar from "./SeachBar";
import Card from "./Card";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Body = () => {
  return (
    <>
      <div className="body-main">
        <h1 className="body-title ">
          Delicious <br />
          food for you
        </h1>
      </div>

      <SearchBar />
      <Title />
      <div>
        <p className="see-more">See more</p>
      </div>
      <Swiper
        spaceBetween={-130}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Body;
