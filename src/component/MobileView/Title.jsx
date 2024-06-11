import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Title = () => {
  return (
    <>
      <div className="title__main">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="title--active">Foods</SwiperSlide>

          <SwiperSlide>Drinks</SwiperSlide>

          <SwiperSlide>Snacks</SwiperSlide>

          <SwiperSlide>Sauces</SwiperSlide>

          <SwiperSlide>Milk</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Title;
