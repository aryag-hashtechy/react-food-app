import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Title = ({ setCategory, setCurrentPage, category, totalCategory }) => {

  const handlePageChange = (id) => {
    setCategory(id);
    setCurrentPage(1);
  };

  const handleDisplay = (id) => {
    return !totalCategory?.some((data) => data.category === id)
  }

  return (
    <div className="title__main">
      <Swiper spaceBetween={20} slidesPerView={2}>
        <SwiperSlide
          id="Foods"
          hidden={handleDisplay("Foods")}
          onClick={(e) => handlePageChange(e?.target?.id)}
          className={`title__category ${category === "Foods" ? "active" : ""}`}
        >
          Foods
        </SwiperSlide>

        <SwiperSlide
          id="Drinks"
          onClick={(e) => handlePageChange(e?.target?.id)}
          hidden={handleDisplay("Drinks")}
          className={`title__category ${category === "Drinks" ? "active" : ""}`}
        >
          Drinks
        </SwiperSlide>

        <SwiperSlide
          id="Snacks"
          onClick={(e) => handlePageChange(e?.target?.id)}
          hidden={handleDisplay("Snacks")}
          className={`title__category ${category === "Snacks" ? "active" : ""}`}
        >
          Snacks
        </SwiperSlide>

        <SwiperSlide
          id="Sauces"
          onClick={(e) => handlePageChange(e?.target?.id)}
          className={`title__category ${category === "Sauces" ? "active" : ""}`}
          hidden={handleDisplay("Sauces")}
        >
          Sauces
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Title;
