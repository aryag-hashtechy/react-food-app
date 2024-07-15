import React, { useState } from "react";
import SearchBar from "./SeachBar";
import Card from "./Card";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import axios from "axios";
import apiPath from "../../apiPath";
import { useNavigate } from "react-router-dom";
import Paginate from "./Paginate";
import axiosProvider from "../../common/axiosProvider";

// Import Swiper styles
import "swiper/css";

const Body = () => {
  const [foodItems, setFoodItems] = useState();
  const [category, setCategory] = useState("Foods");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState([1]);
  const [limit, setLimit] = useState(5);
  const navigate = useNavigate();

  const handleFetch = async () => {
    try {
      const response = await axiosProvider({method: "GET" , apiURL:apiPath.getAllFood, params: { category, page:currentPage } });
      if (response && response?.status === 200) {
        setFoodItems(response?.data?.data?.data);
        handlePageCount(response?.data?.data?.totalPage);
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
  }, [currentPage, category]);

  return (
    <>
      <div className="body__main">
        <h1 className="body__title ">
          Delicious <br />
          food for you
        </h1>
      </div>

      <SearchBar navigateTo={"/search-page"} />
      <Title setCategory={setCategory} setCurrentPage={setCurrentPage} category={category} />

      <p
        className="body__text"
        onClick={() => navigate(`/category/${category}?page=${currentPage}`)}
      >
        See more
      </p>

      <div className="slider__main">
        <Swiper spaceBetween={-100} slidesPerView={1}>
          {foodItems &&
            foodItems?.map((items) => (
              <SwiperSlide>
                <Card
                  id={items?.id}
                  name={items?.name}
                  foodImage={items?.foodImage}
                  price={items?.price}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="body__paginate">
        <Paginate
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
