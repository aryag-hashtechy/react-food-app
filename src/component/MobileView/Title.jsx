import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Title = ({ setCategory, setCurrentPage }) => {

  const handlePageChange = (id) => {
    setCategory(id);
    setCurrentPage(1);
  }

  return (
    <>
      <div className="title__main">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
        >
          <SwiperSlide id="Foods" onClick={(e)=>handlePageChange(e?.target?.id)} className="title--active">Foods</SwiperSlide>

          <SwiperSlide id="Drinks" onClick={(e)=>handlePageChange(e?.target?.id)}>Drinks</SwiperSlide>

          <SwiperSlide id="Snacks" onClick={(e)=>handlePageChange(e?.target?.id)}>Snacks</SwiperSlide>

          <SwiperSlide id="Sauces" onClick={(e)=>handlePageChange(e?.target?.id)}>Sauces</SwiperSlide>

          <SwiperSlide>Milk</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Title;
