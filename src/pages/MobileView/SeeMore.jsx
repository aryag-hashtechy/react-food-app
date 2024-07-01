import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import SearchCard from "../../component/MobileView/SearchCard";
import axios from "axios";
import apiPath from "../../apiPath";
import Paginate from "../../component/MobileView/Paginate";
import backicon from "../../assets/icons/back-icon.svg";
import { useNavigate } from "react-router-dom";

const SeeMore = () => {
  // const location = useLocation();
  const params = useParams();
  // const queryParams = new URLSearchParams(location.search);
  const type = params?.cat || "";
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page"));
  const navigate = useNavigate();

  const [foodItems, setFoodItems] = useState();
  const [category, setCategory] = useState(type);
  const [currentPage, setCurrentPage] = useState(page);
  const [pageCount, setPageCount] = useState([1]);

  const handleFetch = async () => {
    try {
      const response = await axios.get(
        `${
          apiPath.getAllFood
        }?category=${category}&page=${currentPage}&status=${"Active"}`
      );
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
    console.log(id);
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
      <div className="see-more__main">
        <div className="see-more__header">
          <img
            src={backicon}
            className="see-more__back-icon"
            onClick={() => navigate(`/dashboard`)}
          />
        </div>
        <div className="see-more__layout">
          {foodItems &&
            foodItems?.map((items) => (
              <SearchCard
                key={items.id}
                name={items.name}
                price={items.price}
                foodImage={items.foodImage}
              />
            ))}
        </div>
        <div className="see-more__btn">
          <Paginate
            pageCount={pageCount}
            handlePageChange={handlePageChange}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default SeeMore;
