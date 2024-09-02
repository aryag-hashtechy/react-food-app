import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import SearchCard from "../../component/MobileView/SearchCard";
import endPoints from "../../common/endPoints";
import backicon from "../../assets/icons/back-icon.svg";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import axiosProvider from "../../common/axiosProvider";
import InfiniteScroll from "../../common/InfiniteScroll";

const SeeMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const type = params?.cat || "";
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState([]);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState(type);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchText] = useDebounce(value, 1000);

  const handleFetch = async (page, searchText) => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: endPoints.getAllFood,
        params: { category, page, search: searchText },
      });
      if (response?.status === 200 && response?.data?.data?.data) {
        if (page > 1) {
          setFoodItems((prevItems) => [
            ...prevItems,
            ...response?.data?.data?.data,
          ]);
        } else {
          setFoodItems(response?.data?.data?.data);
        }
        setPageCount(response?.data?.data?.totalPage);
        setSearchParams({ page });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    setCurrentPage(1)
    handleFetch(1, searchText);
  }, [searchText]);

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
            onChange={(e) => {
              setValue(e?.target?.value);
            }}
            className="see-more__searchbar"
          />
        </div>

        <div className="see-more__layout">
          {foodItems?.map((items) => (
            <SearchCard
              id={items.id}
              name={items.name}
              price={items.price}
              foodImage={items.foodImage}
            />
          ))}
        </div>

        {currentPage < pageCount && (
          <InfiniteScroll
            handleFetch={handleFetch}
            setCurrentPage={setCurrentPage}
            searchText={searchText}
          />
        )}
      </div>
    </>
  );
};

export default SeeMore;
