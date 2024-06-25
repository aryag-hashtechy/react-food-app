import React, { useEffect, useState } from "react";
import backIcon from "../../assets/icons/back-icon.svg";
import SearchCard from "../../component/MobileView/SearchCard";
import axios from "axios";
import { useDebounce } from "use-debounce";
import apiPath from "../../apiPath";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [value, setValue] = useState();
  const [searchText] = useDebounce(value, 2000);
  const [count, setCount] = useState()
  const [searchData, setSearchData] = useState();
  const navigate = useNavigate();

  const handleSearch = async (searchText) => {
    try {
      let search = searchText === undefined ? "" : searchText; 
      const response = await axios.get(
        `${apiPath.searchItems}?search=${search}`
      );
      if (response && response.status === 200) {
        if (response.data.code === 200) {
          setSearchData(response?.data?.data);
          setCount(response?.data?.count)
        }
      } else {
        console.log(response?.data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);
    
  return (
    <div className="search__background">
      <div className="search__header--container">
        <div className="search__head">
          <img src={backIcon} alt="back-icon" onClick={()=>navigate("/dashboard")} className="search__back--icon" />

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
            name={items.name}
            foodImage={items.foodImage}
            price={items.price}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default SearchPage;
