import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "../../component/MobileView/SearchCard";
import axios from "axios";
import apiPath from "../../apiPath";
import Paginate from "../../component/MobileView/Paginate";
import { useDebounce } from "use-debounce";
import backIcon from '../../assets/icons/back-icon.svg'
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SeeMore = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  const type = queryParams.get("category");
  const page = parseInt(queryParams.get("page"));
  const navigate = useNavigate();

  const [foodItems, setFoodItems] = useState([]);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [category, setCategory] = useState(type);
  const [currentPage, setCurrentPage] = useState(page);
  const [pageCount, setPageCount] = useState([1]);
  const [searchText] = useDebounce(value, 2000);

  const handleFetch = async (searchText) => {
    try {
      if(searchText){
        setFoodItems([])
        setCurrentPage(1)
        setSearchParams({ category, page: currentPage })
      }
      const response = await axios.get(
        `${apiPath.getAllFood}?category=${category}&page=${currentPage}&search=${searchText}`
      );
      if (response && response?.status === 200) {
        setFoodItems((prevItems) => [...prevItems, ...response.data.data.data]);
        handlePageCount(response?.data?.data?.totalPage);
      }
    } catch (error) {
      setPageCount([1]);
      setCurrentPage(error.response?.data?.data?.currentPage);
      console.log(error.response)
    }
  };

  const handlePageCount = (totalPage) => {
    let a = [];
    let count = 1;
    while (count <= totalPage) {
      a.push(count);
      count++;
    }
    setPageCount(a);
  };

  const handlePageChange = (id) => {
    setCurrentPage(id);
    setSearchParams({ category , page: id })
  };

  const handleIncrement = () => {
    if (currentPage < pageCount?.length) {
      setCurrentPage((items) => (
        ++items,
        setSearchParams({ category, page: items })
      ));
    }
  };

  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage((items) => (
        --items,
        setSearchParams({ category, page: items })
      ));
    }
  };

  useEffect(() => {
    handleFetch(searchText);
  }, [currentPage, category, searchText]);

  return (
    <div className="category__main">
      <div className="category__header">
      <img src={backIcon} alt="back-icon" className="category__back-icon" onClick={()=>navigate("/dashboard")}/>

      <input
        type="search"
        id="search"
        name="search"
        onChange={(e) => setValue(e?.target?.value)}
        className="category__search-bar"
      />
      </div>

      <div className="category__layout">
        {foodItems &&
          foodItems?.map((items) => (
            <SearchCard
              id = { items?.id }
              key={items?.id}
              name={items?.name}
              price={items?.price}
              foodImage={items?.foodImage}
            />
          ))}
      </div>
      <div>
        <div className="category__paginate">
          <Paginate
            pageCount={pageCount}
            handlePageChange={handlePageChange}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
