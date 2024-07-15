import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Title = ({ setCategory, setCurrentPage , category}) => {

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
          <SwiperSlide id="Foods" onClick={(e)=>handlePageChange(e?.target?.id)} className={`title__category ${category === "Foods" ? "active" : ""}`}>Foods</SwiperSlide>

          <SwiperSlide id="Drinks" onClick={(e)=>handlePageChange(e?.target?.id)} className={`title__category ${category === "Drinks" ? "active" : ""}`}>Drinks</SwiperSlide>

          <SwiperSlide id="Snacks" onClick={(e)=>handlePageChange(e?.target?.id)} className={`title__category ${category === "Snacks" ? "active" : ""}`}>Snacks</SwiperSlide>

          <SwiperSlide id="Sauces" onClick={(e)=>handlePageChange(e?.target?.id)} className={`title__category ${category === "Sauces" ? "active" : ""}`}>Sauces</SwiperSlide>

          <SwiperSlide
            id="Milk"
            onClick={(e) => handlePageChange(e?.target?.id)}
          >
            Milk
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Title;
