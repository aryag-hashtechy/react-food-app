import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Title = () => {
  return (
    <>
      <div className=" pl-8 mt-8 text-center text-[#9A9A9D] font-semibold">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="text-primary border-b-2 border-primary  pb-2">
            Foods
          </SwiperSlide>

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
