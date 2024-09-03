import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import SearchCard from "../../component/MobileView/SearchCard";
import { useDebounce } from "use-debounce";
import endPoints from "../../common/endPoints";
import { useNavigate } from "react-router-dom";
import axiosProvider from "../../common/axiosProvider";

const SearchPage = () => {
  const [value, setValue] = useState();
  const [searchText] = useDebounce(value, 1000);
  const [count, setCount] = useState();
  const [searchData, setSearchData] = useState();
  const navigate = useNavigate();

  const handleSearch = async (searchText) => {
    try {
      let search = searchText ? searchText : "";

      const response = await axiosProvider({ method: "GET" , apiURL: endPoints.searchItems, params: { search }})

      if (response && response.status === 200) {
        setSearchData(response?.data?.data);
        setCount(response?.data?.count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  return (
    <div className="search__background">
      <div className="search__header--container">
        <div className="search__head">
          <img
            src={backIcon}
            alt="back-icon"
            onClick={() => navigate("/dashboard")}
            className="search__back--icon"
          />

          <input
            type="search"
            id="search"
            name="search"
            onChange={(e) => setValue(e?.target?.value)}
            className="search__search--bar"
          />
        </div>
      </div>

      <div className="search__card--body">
        <p className="search__message">Found {count} results</p>
        <div className="search__card--layout">
          {searchData?.map((items) => (
            <SearchCard
              id={items?.id}
              name={items?.name}
              foodImage={items?.foodImage}
              price={items?.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
