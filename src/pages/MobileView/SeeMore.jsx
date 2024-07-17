import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import SearchCard from "../../component/MobileView/SearchCard";
import axios from "axios";
import apiPath from "../../apiPath";
import Paginate from "../../component/MobileView/Paginate";
import backicon from "../../assets/icons/back-icon.svg";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import axiosProvider from "../../common/axiosProvider";

const SeeMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const type = params?.cat || "";
  const page = parseInt(searchParams.get("page"));
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState([]);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState(type);
  const [currentPage, setCurrentPage] = useState(page);
  const [pageCount, setPageCount] = useState([1]);
  const [searchText] = useDebounce(value, 2000);

  const handleFetch = async (searchText) => {
    try {
      if (searchText) {
        setFoodItems([]);
        setCurrentPage(1);
        setSearchParams({page: currentPage });
      }
      searchText ? setFoodItems([]) : <></>;
      const response = await axiosProvider({ method: "GET" , apiURL: `${apiPath.getAllFood}`, params: { category, page: currentPage, search: searchText } })

      if (response && response?.status === 200) {
        if (response?.data?.data?.data.length) {
          setFoodItems((prevItems) => [
            ...prevItems,
            ...response?.data?.data?.data,
          ]);
          handlePageCount(response?.data?.data?.totalPage);
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handlePageCount = (totalPage) => {
    let arrayCount = [];
    let count = 1;
    while (count <= totalPage) {
      arrayCount.push(count);
      count++;
    }
    setPageCount(arrayCount);
  };

  const handlePageChange = (id) => {
    setCurrentPage(id);
    setSearchParams({ page: id });
  };

  const handleIncrement = () => {
    if (currentPage < pageCount?.length) {
      setCurrentPage(
        (items) => (++items, setSearchParams({ page: items }))
      );
    }
  };

  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage(
        (items) => (--items, setSearchParams({ page: items }))
      );
    }
  };

  useEffect(() => {
    handleFetch(searchText);
  }, [currentPage, category, searchText]);

  return (
    <>
      <div className="see-more__main">
        <div className="see-more__header">
          <img
            src={backicon}
            className="see-more__back-icon"
            onClick={() => navigate(`/dashboard`)}
          />

          <input
            type="search"
            id="search"
            name="search"
            onChange={(e) => setValue(e?.target?.value)}
            className="see-more__searchbar"
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
          {foodItems.length > 0 && (
            <Paginate
              pageCount={pageCount}
              handlePageChange={handlePageChange}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SeeMore;
