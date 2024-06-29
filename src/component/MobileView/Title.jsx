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
          <SwiperSlide id="Food" onClick={(e)=>console.log(e?.target?.id)} className="title--active">Foods</SwiperSlide>

          <SwiperSlide id="Drinks" onClick={(e)=>console.log(e?.target?.id)}>Drinks</SwiperSlide>

          <SwiperSlide>Snacks</SwiperSlide>

          <SwiperSlide>Sauces</SwiperSlide>

          <SwiperSlide>Milk</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Title;
