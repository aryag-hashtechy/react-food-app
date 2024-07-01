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
import Pagination from "./Pagination";

const Body = () => {
  const [foodItems, setFoodItems] = useState();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([1]);
  const [limit, setLimit] = useState(5);
  const [category, setCategory] = useState("Foods");

  const handleFetch = async () => {
    try {
      const response = await axios.get(
        `${
          apiPath.getAllFood
        }?category=${category}&status=${"Active"}&page=${currentPage}`
      );
      if (response && response?.status === 200) {
        setFoodItems(response?.data?.data?.data);
        handlePageCount(response?.data?.data?.totalPages);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageCount = (totalPage) => {
    let page = [];
    let count = 1;
    while (count <= totalPage) {
      page.push(count);
      count++;
    }
    setPageCount(page);
  };

  const handlePageChange = (id) => {
    setCurrentPage(id);
  };

  const handleIncrement = () => {
    if (currentPage < pageCount?.length) {
      setCurrentPage((items) => ++items);
    }
  };

  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage((items) => --items);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [currentPage]);

  return (
    <>
      <div className="body__main">
        <h1 className="body__title ">
          Delicious <br />
          food for you
        </h1>
      </div>

      <SearchBar navigateTo={"/search-page"} />
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
                id={items?.id}
                name={items.name}
                foodImage={items.foodImage}
                price={items.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="section__paginate">
        <Pagination
          pageCount={pageCount}
          handlePageChange={handlePageChange}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Body;
